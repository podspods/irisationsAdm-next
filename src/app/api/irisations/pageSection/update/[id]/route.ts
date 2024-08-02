import { PageSection } from '@/common/typedef.irisations';
import pageSectionModel from '@/database/pageSectionModel';
import { connect } from '@/database/mongoConfig';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  console.log('POST ==>', 6);

  try {
    connect();
    const toUpdate: PageSection = await request.json();
    console.log('post ==>', toUpdate);

    const response = await pageSectionModel.findOneAndUpdate(
      { 'ident.id': toUpdate.ident.id },
      { $set: toUpdate },
      { new: true }
    );
    return NextResponse.json({
      message: `Card updated status: ${response.status}`,
      success: response.status,
      response
    });
  } catch (error: any) {
    console.error('updated Card  PATCH ', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
