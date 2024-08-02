import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Status } from './typedef.irisations';

export type User = {
  username?: string;
  usernameError?: boolean;
  email?: string;
  emailError?: boolean;
  password?: string;
  passwordError?: boolean;
};

export type DateRange = {
  startDate: Date;
  endDate: Date;
};

export type MenuItem = {
  id: number;
  name?: string;
  href: string;
  icon?: IconDefinition;
  subMenu?: MenuItem[];
};

export enum Lang {
  FR = 0,
  EN
}

export enum CRUD {
  CREATE = 10,
  READ,
  UPDATE,
  DELETE
}
export enum Level {
  INFO = 100,
  WARNING,
  ERROR
  
  }
  

export type Scoop = {
  id : string;
  pageId: number;
  message: string[];
  level: Level;
  dateRange: DateRange;
  status: Status;
  date: {
    create: Date;
    update: Date;
  };
};