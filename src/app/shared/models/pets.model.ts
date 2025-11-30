import {PetGenderEnum, PetTypeEnum} from '../enums/pets.enum';
import {Asset} from 'contentful';

export interface Pet {
  id: string;
  item: any;
  name: string;
  type: string;
  gender: string;
  age: string;
  breed: string;
  size: string;
  desc: string;
  story: string;
  tags: string[];
  cover: Asset;
  images: Asset[];
}

export interface PetFilterCriteria {
  type?: PetTypeEnum;
  gender?: PetGenderEnum;
}
