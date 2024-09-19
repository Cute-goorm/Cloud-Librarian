import React, { useState } from 'react';
import { OutlineStarIcon, FilledStarIcon } from './icons/StarIcons' // 별 아이콘 임포트

export default function FavoriteButton () {
  const [isFavorite, setIsFavorite] = useState(false); // 즐겨찾기 상태 관리

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite); // 상태를 토글
  };

  return (
    <button onClick={handleFavoriteToggle} style={buttonStyle}>
      {isFavorite ? <FilledStarIcon /> : <OutlineStarIcon />} {/* 상태에 따른 아이콘 변경 */}
    </button>
  );
};

// 버튼 스타일 (필요에 따라 수정)
const buttonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
};


