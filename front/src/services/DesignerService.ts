import { AxiosResponse } from 'axios';
import apiAxios from '../network';

export default class DesignerService {
  static async getDesigner(): Promise<AxiosResponse<any>> {
    return apiAxios.get<any>('/getDesigner');
  }
}
