import { connect } from '@/database/mongoConfig';
import pageSectionModel from '@/database/pageSectionModel';
import scoopModel from '@/database/scoop.model';
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
    const scoop = await scoopModel.findOne({ id: params.id  });
    return NextResponse.json({ scoop });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}