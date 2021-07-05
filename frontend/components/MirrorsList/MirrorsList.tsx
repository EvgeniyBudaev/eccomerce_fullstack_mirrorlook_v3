import React from "react";
import { IMirror } from "types/mirror";
import { MirrorsListItem } from "./MirrorsListItem/MirrorsListItem";
import styles from "./MirrorsList.module.scss";

export interface IMirrorsListProps {
  mirrors: IMirror[];
}

export const MirrorsList: React.FC<IMirrorsListProps> = ({ mirrors }) => {
  return (
    <ul className={styles.MirrorsList}>
      {mirrors.map(mirror => (
        <MirrorsListItem key={mirror.id} mirror={mirror} />
      ))}
    </ul>
  );
};
