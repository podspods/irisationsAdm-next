import { connect } from '@/database/mongoConfig';
import scoopModel from '@/database/scoop.model';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    connect();
    const requestRead = await request.json();

    const newScoop = new scoopModel({
      ...requestRead
    });
    const response = await newScoop.save();
    return NextResponse.json({
      message: `newScoop create status: ${response.status}`,
      success: response.status,
      response
    });
  } catch (error: any) {
    console.error('create newScoop  POST ', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
