import React from "react";
import classNames from "classnames";
import { IMirror } from "types/mirror";
import { MirrorsListItem } from "./MirrorsListItem/MirrorsListItem";
import styles from "./MirrorsList.module.scss";

export interface IMirrorsListProps {
  mirrors: IMirror[];
  isClickedDisplayLine: boolean;
}

export const MirrorsList: React.FC<IMirrorsListProps> = ({
  mirrors,
  isClickedDisplayLine,
}) => {
  return (
    <ul
      className={classNames(styles.MirrorsList, {
        [styles.MirrorsList__line]: isClickedDisplayLine,
      })}
    >
      {mirrors.map(mirror => (
        <MirrorsListItem
          key={mirror.id}
          mirror={mirror}
          isClickedDisplayLine={isClickedDisplayLine}
        />
      ))}
    </ul>
  );
};
