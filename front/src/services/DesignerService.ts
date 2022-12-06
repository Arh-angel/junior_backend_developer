import { AxiosResponse } from 'axios';
import apiAxios from '../network';

export default class DesignerService {
  static async getDesigners(): Promise<AxiosResponse<any>> {
    return apiAxios.get<any>('/getDesigners');
  }
}
