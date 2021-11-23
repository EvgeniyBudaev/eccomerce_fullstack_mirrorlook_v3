import React, { ForwardedRef, forwardRef } from "react";
import classNames from "classnames";
import { Accordion, Button, Checkbox, IconButton, Spacer } from "ui-kit";
import {
  IAsideOption,
  ICheckedMirrors,
} from "../Catalog/Mirrors/MirrorsAside/MirrorsAside";
import styles from "./FilterBarMobile.module.scss";

export interface IFilterBarMobileProps {
  className?: string;
  asideOptions?: IAsideOption[];
  checked?: ICheckedMirrors;
  ref: ForwardedRef<HTMLDivElement>;
  onChangeCheckedBox?: (
    event: React.ChangeEvent<HTMLInputElement>,
    nameGroup: string
  ) => void;
  onClose?: () => void;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const FilterBarMobile = forwardRef(
  (
    {
      className,
      asideOptions,
      checked,
      onChangeCheckedBox,
      onClose,
      onSubmit,
    }: IFilterBarMobileProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      onSubmit(event);
      onClose();
    };

    return (
      <div className={classNames(styles.FilterBarMobile, className)} ref={ref}>
        <div className={styles.FilterBarMobileHeader}>
          <Spacer />
          <div className={styles.FilterBarMobileHeaderTitle}>Фильтры</div>
          <IconButton
            className={styles.FilterBarMobileHeaderClose}
            typeIcon="Close"
            onClick={onClose}
          />
        </div>
        <div className={styles.FilterBarMobileContent}>
          <form className={styles.AsideFilter} onSubmit={handleSubmit}>
            {asideOptions.map(item => (
              <Accordion
                key={item.option.optionNameRu}
                title={item.option.optionNameRu}
                active={true}
              >
                {item.entities.map((label, index) => (
                  <Checkbox
                    className={styles.CheckboxItem}
                    id={index.toString() + label}
                    label={label}
                    checkedBox={checked}
                    key={index}
                    nameGroup={item.option.optionNameOnBackend}
                    onClick={(event, nameGroup) =>
                      onChangeCheckedBox(event, nameGroup)
                    }
                  />
                ))}
              </Accordion>
            ))}
            <Button
              className={styles.AsideButton}
              type="submit"
              onClick={() => {}}
            >
              Применить
            </Button>
          </form>
        </div>
      </div>
    );
  }
);

FilterBarMobile.displayName = "FilterBarMobile";
