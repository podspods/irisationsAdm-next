import { connect } from '@/database/mongoConfig';
import pageSectionModel from '@/database/pageSectionModel';
import {  NextResponse } from 'next/server';


type GETProps = {
  params: {
    id: string; 
  };
};

export async function GET(request: Request, { params }: GETProps) {
  if (!params.id) {
    return NextResponse.json({ error: 'Id not found' }, { status: 404 });
  }
  try {
    connect();
    const section = await pageSectionModel.findOne({ 'ident.id': params.id  });
    console.log('route post ==>', section);
    return NextResponse.json({ section });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}