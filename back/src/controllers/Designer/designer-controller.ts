import designerService from '../../service/designer/designer-service';
import * as Boom from '@hapi/boom';
const dotenv = require('dotenv');
dotenv.config();

class DesignerController {
  async createDesigner(req, h) {
    try {
      const { name } = req;

      const designerData = await designerService.create(name);
      
      return h.response(designerData);
    } catch(e) {
      console.log(e);
       return Boom.badRequest(e)
    }
  }
}

export default new DesignerController();
