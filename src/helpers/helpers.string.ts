import {  pageInit } from '@/common/constant.irisations';
import {  Page, PageId } from '@/common/typedef.irisations';

// ------------string elipsis -------------------------------------------------------------------------------------
export function truncateString(str: string, maxLength: number): string {
  if (str.length > maxLength) {
    return str.slice(0, maxLength - 3) + '...';
  }
  return str;
}

// ------------clean string only keep alpha-------------------------------------------------------------------------------------
export function cleanTag(tag: string): string {
  const result = tag.replace(/[^a-zA-Z0-9 ]/g, '');
  return result.trim();
}

// ------------insert string  -------------------------------------------------------------------------------------
export function insertString(
  text: string | undefined,
  position: number,
  typo: string
): string {
  if (!text) return `${typo}`;

  const textBeforeCursor = text.slice(0, position);
  const textAfterCursor = text.slice(position);
  return `${textBeforeCursor}${typo}${textAfterCursor}`;
}
// ------------checkAround  -------------------------------------------------------------------------------------
/**
 * check if string is surround by delimiter
 * @param text : string : source text
 * @param delimiter :string
 * @returns true if text is between delimiter
 */
export function checkAround(text: string, delimiter: string): boolean {
  const regex = new RegExp(`${delimiter}[^${delimiter}]+${delimiter}`);
  return regex.test(text);
}
// ------------checkStartWith  -------------------------------------------------------------------------------------
/**
 * check if string is surround by delimiter
 * @param text : string : source text
 * @param delimiter :string
 * @returns text add/remove delimiter
 */
export function addStartDelimiter(text: string, delimiter: string): string {
  if (text?.length) {
    if (text.startsWith(delimiter)) return text.substring(delimiter.length);
    return `${delimiter}${text}`;
  }
  return delimiter;
}
// ------------textAround  -------------------------------------------------------------------------------------
/**
 * put typo around a substring defined by start and end of a text
 * @param text : string -> input string
 * @param start : string to considere start at
 * @param end : string to considere end at
 * @param typo  : string to put arroud
 * @returns : new string with substring surrond by typo
 */
export function textAround(
  text: string,
  start: number,
  end: number,
  typo: string
): string {

  if (text?.length) {
    const textBefore = text.substring(0, start);
    const textAfter = text.substring(end, text.length);
    const selectedText = text.substring(start, end);

    let result;
    if (checkAround(selectedText, typo)) {
      // remove typo
      result = selectedText.substring(
        typo.length,
        selectedText.length - typo.length
      );
    } else result = `${typo}${selectedText}${typo}`;
    return `${textBefore}${result}${textAfter}`;
  }
  return text;
}

// ------------textAround  -------------------------------------------------------------------------------------
/**
 * put typo around a substring defined by start and end of a text
 * @param text : string -> input string
 * @param start : string to considere start at
 * @param end : string to considere end at
 * @param delimiter  : string to put before text
 * @returns : new string with substring surrond by typo
 */
export function textStartWith(
  text: string | undefined,
  start: number,
  end: number,
  delimiter: string
) {
  if (text?.length) {
    const textBefore = text.substring(0, start);
    const textAfter = text.substring(end, text.length);
    const selectedText = text.substring(start, end);

    const sentenceList = selectedText.split('\n');
    const liList = sentenceList.map((sentence) =>
      addStartDelimiter(sentence, delimiter)
    );
    const result = liList.join('\n') + '\n';

    return `${textBefore}${result}${textAfter}`;
  }
  return delimiter;
}

// ------------encodeStringToNumber  -------------------------------------------------------------------------------------
/**
 *
 * @param str : string
 * @returns : number. toString()
 */
export const encodeStringToNumber = (str?: string): string => {
  return (
    str
      ?.split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0)
      .toString() || '-1'
  );
};

// ------------encodeStringToNumber  -------------------------------------------------------------------------------------

export const isValidImageUrl = (url: string | undefined): boolean => {
  if (!url) return false;
  try {
    const validUrl = new URL(url);
    return /\.(jpg|jpeg|png|gif|bmp|webp)$/i.test(validUrl.pathname);
  } catch (e) {
    return false;
  }
};
// ------------------------------------------------------------------------------------------------
export function extractNameFromUrl(url: string): string {
  // Extraire le nom du fichier avec l'extension
  const fileNameWithExt = url.split('/').pop();

  if (fileNameWithExt) {
    // Supprimer l'extension du fichier
    const fileName = fileNameWithExt.split('.').slice(0, -1).join('.');
    return fileName.replace(/_/g, ' ');
  }

  return '';
}
// ------------------------------------------------------------------------------------------------
export function string2number(
  value: string | null,
  defaultValue: number
): number {
  const parsed = parseInt(value || '', 10);
  return isNaN(parsed) ? defaultValue : parsed;
}

export function br2MdBr(text: string): string {
  return text.replace(/\n/g, '\r\r');
}
