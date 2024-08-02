import {
  ChangeEvent,
  FormEvent,
  FormEventHandler,
  RefObject,
  useRef,
  useState
} from 'react';
import DateRangePicker from './DateRangePicker';
import { CRUD, DateRange, Scoop } from '@/common/typedef';
import { langList, levelList, scoopInit } from '@/common/constant';
import { lang2Id, OptionValue2Page } from '@/helpers/helper.casting';
import SelectBox from '@/components/SelectBox';
import { pageOptionList, statutList } from '@/common/constant.irisations';
import { Page, Status } from '@/common/typedef.irisations';
import Button from '@/components/Button';
import { api } from '@/common/api';
import axios from 'axios';
import { toastMe } from '@/helpers/helpers';
import DisplayScoop from './DisplayScoop';
import DisplayScoopList from './irisations/DisplayScoopList';

export type ScoopAdmProps = {};
export default function ScoopAdm({ ...props }: ScoopAdmProps) {
  const [scoop, setScoop] = useState<Scoop>(scoopInit);
  const [isInputLinkVisible, setInputLinkVisible] = useState<boolean>(false);
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const [refresh, setRefresh] = useState<number>(0);

  const [textareaIndex, setTextareaIndex] = useState<number>(0);
  const refList: RefObject<HTMLTextAreaElement>[] = [
    useRef<HTMLTextAreaElement>(null), // 0-0 text-fr
    useRef<HTMLTextAreaElement>(null) // 1-0 text-en
  ];
  // ---------------------------------------------------------------------------------------------------
  const handleSubmit = async () => {
    try {
      const route =
        scoop.status === Status.INIT
          ? api.irisations.scoop.create
          : api.irisations.scoop.update(scoop.id);
          const response = await axios.post(route, scoop);
      setRefresh((prev) => prev + 1);

      setScoop((prev) => ({
        ...prev,
        ...response.data.response
      }));
      toastMe(
        ` scoop ${route === api.irisations.scoop.create ? 'Added' : 'Updated'} : ${response.statusText}`
      );
    } catch (error) {}
  };

  // ---------------------------------------------------------------------------------------------------

  const handleDateChange = (dateRange: DateRange) => {
    setScoop((prev) => ({ ...prev, dateRange: dateRange }));
  };
  // ---------------------------------------------------------------------------------------------------
  const handleTextareaFocus = (idLang: number) => {
    setTextareaIndex(idLang);
    setInputLinkVisible(false);
    setCursorPosition(refList[idLang].current?.selectionStart || 0);
  };
  // ---------------------------------------------------------------------------------------------------
  const handleTextBodyChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
    idLang: number
  ) => {
    const newValue = event.target.value;
    const newText =
      idLang === 0
        ? [newValue, scoop.message[1]]
        : [scoop.message[0], newValue];

    setScoop((prev) => ({ ...prev, message: newText }));
    setCursorPosition(refList[idLang].current?.selectionStart || 0);
  };
  // ---------------------------------------------------------------------------------------------------
  const handleKeyUp = (idLang: number) => {
    setCursorPosition(refList[idLang].current?.selectionStart || 0);
  };
  // ---------------------------------------------------------------------------------------------------
  const handleLevelOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setScoop((prev) => ({ ...prev, level: parseInt(event?.target.value, 10) }));
  };
  // ---------------------------------------------------------------------------------------------------
  const handlePageIdOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newPage: Page = OptionValue2Page(event.target.value);
    setScoop((prev) => ({ ...prev, pageId: newPage.id }));
  };
  // ---------------------------------------------------------------------------------------------------
  const handleStatusOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setScoop((prev) => ({
      ...prev,
      status: parseInt(event?.target.value, 10)
    }));
  };
  //---------------------------------------------------------------------------------------------------------------
  const handleNew = () => {
    setScoop(scoopInit);
  };
  // -------------------------------------------------------------------------------------------------
  const deleteScoop = async (id: string) => {
    try {
      const response = await axios.delete(api.irisations.scoop.delete(id));
      setScoop(scoopInit);
      setRefresh((prev) => prev + 1);
    } catch (error) {}
  };
  // -------------------------------------------------------------------------------------------------
  const updateScoop = async (id: string) => {
    try {
      const response = await axios.get(api.irisations.scoop.readById(id));
      setScoop(response.data.scoop);
    } catch (error) {}
  };
  // -------------------------------------------------------------------------------------------------

  const handleClick = (id: string, operation: CRUD) => {
    operation === CRUD.DELETE ? deleteScoop(id) : updateScoop(id);
  };
  return (
    <div className='flex flex-col items-center justify-center p-8'>
      <DisplayScoopList onClick={handleClick} refresh={refresh} />
      <div className='flex flex-row'>
        <DateRangePicker
          dateRange={scoop.dateRange}
          onDatesChange={handleDateChange}
        />
        <div className='flex flex-col'>
          <SelectBox
            optionlist={statutList}
            value={scoop.status.toString()}
            onChange={handleStatusOnChange}
            className='my-0'
            label='Status'
          />
          <SelectBox
            optionlist={pageOptionList}
            value={scoop.pageId.toString()}
            onChange={handlePageIdOnChange}
            className='my-0'
            label='page belonging'
          />
          <SelectBox
            optionlist={levelList}
            value={scoop.level.toString()}
            onChange={handleLevelOnChange}
            className='my-0'
            label='Level'
          />
        </div>
      </div>
      <div className='Text flex flex-row'>
        {langList.map((lang) => {
          const langId = lang2Id(lang.value);
          return (
            <textarea
              key={langId}
              ref={refList[langId]}
              value={scoop.message[langId]}
              onFocus={() => handleTextareaFocus(langId)}
              onChange={(event) => handleTextBodyChange(event, langId)}
              onKeyUp={() => handleKeyUp(langId)}
              className='w-full p-2 border border-gray-300 rounded'
              rows={10}
              required
              placeholder={`text Body ${lang.label}`}
            />
          );
        })}
      </div>
      <div className='flex flex-row'>
        <Button onClick={handleSubmit} className='p-2'>
          {scoop?.status === Status.INIT ? 'Create' : 'Update'}
        </Button>
        <Button onClick={handleNew} className='ml-1 p-2'>
          New
        </Button>
      </div>
      <DisplayScoop scoop={scoop} idlang={textareaIndex} preview={true} />
    </div>
  );
}
