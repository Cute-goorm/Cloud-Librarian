import styled, { css } from 'styled-components';

export const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  overflow: hidden;

  border-radius: 10px;
  padding: 8px 10px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  border: none;
  background-color: var(--whiteColor);
  

  display: flex;
  flex-wrap:nowrap;
  justify-content: center;
  
  gap: 10px;
  
  max-height: 80%; /* 최대 높이를 지정하여 리스트가 너무 길어지지 않게 함 */
  overflow-x: scroll;  /* 가로 스크롤 추가 */
  overflow-y: hidden;  /* 세로 스크롤 숨기기 */
  margin: 20px auto; 
`;


export const ArrowButton = styled.button<{ direction: 'left' | 'right' }>`
  
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--whiteColor);
  color: var(--lightGray);
  border: solid;
  border-width: 1px;
  width: 25px;  /* 버튼의 가로 크기 */
  height: 25px; /* 버튼의 세로 크기 */
  border-radius: 50%; /* 버튼을 동그랗게 만듦 */
  
  display: flex;
  align-items: center;
  justify-content: center; /* 내용물(기호)을 중앙에 배치 */

  cursor: pointer;
  z-index: 1;

  font-size: 18px; /* 기호의 크기 */
  font-weight: bold; /* 기호의 굵기 */

  ${({ direction }) =>
    direction === 'left' ? 'left: 2%;' : 'right: 2%;'} /* 방향에 따라 위치 결정 */

  &:hover {
    background-color: rgba(0, 0, 0, 0.7); /* 호버 시 배경색 변화 */
  }
`;