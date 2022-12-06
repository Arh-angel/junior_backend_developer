import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import Designer from './Designer';

@Entity()
class Standart {
  @PrimaryGeneratedColumn()
  id: number

  @Column({default: ''})
  title: string

  @ManyToOne(() => Designer, (designer) => designer.standart)
  designer: Designer
}

export default Standart;
