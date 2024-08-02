import { connect } from '@/database/mongoConfig';
import pageSectionModel from '@/database/pageSectionModel';
import { NextRequest, NextResponse } from 'next/server';

type GETProps = {
  params: {
    id: string;
  };
};



export async function GET(request: Request, { params }: GETProps) {
}
