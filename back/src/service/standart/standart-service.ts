import { IStandartCreateParams } from './interfaces';
import dataSourse from '../../../ormconfig';
import Standart from '../../models/database/entity/Standart';
import Designer from '../../models/database/entity/Designer';

class StandartService {
  async create(params:IStandartCreateParams) {

    const {title, designer} = params;
    
    const standartRepo = dataSourse.getRepository(Standart);
    const designerRepo = dataSourse.getRepository(Designer);

    const currentStandart = await standartRepo
        .createQueryBuilder('standart')
        .where('standart.title = :title', { title })
        .leftJoin('standart.designer', 'designer')
        .andWhere('designer.id=:designer', { designer })
        .getOne();

    if (currentStandart) {
     throw new Error('Вы уже отправляли заявку на этот документ, она уже была учтена');
    }

    const standart = await standartRepo.save({title, designer});

    const responce = await standartRepo.findOne({
      select: ['id', 'title', 'designer'],
      relations: ['designer'],
      where: { id: standart.id }
    });

    if (!responce) {
      throw new Error(`Не удалось создать заявку`)
    }

    const allStandarts = await standartRepo
    .createQueryBuilder('standart')
    .select('standart.title')
    .addSelect("MAX(standart.title) AS Title")
    .addSelect("COUNT(standart.title) AS Count")
    .groupBy('standart.title')
    .orderBy("Count", "DESC")
    .getRawMany();

    console.log(allStandarts);

    return allStandarts;
  }
}

export default new StandartService();