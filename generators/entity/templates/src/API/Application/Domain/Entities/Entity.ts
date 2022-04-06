import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

import BaseEntity from './BaseEntity';

@Entity()
export default class <%= options.model %> extends BaseEntity {

  @PrimaryGeneratedColumn()
  private id: number;

  setId(id: number){
    this.id = id;
  }

  getId() : number{
    return this.id;
  }

}
