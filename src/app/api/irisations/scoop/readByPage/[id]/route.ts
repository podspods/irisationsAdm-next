import { connect } from '@/database/mongoConfig';
import scoopModel from '@/database/scoop.model';
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
    const scoopList = await scoopModel
      .find({ pageId : parseInt(params.id, 10) })

    return NextResponse.json({ scoopList });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
