export type IUIState = {
  state: { [key: string]: any };
};

export type IEntityActionPayload = {
  entityType: string;
  state: any;
};
