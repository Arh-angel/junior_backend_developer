import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import Standart from './Standart';

@Entity()
class Designer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Standart, (standart) => standart.designer)
  standart: Standart[]
}

export default Designer;