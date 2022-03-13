import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import { Icon } from "ui-kit";
import classes from "./SliderPrevArrow.module.scss";

export interface ISliderPrevArrowProps {
  className?: string;
  backgroundColor?: string;
  opacity?: number;
  style?: React.CSSProperties;
  styles?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const SliderPrevArrow: React.FC<ISliderPrevArrowProps> = ({
  className,
  backgroundColor = "#e8e8e8",
  opacity = 0.3,
  style,
  styles,
  onClick,
}) => {
  const arrowRef = useRef(null);

  useEffect(() => {
    if (arrowRef.current) {
      arrowRef.current.style.setProperty(
        "--slider-arrow-backgroundColor",
        backgroundColor
      );
      arrowRef.current.style.setProperty(
        "--slider-arrow-opacity",
        opacity.toString()
      );
    }
  }, [backgroundColor, opacity]);

  return (
    <div
      className={classNames(classes.SliderArrow, className)}
      ref={arrowRef}
      style={{ ...style, ...styles }}
      onClick={onClick}
    >
      <div className={classes.SliderArrowButton}>
        <Icon className={classes.SliderArrowCustom} type="ArrowLeft" />
      </div>
    </div>
  );
};
