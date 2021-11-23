import React from "react";
import classNames from "classnames";
import { Icon } from "ui-kit";
import classes from "./SliderPrevArrow.module.scss";

export interface ISliderPrevArrowProps {
  className?: string;
  style?: React.CSSProperties;
  styles?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const SliderPrevArrow: React.FC<ISliderPrevArrowProps> = ({
  className,
  style,
  styles,
  onClick,
}) => {
  return (
    <div
      className={classNames(classes.SliderArrow, className)}
      style={{ ...style, ...styles }}
      onClick={onClick}
    >
      <div className={classes.SliderArrowButton}>
        <Icon className={classes.SliderArrowCustom} type="ArrowLeft" />
      </div>
    </div>
  );
};
