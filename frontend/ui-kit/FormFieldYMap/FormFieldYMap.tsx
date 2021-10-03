import React from "react";
import classNames from "classnames";
import GeoSearch, { GeoSearchSuggestion } from "components/YMap/GeoSearch";
import { PickMapState } from "components/YMap/PickMap";
import styles from "./FormFieldYMap.module.scss";

export type FormFieldYMapType = "text";

export interface IFormFieldYMapProps {
  className?: string;
  error?: string;
  label?: string;
  mapState?: PickMapState;
  name?: string;
  searchState?: {
    value: string;
    suggestions: GeoSearchSuggestion[];
    showSuggestions: boolean;
  };
  type: FormFieldYMapType;
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
  onStateChange?: React.Dispatch<
    React.SetStateAction<{
      value: string;
      suggestions: GeoSearchSuggestion[];
      showSuggestions: boolean;
    }>
  >;
  onSearch?: React.Dispatch<React.SetStateAction<PickMapState>>;
}

export const FormFieldYMap: React.FC<IFormFieldYMapProps> = ({
  className,
  error,
  label,
  name,
  searchState,
  type,
  isFocused,
  onBlur,
  onFocus,
  onStateChange,
  onSearch,
}) => {
  return (
    <div
      className={classNames(styles.FormField, className, {
        [styles.FormField__active]: isFocused,
      })}
    >
      <label className={styles.FormField_Label} htmlFor={name}>
        {label}
      </label>
      {type === "text" && (
        <>
          <GeoSearch
            className={classNames({
              [styles.Input__active]: isFocused,
              [styles.Input__error]: error,
            })}
            error={error}
            name={name}
            state={searchState}
            isFocused={isFocused}
            onBlur={onBlur}
            onFocus={onFocus}
            onStateChange={onStateChange}
            onSearch={onSearch}
          />
          {error && <div className={styles.ErrorMessage}>{error}</div>}
        </>
      )}
    </div>
  );
};
