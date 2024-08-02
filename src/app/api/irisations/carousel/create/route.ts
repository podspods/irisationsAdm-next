import carouselModel from '@/database/carousel.model';
import { connect } from '@/database/mongoConfig';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    connect();
    const requestRead = await request.json();
    console.log('requestRead 11 ==>', requestRead);

    const newSlide = new carouselModel({
      ...requestRead
    });
    const response = await newSlide.save();
    console.log('ewSlide create status 15 ==>', response);
    
    return NextResponse.json({
      message: `newSlide create successfully`,
      success: true,
      response
    });
  } catch (error: any) {
    console.error('create newSlide ', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
