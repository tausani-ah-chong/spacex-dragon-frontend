import type { NextPage } from "next";
import styles from "../styles/system-check.module.css";
import { SystemStatusEnum } from "../models/system-check.model";

type SystemCheckOptionProps = {
  icon: JSX.Element;
  title: string;
  status: SystemStatusEnum;
};

const SystemCheckOption: NextPage<SystemCheckOptionProps> = (props) => {
  const { icon, title, status } = props;

  return (
    <div className={styles.container}>
      {icon}
      <div className={styles.textContainer}>
        <h2 className={styles.text}>{title.toUpperCase()}</h2>
        <p
          className={
            status === SystemStatusEnum.NORMAL ? styles.statusText : styles.text
          }
        >
          {status.toLowerCase()}
        </p>
      </div>
    </div>
  );
};

export default SystemCheckOption;
