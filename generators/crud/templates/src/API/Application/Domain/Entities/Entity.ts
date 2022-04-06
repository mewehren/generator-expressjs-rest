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

  @Column()
  reference: string;

  getReference(): string {
    return this.reference;
  }

  setReference(reference: string): void {
    this.reference = reference;
  }

  setId(id: number){
    this.id = id;
  }

  getId() : number{
    return this.id;
  }

}
