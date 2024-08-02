import { connect } from '@/database/mongoConfig';
import pageSectionModel from '@/database/pageSectionModel';
import { NextResponse } from 'next/server';

type GETProps = {
  params: {
    id: string;
  };
};

export async function GET(request: Request, { params }: GETProps) {
  console.log('read section y pageId  ==>', params.id);

  if (!params.id) {
    return NextResponse.json({ error: 'Id not found' }, { status: 404 });
  }
  try {
    connect();
    const sectionList = await pageSectionModel
      // .find({ ident: { pageId: parseInt(params.id,10) } })
      .find({ 'ident.pageId': parseInt(params.id, 10) })
      .sort({ 'ident.sectionOrder': 1 });

    return NextResponse.json({ sectionList });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
