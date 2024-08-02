import { Slide } from '@/common/typedef.irisations';
import carouselModel from '@/database/carousel.model';
import { connect } from '@/database/mongoConfig';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('POST ==>', 6);

  try {
    connect();
    const toUpdate: Slide = await request.json();
    console.log('post ==>', toUpdate);

    const response = await carouselModel.findOneAndUpdate(
      { id: toUpdate.id },
      { $set: toUpdate },
      { new: true }
    );
    return NextResponse.json({
      message: `Slide updated status: ${response.status}`,
      success: response.status,
      response
    });
  } catch (error: any) {
    console.error('updated Slide  PATCH ', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
