import { PageSection } from '@/common/typedef.irisations';
import pageSectionModel from '@/database/pageSectionModel';
import { connect } from '@/database/mongoConfig';
import { NextRequest, NextResponse } from 'next/server';
import scoopModel from '@/database/scoop.model';
import { Scoop } from '@/common/typedef';

export async function POST(request: NextRequest) {
  console.log('POST ==>', 6);

  try {
    connect();
    const toUpdate: Scoop = await request.json();

    const response = await scoopModel.findOneAndUpdate(
      { id: toUpdate.id },
      { $set: toUpdate },
      { new: true }
    );
    return NextResponse.json({
      message: `Scoop updated status: ${response.status}`,
      success: response.status,
      response
    });
  } catch (error: any) {
    console.error('updated Scoop PATCH ', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
