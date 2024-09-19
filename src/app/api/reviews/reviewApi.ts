import type { NextApiRequest, NextApiResponse } from 'next';
import { Reviews } from '@/types/reviewTypes';
import fs from 'fs';
import path from 'path';

// db.json 파일 경로 설정
const dbFilePath = path.join(process.cwd(), 'db.json');

// Next.js API Route 핸들러
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // db.json 파일을 읽어서 파싱
  fs.readFile(dbFilePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read data from db.json' });
      return;
    }

    try {
      const jsonData = JSON.parse(data); // JSON 데이터 파싱
      const reviews: Reviews[] = jsonData.reviews; // db.json 내 "books" 데이터를 가져옴

      res.status(200).json(reviews); // 가져온 데이터를 반환
    } catch (parseError) {
      res.status(500).json({ error: 'Failed to parse JSON data' });
    }
  });
}
