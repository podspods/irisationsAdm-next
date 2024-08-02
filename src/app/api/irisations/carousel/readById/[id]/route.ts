import carouselModel from '@/database/carousel.model';
import { connect } from '@/database/mongoConfig';
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
    const slide = await carouselModel.findOne({ id: params.id  });
    return NextResponse.json({ slide });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}