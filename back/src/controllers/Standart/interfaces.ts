import { Decorate, IPagination } from '../../common/interfaces';

import {
  IAdCreateParams,
  IAdFindParams,
  IAdSoftDeleteParams,
  IAdUpdateParams,
  IGetAdParams,
  IGetAdsCategoryParams,
  IGetUserAdsParams,
} from '../../service/standart/interfaces';

export type CreateAdRequest = Decorate<{
  payload: IAdCreateParams;
}>;

export type FindAdRequest = Decorate<{
  query: IAdFindParams;
}>;

export type GetAdsCategoryRequest = Decorate<{
  params: IGetAdsCategoryParams;
}>;

export type UpdateAdRequest = Decorate<{
  payload: IAdUpdateParams;
}>;
export type SoftDeleteAd = Decorate<{ 
  payload: IAdSoftDeleteParams 
}>;

export type Restore = Decorate<{ 
  payload: IAdSoftDeleteParams 
}>;

export type GetAd = Decorate<{ 
  params: IGetAdParams 
}>;

export type GetUserAds = Decorate<{ 
  params: IGetUserAdsParams 
}>;