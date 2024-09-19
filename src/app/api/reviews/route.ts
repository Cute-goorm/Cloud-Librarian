import { NextResponse } from 'next/server';
import { Reviews } from '@/types/reviewTypes';
import fs from 'fs';
import path from 'path';

// db.json 파일 경로 설정
const dbFilePath = path.join(process.cwd(), 'db.json');

// GET 요청 핸들러
export async function GET() {
  try {
    // db.json 파일을 동기적으로 읽어서 JSON 데이터를 반환
    const data = fs.readFileSync(dbFilePath, 'utf-8');
    const reviews: Reviews[] = JSON.parse(data).reviews; // "reviews" 키의 데이터를 가져옴

    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Failed to read or parse db.json:', error);
    return NextResponse.json({ error: 'Failed to fetch books' }, { status: 500 });
  }
}
