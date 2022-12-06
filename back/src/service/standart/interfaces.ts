interface IStandart {
  id: number;
  title: string;
}

export interface IStandartCreateParams extends IStandart {
  designer: any
}

export interface IGetStandartsParams {
  title: string;
}