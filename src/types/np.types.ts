export interface ITracksState {
  _id?: string;
  Number: number;
  ScheduledDeliveryDate: Date;
  ActualDeliveryDate?: Date;
  TrackingUpdateDate?: Date;
  DateCreated: Date;
  StatusCode: number;
  Status: string;
  WarehouseRecipient: string;
  WarehouseSender: string;
  WarehouseRecipientAddress: string;
  WarehouseSenderAddress: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IInitialTracksState {
  data: ITracksState[];
  current: ITracksState | Record<string, never>;
  isLoading: string;
  error: string | null;
}

export interface IWhState {
  _id?: string;
  Number: number;
  Description: string;
  ShortAddress: string;
  CityDescription: string;
  SettlementAreaDescription: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IInitialWhState {
  data: IWhState[];
  total: number;
  isLoading: string;
  error: string | null;
}
