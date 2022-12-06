import designerService from '../../service/designer/designer-service';
import * as Boom from '@hapi/boom';
const dotenv = require('dotenv');
dotenv.config();

class DesignerController {
  async getDesigners() {
    try {
      return designerService.getDesigners();
    } catch(e) {
       return Boom.badRequest(e)
    }
  }
}

export default new DesignerController();
