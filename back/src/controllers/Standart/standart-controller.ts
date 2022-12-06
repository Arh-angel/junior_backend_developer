import * as Boom from '@hapi/boom';
import standartService from '../../service/standart/standart-service';

class StandartController {
  async create(req, h) {
    try {
      const userData = await standartService.create(req);
      
      return h.response(userData);
    } catch(e) {
      console.log(e);
       return Boom.badRequest(e)
    }
  }

  // async getAds() {
  //   try {
  //     return standartService.getAds();
  //   } catch (error) {
  //     console.error(`AdRepository.find(): ${error.message}`);

  //     return Boom.internal(error.message);
  //   }
  // }
}

export default new StandartController();