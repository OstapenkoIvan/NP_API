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
}

export interface IInitialTracksState {
  data: ITracksState[];
  isLoading: string;
  error: string | null;
}
