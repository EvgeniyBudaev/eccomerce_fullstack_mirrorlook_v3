import React, { CSSProperties } from "react";

export interface IMapInputProps {
  style?: CSSProperties;
  type: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const MapInput: React.FC<IMapInputProps> = ({
  style,
  type,
  value,
  onChange,
  ...inputProps
}) => {
  return (
    <>
      <input
        style={style}
        type={type}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
    </>
  );
};
