import {
  SystemCheckOptionDTO,
  SystemStatusEnum,
} from "../models/system-check.model";

const SystemCheckService = {
  getSystemChecks: (): SystemCheckOptionDTO[] => {
    return [
      {
        id: "1",
        title: "All systems check",
        status: SystemStatusEnum.NORMAL,
      },
      {
        id: "2",
        title: "Rendezvous burn slow",
        status: SystemStatusEnum.NORMAL,
      },
      {
        id: "3",
        title: "Prepare rendezvous burn",
        status: SystemStatusEnum.NORMAL,
      },
      {
        id: "4",
        title: "Thermal Shield",
        status: SystemStatusEnum.APPLIED,
      },
      {
        id: "5",
        title: "Burn go/No-go",
        status: SystemStatusEnum.NORMAL,
      },
      {
        id: "6",
        title: "Power completion",
        status: SystemStatusEnum.AWAITING,
      },
      {
        id: "7",
        title: "Station deck check",
        status: SystemStatusEnum.NORMAL,
      },
    ];
  },
};

export default SystemCheckService;
