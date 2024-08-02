import carouselModel from '@/database/carousel.model';
import { connect } from '@/database/mongoConfig';
import { NextRequest, NextResponse } from 'next/server';

type DELETEProps = {
  params: {
    id: string; 
  };
};
export async function DELETE(request: NextRequest, { params }: DELETEProps) {

  if (!params.id) {
    return NextResponse.json({ error: 'Id not found' }, { status: 404 });
  }

  try {
    connect();
    const response = await carouselModel.deleteOne({id: params.id });

    return NextResponse.json({
      message: 'Slide deleted successfully',
      success: true,
      response: response.deletedCount > 0 ? `${response.deletedCount} Slide deleted` : 'No Slide found'
    });
  } catch (error: any) {
    console.error('Error deleting Slide', error);
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    );
  }
}
