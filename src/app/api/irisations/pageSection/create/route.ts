import { connect } from '@/database/mongoConfig';
import pageSectionModel from '@/database/pageSectionModel';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('pageSectionModel create post 6==>');
  try {
    connect();
    const requestRead = await request.json();
    console.log('requestRead 11 ==>', requestRead);

    const newPost = new pageSectionModel({
      ...requestRead
    });
    const response = await newPost.save();
    console.log('requestRead response 16 ==>', response);
    return NextResponse.json({
      message: `pageSection create status: ${response.status}`,
      success: response.status,
      response
    });
  } catch (error: any) {
    console.error('create pageSection  POST ', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
