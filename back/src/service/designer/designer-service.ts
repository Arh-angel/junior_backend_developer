import dataSourse from '../../../ormconfig';
import Designer from '../../models/database/entity/Designer';

class DesignerService {
  async create(name) {
    const designerRepo = dataSourse.getRepository(Designer);

    const condidate = await designerRepo.findOne({
      select: ['name'],
      where: { name: name },
    });

    if (condidate) {
      throw new Error(`Пользователь с именем ${name} уже существует`)
    }

    const designer = await designerRepo.save({
      name
    });

    const response = await designerRepo.findOne({
      select: ['id', 'name'],
      where: { id: designer.id },
    });

    if (!response) {
      throw new Error('Не удалось создать конструктора');
    }

    return response
  }
}

export default new DesignerService();