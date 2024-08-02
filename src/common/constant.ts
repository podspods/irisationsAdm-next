import { Level, Scoop } from './typedef';
import { Option, PageId, Status } from './typedef.irisations';

export const dateInit = new Date('1900-01-01');
export const today = new Date();
export const dateRangeInit = {
  startDate: dateInit,
  endDate: dateInit
};
export const dateRangeToday = {
  startDate: today,
  endDate: today
};
export const langList : Option  []= [
  { value: 'fr' , label: 'Français' },
  { value: 'en', label: 'English' },
]



export const scoopInit: Scoop = {
  id:'',
  message: ['',''],
  pageId: PageId.HOME,
  level: Level.INFO,
  dateRange: {
    startDate: new Date(),
    endDate: new Date()
  },
  status: Status.INIT,
  date: {
    create: new Date(),
    update: new Date()
  }
};

export const levelList: Option[] = [
  { value: Level.INFO.toString(), label: 'info' },
  { value: Level.WARNING.toString(), label: 'warning' },
  { value: Level.ERROR.toString(), label: 'error' },
]

