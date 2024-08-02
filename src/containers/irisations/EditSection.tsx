'use client';

import { api } from '@/common/api';
import axios from 'axios';
import { ChangeEvent, RefObject, useEffect, useRef, useState } from 'react';
import Button from '@/components/Button';
import {
  insertString,
  textAround,
  textStartWith
} from '@/helpers/helpers.string';
import { addLink, isLink, removeLink } from '@/helpers/helper.markdown';
import {
  SectionIdent,
  EditFunction,
  ImageType,
  PageSection,
  Status,
  SectionType
} from '@/common/typedef.irisations';
import { lang2Id } from '@/helpers/helper.casting';
import EditCardByPageToolbar from './EditCardByPage.toolbar';
import EditCardByPageImageBox from './EditSection.imageBox';
import { langList } from '@/common/constant';
import EditSectionIdent from './EditSection.ident';
import PreviewSection from './PreviewSection';
import { pageSectionInit } from '@/common/constant.irisations';
import { toastMe } from '@/helpers/helpers';

export type EditSectionProps = {
  pageSection: PageSection;
  onChange: (pageSection: PageSection) => void;
  onNew?: () => void;
};
/**
 *
 * @param pageSection: PageSection;
 * @param  onChange : ( pageSection: PageSection) => void
 * @returns
 */

type RefTextArea = {
  textType: number;
  lang: number;
};

