import dataSourse from '../../../ormconfig';
import Designer from '../../models/database/entity/Designer';

class DesignerService {
  async getDesigners() {
    const designerRepo = dataSourse.getRepository(Designer);

    const allDesigners = await designerRepo
    .createQueryBuilder('designer')
    .getRawMany();

    if(!allDesigners) {
      throw new Error('Создайте конструкторов в базе!');
    }

    return allDesigners;
  }
}

export default new DesignerService();