import React from "react";
import classNames from "classnames";
import { Icon, IconType } from "ui-kit";
import { toCapitalize } from "utils/toCapitalize";
import styles from "./RadioCardPaymentMethod.module.scss";

export interface IRadioCardPaymentMethodProps {
  className?: string;
  name?: string;
  value?: string;
  isActive?: boolean;
  onChoice?: (name: string) => void;
}

export const RadioCardPaymentMethod: React.FC<IRadioCardPaymentMethodProps> = ({
  className,
  name,
  value = "Картой",
  isActive,
  onChoice,
}) => {
  const nameCapitalize = toCapitalize(name) as IconType;

  const handleChoice = (name: string) => {
    onChoice(name);
  };

  return (
    <div
      className={classNames(styles.RadioCardPaymentMethod, className, {
        [styles.RadioCardPaymentMethod__active]: isActive,
      })}
      onClick={() => handleChoice(name)}
    >
      <Icon
        className={styles.RadioCardPaymentMethodIcon}
        type={nameCapitalize}
      />
      <div>{value}</div>
    </div>
  );
};
