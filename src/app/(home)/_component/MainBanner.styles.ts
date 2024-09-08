import styled, { css } from 'styled-components';
import Link from 'next/link';

export const MainHeadLine = styled.h1`
  font-size: 30px;
  text-align: center;
`

const commonBoxStyles = css`
  border-radius: 10px;
  padding: 8px 18px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  border: none;
`;

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #f5f5f5;
`;

export const BasicBox = styled.div`
  ${commonBoxStyles}
  
  width: 80%;
  height: 415px;

  display:flex;
  flex-direction:row;
  justify-content:space-between;
  
  padding-left: 20px;
  
  align-content:center;

  background-color: var(--primaryColor);
  color: var(--whiteColor);
  &:hover {
    background-color: var(--secondaryColor);
  }
`;


export const BookInfoBox = styled.div`
  ${commonBoxStyles}
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 20px;

    h2 {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    p {
        font-size: 1rem;
        margin-bottom: 8px;
        color: #333;
    }
  height: 250px; 
`

export const ReviewBox = styled.div`
  ${commonBoxStyles}
  display: flex;
  flex-direction: column;
  width: 20%;
  padding-left: 20px;
  height: 250px; 
`

export const ReviewCard = styled.div`
  ${commonBoxStyles}
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;

    p {
      font-size: 0.9rem;
      color: #555;
    }
  
`


export const BookListBox = styled.div`
  ${commonBoxStyles}
  display: flex;
  flex-wrap:nowrap;
  justify-content: center;
  gap: 10px;
  width: 80%;
  background-color: white;
  padding: 30px;
  
  max-height: 200px; /* 최대 높이를 지정하여 리스트가 너무 길어지지 않게 함 */
  overflow-x: scroll;  /* 가로 스크롤 추가 */
  overflow-y: hidden;  /* 세로 스크롤 숨기기 */
  margin: 0 auto; /* 박스를 화면 중앙에 정렬 */

  background-color: var(--primaryColor);
  color: var(--whiteColor);
  &:hover {
    background-color: var(--secondaryColor);
  }

`

export const BookListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

    &:hover {
        transform: translateY(-5px);
    }

    h2 {
        font-size: 1rem;
        text-align: center;
        margin-top: 10px;
    }

    img {
        width: 100px;
        height: 140px;
        object-fit: cover;
        border-radius: 5px;
    }
`