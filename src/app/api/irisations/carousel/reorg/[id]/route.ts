import carouselModel from '@/database/carousel.model';
import { connect } from '@/database/mongoConfig';
import pageSectionModel from '@/database/pageSectionModel';
import { NextRequest, NextResponse } from 'next/server';

type GETProps = {
  params: {
    id: string;
  };
};



export async function GET(request: Request, { params }: GETProps) {
//   let nbError = 0 ;
//   console.log('requestRead create post reorg card order  ==>');
//   if (!params.id) {
//     return NextResponse.json({ error: 'Id not found' }, { status: 404 });
//   }
//   try {
//     connect();
//     const pageSectionList = await carouselModel.find({ pageId: params.id }).sort({ sectionOrder: 1 });
//     let sectionOrder: number = 0;
//     for (const pageSection of pageSectionList) {
//       sectionOrder += 10;
//       const newPageCard = new pageSectionModel({
//         ...pageSection,
//         sectionOrder: sectionOrder
//       });
//       try {
//         const response = await newPageCard.save();
//         console.log('PageSection saved successfully:', response);
//       } catch (error : any) {
//         console.error('Error saving PageSection:', error);
//         nbError+=1;

//       }
//     }

//     return NextResponse.json({
//       message: `reorg executed  with ${nbError} error`,
//       success: nbError === 0 ,
//       response : 200
//     });
//   } catch (error: any) {
//     console.error('create post  POST ', error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// 
}
