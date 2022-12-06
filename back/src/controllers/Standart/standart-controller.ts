import * as Boom from '@hapi/boom';
import standartService from '../../service/standart/standart-service';

class StandartController {
  async create(req, h) {
    try {
      const userData = await standartService.create(req);
      
      return h.response(userData);
    } catch(e) {
       return Boom.badRequest(e)
    }
  }

  async getStandarts() {
    try {
      return standartService.getStandarts();
    } catch (error) {
      return Boom.internal(error.message);
    }
  }
}

export default new StandartController();