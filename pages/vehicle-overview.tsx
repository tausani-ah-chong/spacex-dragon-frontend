import type { NextPage } from "next";
import styles from "../styles/app.module.css";
import SystemCheckList from "./system-check-list";

const VehicleOverview: NextPage = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h2 className={styles.title}>VEHICLE OVERVIEW</h2>
      </header>
      <SystemCheckList />
    </div>
  );
};

export default VehicleOverview;
