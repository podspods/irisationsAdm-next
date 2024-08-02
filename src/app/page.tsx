'use client';
import { Tab } from '@/common/typedef.irisations';
import { useState } from 'react';
import Button from '@/components/Button';
import ButtonDark from '@/components/ButtonDark';
import SectionAdm from '@/containers/SectionAdm';
import CarouselAdm from '@/containers/CarouselAdm';
import ScoopAdm from '@/containers/ScoopAdm';

const adminTabList: Tab[] = [
  { id: 'sectionAdm', title: 'section Adm', content: <SectionAdm /> },
  { id: 'carouselAdm', title: 'Carousel Adm', content: <CarouselAdm /> },
  {
    id: 'ScoopAdm',
    title: 'Scoop adm',
    content: <ScoopAdm />
  }
];

export type IrisationAdmProps = {};

export default function IrisationAdm({ ...props }: IrisationAdmProps) {
  const [activeTab, setActiveTab] = useState<Tab>(adminTabList[0]);
  return (
    <div>
      <ButtonDark />
      <div className='tabs'>
        {adminTabList.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => setActiveTab(tab)}
            className={
              activeTab.id === tab.id
                ? 'active bg-slate-400 text-slate-50 p-4 '
                : 'bg-slate-100 p-4'
            }>
            {tab.title}
          </Button>
        ))}
      </div>
      <div className='tab-content'>
        {adminTabList.find((tab) => tab.id === activeTab.id)?.content}
      </div>
    </div>
  );
}
