// icons/StarIcons.tsx

import React from 'react';

// 빈 별 아이콘
export const OutlineStarIcon = () => (
  <svg
    width="24px" height="24px" viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      fill="none"
      stroke="#757575"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1}
    />
  </svg>
);

// 채워진 별 아이콘
export const FilledStarIcon = () => (
  <svg
    width="24px" height="24px" viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
      fill="#ffd700" /* 노란색으로 채워진 별 */
    />
  </svg>
);