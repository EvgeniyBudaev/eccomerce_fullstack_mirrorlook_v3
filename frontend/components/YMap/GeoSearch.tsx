import React, { useCallback, useEffect, useRef } from "react";
import { withYMaps } from "react-yandex-maps";
import classNames from "classnames";
import { isEmpty } from "lodash";
import { useDebounce } from "use-debounce";
import { v4 as uuidv4 } from "uuid";
import { MapInput } from "./MapInput";
import styles from "./GeoSearch.module.scss";

export type GeoSearchProps = {
  className?: string;
  error?: string;
  name?: string;
  state: GeoSearchState;
  isFocused?: boolean;
  onBlur?: (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) => void;
  onFocus?: (
    event:
      | React.FocusEvent<HTMLInputElement>
      | React.FocusEvent<HTMLTextAreaElement>
  ) => void;
  onStateChange: (reducer: (state: GeoSearchState) => GeoSearchState) => void;
  onSearch?: (query: string) => void;
  suggestDebounce?: number;
} & Omit<React.HTMLProps<HTMLInputElement>, "onChange" | "value">;

export type GeoSearchState = {
  value: string;
  suggestions: GeoSearchSuggestion[];
  showSuggestions: boolean;
};

export type GeoSearchSuggestion = {
  uuid: string;
  displayName: string;
};

export function emptyMapSearchState(): GeoSearchState {
  return {
    value: "",
    suggestions: [],
    showSuggestions: false,
  };
}

export default withYMaps(
  (props: GeoSearchProps) => {
    const {
      className,
      error,
      name,
      state,
      isFocused,
      onStateChange,
      onBlur,
      onFocus,
      onSearch,
      suggestDebounce,
      style,
      ...inputProps
    } = props;
    const { ymaps } = props as any;

    const debounce = suggestDebounce ?? 1000;
    const [debouncedValue] = useDebounce(state.value, debounce, {
      maxWait: debounce,
    });
    const prevDebouncedValue = useRef<string | undefined>("");
    const getSuggestions = useCallback(() => {
      if (state.showSuggestions) {
        return state.suggestions;
      } else {
        return [];
      }
    }, [state]);

    useEffect(() => {
      let cancelled = false;
      if (debouncedValue) {
        const trimmed = debouncedValue.trim();
        if (
          trimmed.length &&
          trimmed !== prevDebouncedValue.current &&
          state.showSuggestions
        ) {
          prevDebouncedValue.current = trimmed;

          ymaps.suggest(trimmed).then((newSuggestions: any[]) => {
            if (!cancelled) {
              onStateChange(state => ({
                ...state,
                suggestions: newSuggestions.map(suggestion => ({
                  uuid: uuidv4(),
                  displayName: suggestion.displayName,
                })),
              }));
            }
          });
        } else {
          onStateChange(state => ({
            ...state,
            suggestions: [],
          }));
        }
      }

      return () => void (cancelled = true);
    }, [debouncedValue, ymaps, onStateChange, state.showSuggestions]);

    // useEffect(() => {
    //   console.log("EFFECT", state.value);
    // }, [state.value]);

    return (
      <div className={classNames(styles.GeoSearch, className)} style={style}>
        <MapInput
          className={classNames({
            [styles.Input__active]: isFocused,
            [styles.Input__error]: error,
          })}
          error={error}
          name={name}
          type="text"
          value={state.value}
          style={{
            width: "100%",
          }}
          onBlur={onBlur}
          onFocus={onFocus}
          onChange={event => {
            const value = event.target.value;
            onStateChange(state => ({
              ...state,
              value,
              showSuggestions: true,
            }));
          }}
          {...inputProps}
        />
        <div
          className={classNames(styles.DropDown, {
            [styles.DropDown__active]: !isEmpty(getSuggestions()),
          })}
        >
          {getSuggestions().map(suggestion => (
            <p
              key={suggestion.uuid}
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                onStateChange(() => ({
                  value: suggestion.displayName,
                  showSuggestions: false,
                  suggestions: [],
                }));

                onSearch?.(suggestion.displayName);
              }}
            >
              {suggestion.displayName}
            </p>
          ))}
        </div>
      </div>
    );
  },
  true,
  ["suggest"]
);
