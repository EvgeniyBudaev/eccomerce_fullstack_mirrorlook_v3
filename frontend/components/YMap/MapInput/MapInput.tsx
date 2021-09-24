import React, { useRef, useCallback } from "react";
import cn from "classnames";
import Downshift, { DownshiftState, StateChangeOptions } from "downshift";
import * as ym from "react-yandex-maps";

const css = cn("c-MapInput");

export interface MapInputProps {
  id?: string;
  inputValue: string;
  handleInput: (input: string) => void;
  handleChange: (selected: any) => void;
  items: any[];
}

export const MapInput: React.FC<MapInputProps> = p => {
  const itemToString = item => (item ? item.value : "");

  const stateReducer = (
    state: DownshiftState<any>,
    changes: StateChangeOptions<any>
  ) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.changeInput:
        p.handleInput(changes.inputValue);
        break;
      case Downshift.stateChangeTypes.clickItem:
        p.handleChange(changes.selectedItem);
        break;
    }

    return changes;
  };

  return (
    <Downshift
      inputValue={p.inputValue}
      stateReducer={stateReducer}
      itemToString={itemToString}
    >
      {d => (
        <div>
          <input
            className={"MapInput-Input"}
            id={p.id}
            placeholder="Адрес"
            {...d.getInputProps()}
          />
          <div {...d.getMenuProps()}>
            {d.isOpen && p.items
              ? p.items.map((item, index) => (
                  <div
                    action
                    key={index}
                    {...d.getItemProps({
                      key: item.value,
                      index,
                      item,
                      style: {
                        backgroundColor:
                          d.highlightedIndex === index ? "lightgray" : "white",
                        fontWeight: d.selectedItem === item ? "bold" : "normal",
                      },
                    })}
                  >
                    {item.value}
                  </div>
                ))
              : null}
          </div>
        </div>
      )}
    </Downshift>
  );
};
