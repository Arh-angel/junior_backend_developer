import * as Hapi from '@hapi/hapi';
import {
  IUserCreateParams,
  IUserFindParams,
} from '../../service/designer/interfaces';

type Decorate<T> = Readonly<T> & Hapi.Request;

export type CreateTestRequest = Decorate<{
  payload: IUserCreateParams;
}>;

export type FindTestRequest = Decorate<{
  query: IUserFindParams;
}>;