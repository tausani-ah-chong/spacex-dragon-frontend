import type { NextPage } from "next";
import { SystemStatusEnum } from "../models/system-check.model";
import SystemCheckService from "../services/system-check.service";
import SystemCheckOption from "./system-check-option";

const SystemCheckList: NextPage = () => {
  const systemChecks = SystemCheckService.getSystemChecks();

  return (
    <>
      {systemChecks.map((check) => {
        const iconColor = getIconColorByStatus(check.status);

        return (
          <SystemCheckOption
            key={check.id}
            icon={
              <span className={`material-icons ${iconColor}`}>
                check_circle
              </span>
            }
            title={check.title}
            status={check.status}
          />
        );
      })}
    </>
  );
};

const getIconColorByStatus = (status: SystemStatusEnum) => {
  switch (status) {
    case SystemStatusEnum.APPLIED:
      return "green";
    case SystemStatusEnum.NORMAL:
      return "light";
    case SystemStatusEnum.AWAITING:
      return "orange";
  }
};

export default SystemCheckList;