export default function EditSection({ ...props }: EditSectionProps) {
  const TEXT_BODY: number = 0;
  const TEXT_CTA: number = 1;
  const reTextAreaInit: RefTextArea = {
    textType: TEXT_BODY,
    lang: 0
  };

  const [section, setSection] = useState<PageSection>(pageSectionInit);
  // -------------------------------------------------------------------
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const [isInputLinkVisible, setInputLinkVisible] = useState<boolean>(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [textareaIndex, setTextareaIndex] =
    useState<RefTextArea>(reTextAreaInit);
  const refList: RefObject<HTMLTextAreaElement>[][] = [
    [
      useRef<HTMLTextAreaElement>(null), // 0-0 text-fr
      useRef<HTMLTextAreaElement>(null) // 1-0 text-en
    ],
    [
      useRef<HTMLTextAreaElement>(null), // 1-0 cta-fr
      useRef<HTMLTextAreaElement>(null) // 1-1 cta-en
    ]
  ];

  // -------------------------------------------------------------------------------------------------

  useEffect(() => {
    const newPageSection: PageSection = {
      ...props.pageSection,
      ident: { ...pageSectionInit.ident, ...props.pageSection.ident }
    };
    setSection(newPageSection);
  }, [props.pageSection]);

  // -------------------------------------------------------------------------------------------------
  const handleSubmit = async () => {
    try {
      const route =
        section.ident.status === Status.INIT
          ? api.irisations.pageSection.create
          : api.irisations.pageSection.update(section.ident.id);
      const response = await axios.post(route, section);

      setSection((prev) => ({
        ...prev,
        ...response.data.response
      }));
      props.onChange(section);
      toastMe(`Section ${route=== api.irisations.pageSection.create ? 'Added' : 'Updated'}  : ${response.statusText}`);
    } catch (error) {}
  };

  // -------------------------------------------------------------------------------------------------
  const handleTextCTAChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
    idLang: number
  ) => {
    const newValue = event.target.value;
    const newText =
      idLang === 0
        ? [newValue, section.textCTA[1]]
        : [section.textCTA[0], newValue];

    setSection((prev) => {
      return { ...prev, textCTA: newText };
    });

    setCursorPosition(refList[TEXT_CTA][idLang].current?.selectionStart || 0);
  };

  // -------------------------------------------------------------------------------------------------
  const handleTextBodyChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
    idLang: number
  ) => {
    const newValue = event.target.value;
    const newText =
      idLang === 0 ? [newValue, section.text[1]] : [section.text[0], newValue];

    setSection((prev) => {
      return { ...prev, text: newText };
    });

    setCursorPosition(refList[TEXT_BODY][idLang].current?.selectionStart || 0);
  };

  // ------------ to bold  -------------------------------------------------------------------------------------
  const handleBold = () => {
    const result = addTypoAround('__');
    updateText(result);
  };

  // ------------ to italic  -------------------------------------------------------------------------------------
  const handleItalic = () => {
    const result = addTypoAround('_');
    updateText(result);
  };

  // ------------ addTypoAround  -------------------------------------------------------------------------------------
  const addTypoAround = (typo: string): string => {
    const textArea =
      refList[textareaIndex.textType][textareaIndex.lang].current;
    console.log('addTypoAround textArea?.value ==>', textArea?.value);

    if (textArea && window.getSelection())
      return textAround(
        textArea.value,
        textArea.selectionStart,
        textArea.selectionEnd,
        typo
      );
    return typo;
  };

  // ------------ list unorganised  -------------------------------------------------------------------------------------
  const handleUnorderList = () => {
    const result = addTypoStart('- ');
    updateText(result);
  };
  // ------------ tlist organised  -------------------------------------------------------------------------------------
  const handleOrderList = () => {
    const result = addTypoStart('1. ');
    updateText(result);
  };

  // ------------ add delimiter before -------------------------------------------------------------------------------------
  const addTypoStart = (delimiter: string): string => {
    const textArea = refList[TEXT_BODY][textareaIndex.lang].current;
    if (textArea && window.getSelection())
      return textStartWith(
        section.text[textareaIndex.lang],
        textArea.selectionStart,
        textArea.selectionEnd,
        delimiter
      );
    return section.text[textareaIndex.lang];
  };

  // ------------ -------------------------------------------------------------------------------------
  const updateText = (result: string) => {
    if (textareaIndex.textType === TEXT_BODY) {
      const newText = section.text;
      newText[textareaIndex.lang] = result;
      setSection((prev) => ({ ...prev, text: newText }));
    } else {
      const newText = section.textCTA;
      newText[textareaIndex.lang] = result;
      setSection((prev) => ({ ...prev, textCTA: newText }));
    }
  };
  // ------------ -------------------------------------------------------------------------------------
  const handleUpload = (url: string) => {
    const textBeforeCursor = section.text?.slice(0, cursorPosition);
    const textAfterCursor = section.text?.slice(cursorPosition);
    const urlSplit = url.split('&')[0];
    const floatStyle = 'float: left max-width: 100%; max-height: 100px;';

    const imageToAdd = `<img src="${urlSplit}" alt="alt text">`;
    const newText = `${textBeforeCursor}${imageToAdd}${textAfterCursor}`;
  };

  // ------------Add horizontal bar -------------------------------------------------------------------------------------
  const handleBR = () => {
    const newText = insertString(
      section.text[textareaIndex.lang],
      cursorPosition,
      '<br/>'
    );
    updateText(newText);
  };
  // ------------Add horizontal bar -------------------------------------------------------------------------------------
  const handleHR = () => {
    const newText = insertString(
      section.text[textareaIndex.lang],
      cursorPosition,
      '<hr/>'
    );
    updateText(newText);
  };
  // ------------Add link  -------------------------------------------------------------------------------------
  const ZhandleAddLink = () => {
    const selection = window.getSelection();
    const textArea =
      refList[textareaIndex.textType][textareaIndex.lang].current;
    if (textArea && selection) {
      const start = textArea.selectionStart;
      const end = textArea.selectionEnd;
      const textBefore = section.text[textareaIndex.lang]?.substring(0, start);
      const textAfter = section.text[textareaIndex.lang]?.substring(
        end,
        section.text.length
      );
      const selectedText = section.text[textareaIndex.lang]?.substring(
        start,
        end
      );
      let newText: string = selectedText;

      if (isLink(selectedText)) {
        newText = removeLink(selectedText);
        const newEditText = `${textBefore}${newText}${textAfter}`;
        if (newEditText) {
        }
      } else setInputLinkVisible(true);
    }
  };

  //---------------------------------------------------------------------------------------------------------------
  const handleInputAddLink = (newLink: string) => {
    const selection = window.getSelection();
    const textArea =
      refList[textareaIndex.textType][textareaIndex.lang].current;
    if (textArea && selection) {
      const start = textArea.selectionStart;
      const end = textArea.selectionEnd;
      const fullText = section.text[textareaIndex.lang];
      const textBefore = fullText?.substring(0, start);
      const textAfter = fullText?.substring(end, fullText.length);

      const selectedText = fullText?.substring(start, end);

      let newText = selectedText;

      if (isLink(selectedText)) {
        newText = removeLink(selectedText);
      } else {
        newText = addLink(selectedText, newLink);
      }

      const newEditText = `${textBefore}${newText}${textAfter}`;
      if (newEditText) {
        updateText(newEditText);
      }
    }
    setInputLinkVisible(false);
  };

  //---------------------------------------------------------------------------------------------------------------
  const handleAddLink = () => {
    console.log('handleAddLink ==>', 215);

    const selection = window.getSelection();
    const textArea =
      refList[textareaIndex.textType][textareaIndex.lang].current;
    if (textArea && selection) {
      const start = textArea.selectionStart;
      const end = textArea.selectionEnd;
      const fullText = section.text[textareaIndex.lang];
      const textBefore = fullText?.substring(0, start);
      const textAfter = fullText?.substring(end, fullText.length);

      const selectedText = fullText?.substring(start, end);

      let newText = selectedText;

      if (isLink(selectedText)) {
        console.log(' newEditText isLink==>');
        newText = removeLink(selectedText);
      } else {
        console.log(' is not isLink ==>');
        setInputLinkVisible(true);
      }

      const newEditText = `${textBefore}${newText}${textAfter}`;
      if (newEditText) {
        console.log(' newEditText ==>', newEditText);
        updateText(newEditText);
      }
    }
  };

  //---------------------------------------------------------------------------------------------------------------

  const handleKeyUp = (idLang: number) => {
    setCursorPosition(refList[TEXT_BODY][idLang].current?.selectionStart || 0);
  };
  // ---------------------------------------------------------------------------------------------------------------

  const handleTextareaFocus = (idLang: number, idTextArea: number) => {
    setTextareaIndex((prev) => ({
      ...prev,
      lang: idLang,
      textType: idTextArea
    }));
    setInputLinkVisible(false);
    setCursorPosition(
      refList[textareaIndex.textType][textareaIndex.lang].current
        ?.selectionStart || 0
    );
  };

  // ---------------------------------------------------------------------------------------------------------------
  const handleImageChange = (image: ImageType) => {
    console.log(' handleImageChange==>', image);

    setSection((prev) => ({ ...prev, image: image }));
  };

  // ---------------------------------------------------------------------------------------------------------------
  const handleTest = (value: string) => {
    setInputLinkVisible((prev) => !prev);
  };

  // ---------------------------------------------------------------------------------------------------------------
  const handleToolbarClick = (editFunction: EditFunction, value: string) => {
    switch (editFunction) {
      case EditFunction.ITALIC:
        handleItalic();
        break;
      case EditFunction.BOLD:
        handleBold();
        break;
      case EditFunction.UNORD_LIS:
        handleUnorderList();
        break;
      case EditFunction.ORD_LIST:
        handleOrderList();
        break;
      case EditFunction.HR:
        handleHR();
        break;
      case EditFunction.BR:
        handleBR();
        break;
      case EditFunction.ADD_LINK:
        handleAddLink();
        break;
      case EditFunction.INPUT_ADD_LINK:
        handleInputAddLink(value);
        break;
      case EditFunction.UPLOAD:
        handleUpload(value);
        break;
      default:
        handleTest(value);
        break;
    }
  };

  // ---------------------------------------------------------------------------------------------------------------
  const handleIdentChange = (ident: SectionIdent) => {
    // toastMe(` ${ident.pageId} [${ident.title[0]}] [${ident.title[1]}]`);
    setSection((prev) => ({ ...prev, ident: ident }));
  };
