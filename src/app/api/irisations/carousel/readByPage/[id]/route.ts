import carouselModel from '@/database/carousel.model';
import { connect } from '@/database/mongoConfig';
import { NextResponse } from 'next/server';

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
    const slideList = await carouselModel
      .find({ pageId : parseInt(params.id, 10) })
      .sort({ slideOrder : 1 });

    return NextResponse.json({ slideList });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
