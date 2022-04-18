export enum SystemStatusEnum {
  NORMAL = "NORMAL",
  APPLIED = "APPLIED",
  AWAITING = "AWAITING",
}

export type SystemCheckOptionDTO = {
  id: string;
  title: string;
  status: SystemStatusEnum;
};