console.log('section ==>', section);

  // ---------------------------------------------------------------------------------------------------------------
  return (
    <div className='min-w-2xl mx-auto p-4 w-full'>
      <div className='cardMeta flex '>
        <div className='flex flex-col'>
          <EditSectionIdent
            onChange={handleIdentChange}
            ident={section.ident}
          />
          <EditCardByPageToolbar
            onClick={handleToolbarClick}
            isInputLinkVisible={isInputLinkVisible}
          />
        </div>
        <EditCardByPageImageBox
          onChange={handleImageChange}
          image={section.image}
        />
      </div>
      <div className='Text flex flex-row'>
        {langList.map((lang) => {
          const langId = lang2Id(lang.value);
          return (
            <textarea
              key={langId}
              ref={refList[TEXT_BODY][langId]}
              value={section.text[langId]}
              onFocus={() => handleTextareaFocus(langId, TEXT_BODY)}
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
      {section.ident.type === SectionType.CTA && (
        <div className='CTA flex flex-row'>
          {langList.map((lang) => {
            const langId = lang2Id(lang.value);
            return (
              <textarea
                onFocus={() => handleTextareaFocus(langId, TEXT_CTA)}
                key={langId}
                ref={refList[TEXT_CTA][langId]}
                value={section.textCTA[langId]}
                onChange={(event) => handleTextCTAChange(event, langId)}
                onKeyUp={() => handleKeyUp(langId)}
                className='w-full p-2 border border-gray-300 rounded bg-slate-200'
                rows={10}
                required
                placeholder={`text CTA ${lang.label}`}
              />
            );
          })}
        </div>
      )}
      <Button onClick={handleSubmit} className='p-2'>
        {section.ident?.status === Status.INIT ? 'Create' : 'Update'}
      </Button>
      {props.onNew && (
        <Button onClick={props.onNew} className='ml-1 p-2'>
          NewZ
        </Button>
      )}
      <PreviewSection section={section} lang={textareaIndex.lang} />
    </div>
  );
}
