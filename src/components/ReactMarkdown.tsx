'use client';
import ReactMd from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import DOMPurify from 'dompurify';
import { br2MdBr } from '@/helpers/helpers.string';

export type ReactMarkdownProps = {
  children: React.ReactNode;
};
export default function ReactMarkdown({ children }: ReactMarkdownProps) {
  
  let markdownContent = '';
  
  if (children){
    markdownContent = br2MdBr(children as string); 
    markdownContent = DOMPurify.sanitize(markdownContent);
  }
  return (
    <ReactMd rehypePlugins={[rehypeRaw]} className='markdown'>
      {markdownContent}
    </ReactMd>
  );
}


