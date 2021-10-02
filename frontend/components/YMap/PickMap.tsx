import React, { useEffect, useRef } from "react";
import { Map, MapProps, withYMaps } from "react-yandex-maps";
import { useDebounce } from "use-debounce";

export type PickMapProps = {
  state: PickMapState;
  onStateChange: (state: PickMapState) => void;
  onPick?: (address: string) => void;
  debounce?: number;
  searchZoom?: number;
  marker?: React.ReactNode;
} & Omit<MapProps, "state">;

export type PickMapState = string | [number, number] | undefined;

export function emptyPickMapState(): PickMapState {
  return undefined;
}

export default withYMaps(
  (props: PickMapProps) => {
    const {
      state,
      onStateChange,
      onPick,
      debounce,
      searchZoom,
      marker,
      ymaps,
      children,
      ...mapProps
    } = props;

    const [debouncedState] = useDebounce(state, debounce ?? 0);
    const prevCoords = useRef<[number, number] | undefined>(undefined);
    const prevAddress = useRef<string | undefined>(undefined);
    const map = useRef<any | undefined>(undefined);

    useEffect(() => {
      let cancelled = false;

      if (
        Array.isArray(debouncedState) &&
        !prevCoords.current?.some((coord, i) => debouncedState[i] === coord)
      ) {
        prevCoords.current = debouncedState;

        ymaps
          .geocode(debouncedState, {
            provider: "yandex#map",
            results: 1,
          })
          .then((response: any) => {
            if (!cancelled) {
              const address = response?.geoObjects?.get(0)?.getAddressLine();
              prevAddress.current = address;

              if (address != null) {
                onPick?.(address);
              }
            }
          });
      }

      return () => void (cancelled = true);
    }, [debouncedState, onStateChange, onPick, ymaps]);

    useEffect(() => {
      let cancelled = false;

      if (typeof state === "string") {
        const trimmed = state.trim();

        if (trimmed.length && trimmed !== prevAddress.current) {
          prevAddress.current = trimmed;

          ymaps
            .search(trimmed, {
              options: {
                provider: "yandex#map",
              },
            })
            .then((response: any) => {
              if (!cancelled) {
                const queryCoords = response?.geoObjects
                  ?.get(0)
                  ?.geometry?.getCoordinates();
                if (queryCoords?.length === 2) {
                  map.current?.setCenter(queryCoords);

                  if (searchZoom != null) {
                    map.current?.setZoom(searchZoom);
                  }
                }
              }
            });
        }
      }

      return () => void (cancelled = true);
    }, [state, ymaps, searchZoom]);

    return (
      <Map
        {...mapProps}
        instanceRef={ref => {
          mapProps.instanceRef?.(ref);

          if (map.current == null) {
            map.current = ref;
            (ref as any)?.events.add(
              ["multitouchend", "actionend"],
              (event: any) => {
                if (event?.originalEvent?.action?._tickFiring !== false) {
                  onStateChange((ref as any).getCenter());
                }
              }
            );
          }
        }}
        style={{
          ...mapProps.style,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            zIndex: 1,
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pointerEvents: "none",
          }}
        >
          {marker || (
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                backgroundColor: "red",
              }}
            />
          )}
        </div>
        {children}
      </Map>
    );
  },
  true,
  ["geocode", "search"]
);
