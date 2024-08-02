import {
  pageInit,
  pageList,
  pageOptionList,
  pageTypeList,
  sectionTypeList,
  statutList
} from '@/common/constant.irisations';
import {
  SectionIdent,
  PageType,
  Option,
  Page
} from '@/common/typedef.irisations';
import Input from '@/components/Input';
import SelectBox from '@/components/SelectBox';
import {
  lang2Id,
  OptionValue2Page,
  pageType2Value,
  sectionType2Value,
  status2Value
} from '@/helpers/helper.casting';
import { ChangeEvent, useEffect, useState } from 'react';
import DateRangePicker from '../DateRangePicker';
import { DateRange } from '@/common/typedef';
import { langList } from '@/common/constant';

export type EditSectionIdentProps = {
  onChange: (ident: SectionIdent) => void;
  ident: SectionIdent;
};
/**
 *
 * @param  onChange: (ident: SectionIdent) => void;
 * @param  ident: SectionIdent;
 * @returns
 */

export default function EditSectionIdent({ ...props }: EditSectionIdentProps) {
  const handleChangeStatus = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onChange({
      ...props.ident,
      status: parseInt(event?.target.value, 10)
    });
  };
  //---------------------------------------------------------------------------------------------------------------
  const handleChangeSectionType = (event: ChangeEvent<HTMLSelectElement>) => {
    props.onChange({
      ...props.ident,
      type: parseInt(event?.target.value, 10)
    });  };
    //---------------------------------------------------------------------------------------------------------------
    const handleChangePageType = (event: ChangeEvent<HTMLSelectElement>) => {
      props.onChange({
        ...props.ident,
        pageType: parseInt(event?.target.value, 10)
      });
  };
  //---------------------------------------------------------------------------------------------------------------
  const handleChangeTitleLink = (
    event: ChangeEvent<HTMLInputElement>,
    lang: Option
  ) => {
    console.log('handleChangeTitleLink ==>', event.target.value);
    console.log('handleChangeTitleLink props==>', props);

    const newValue = event.target.value;
    const idLang = lang2Id(lang.value);
    const newTitleLink =
      idLang === 0
        ? [newValue, props.ident?.titleLink[1] || '#']
        : [props.ident?.titleLink[0] || '#', newValue];

    props.onChange({
      ...props.ident,
      titleLink: newTitleLink
    });
  };
  //---------------------------------------------------------------------------------------------------------------
  const handleChangeTitle = (
    event: ChangeEvent<HTMLInputElement>,
    lang: Option
  ) => {
    const newValue = event.target.value;
    const idLang = lang2Id(lang.value);
    const newTitle =
      idLang === 0
        ? [newValue, props.ident.title[1]]
        : [props.ident.title[0], newValue];

    props.onChange({
      ...props.ident,
      title: newTitle
    });
  };
  //---------------------------------------------------------------------------------------------------------------
  const handleChangeOrder = (event: ChangeEvent<HTMLInputElement>) => {
    const newOrder = parseInt(event.target.value, 10);
    props.onChange({ ...props.ident, sectionOrder: newOrder });
  };
  //---------------------------------------------------------------------------------------------------------------
  const handleDateChange = (dateRange: DateRange) => {
    props.onChange({ ...props.ident, dateRange: dateRange });
  };
  // ---------------------------------------------------------------------------------------------------------------
  const handleOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const newPage: Page = OptionValue2Page(event.target.value);
    props.onChange({ ...props.ident, pageId: newPage.id });
  };
  // ---------------------------------------------------------------------------------------------------------------

console.log('EditSectionIdent props.ident.status ==>',props.ident.status );

  return (
    <div className='SectionIdent flex flex-col'>
      <div className='flex flex-row items-center justify-center'>
      <SelectBox
          optionlist={pageOptionList}
          value={props.ident.pageId.toString()}
          onChange={handleOnChange}
          className='my-0'
          label='page belonging'
        />
        <SelectBox
          optionlist={statutList}
          value={status2Value(props.ident.status)}
          className='my-0 w-20'
          onChange={handleChangeStatus}
          label='page status'
        />

        <SelectBox
          optionlist={pageTypeList}
          value={pageType2Value(props.ident.pageType)}
          className='my-0 w-24'
          onChange={handleChangePageType}
          label='page type'
        />
       <SelectBox
          optionlist={sectionTypeList}
          value={sectionType2Value(props.ident.type)}
          className='my-0 w-24'
          onChange={handleChangeSectionType}
          label='section type'
        />

        <Input
          value={props.ident.sectionOrder}
          onChange={handleChangeOrder}
          type='number'
          step={10}
          className={'w-20'}
          placeholder='Order'
        />
    
      </div>
      {langList.map((lang) => (
        <Input
          key={`title_${lang.value}`}
          className={'w-full'}
          value={props.ident.title[lang2Id(lang.value)]}
          onChange={(event) => handleChangeTitle(event, lang)}
          placeholder={`Titre ${lang.label}`}
        />
      ))}

      {props.ident.pageType === PageType.NEWS && (
        <DateRangePicker
          dateRange={props.ident.dateRange}
          onDatesChange={handleDateChange}
        />
      )}
      {props.ident.pageType === PageType.FOOTER &&
        langList.map((lang) => (
          <Input
            className={'w-full'}
            key={`link${lang.value}`}
            value={
              props.ident.titleLink
                ? props.ident.titleLink[lang2Id(lang.value)]
                : ''
            }
            onChange={(event) => handleChangeTitleLink(event, lang)}
            placeholder={`title link ${lang.label}`}
          />
        ))}
    </div>
  );
}
