import { AxiosResponse } from 'axios';
import apiAxios from '../network';

export default class StandartService {
  static async createStandart(designer: string, title: string): Promise<AxiosResponse<any>> {
    return apiAxios.post<any>('/createStandart', { designer, title });
  }

  static async getStandart(): Promise<AxiosResponse<any>> {
    return apiAxios.get<any>('/standarts');
  }
}
