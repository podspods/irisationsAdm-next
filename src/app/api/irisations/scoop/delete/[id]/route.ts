import { connect } from '@/database/mongoConfig';
import pageSectionModel from '@/database/pageSectionModel';
import scoopModel from '@/database/scoop.model';
import { NextRequest, NextResponse } from 'next/server';

type DELETEProps = {
  params: {
    id: string; // Le type de l'id peut être ajusté selon vos besoins
  };
};
export async function DELETE(request: NextRequest, { params }: DELETEProps) {

  if (!params.id) {
    return NextResponse.json({ error: 'Id not found' }, { status: 404 });
  }

  try {
    connect();
    const response = await scoopModel.deleteOne({id: params.id });

    return NextResponse.json({
      message: 'scoop deleted successfully',
      success: true,
      response: response.deletedCount > 0 ? `${response.deletedCount} scoop deleted` : 'No scoop found'
    });
  } catch (error: any) {
    console.error('Error deleting post', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
