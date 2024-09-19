import styled, { css } from 'styled-components';
import Link from 'next/link';

export const MainHeadLine = styled.h1`
  font-size: 30px;
  text-align: center;
`

const commonBoxStyles = css`
  border-radius: 30px;
  padding: 8px 18px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  border: none;
  background-color: var(--whiteColor);
  
`;

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: var(--darkGray);
`;

export const BasicBox = styled.div`
  ${commonBoxStyles}
  
  width: 80%;
  min-height: 415px;

  display:flex;
  flex-direction:row;
  
  gap: 10px;
  margin: 20px auto;
  padding-left: 20px;
  
  align-items:center;
  justify-content:center;
`;

export const BookListContainer = styled.div`
  ${commonBoxStyles}
  
  width: 80%;
  

  display:flex;
  flex-direction:row;
  
  gap: 10px;
  margin: 20px auto;
  padding-left: 20px;
  
  align-items:center;
  justify-content:center;
`;
export const BookInfoBox = styled.div`
  ${commonBoxStyles}
  display: flex;
  flex-direction: column;
  flex: 1;
  

    h2 {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    p {
        font-size: 20px;
        margin-bottom: 20px;
        color: #333;
    }
  height: 250px; 
`

export const BookContent = styled.div`
  border: none;
  background-color: var(--whiteColor);
  
  p {
    width:100%;
  }

`

export const ReviewBox = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  width: 30%;
  height: 250px; 
  background-color: var(--whiteColor);
`

export const ReviewCard = styled.div`
  
  height: 47%;
  border-radius: 8px;
  background-color: var(--lightGray);

  
`

export const BookListBox = styled.div`
  ${commonBoxStyles}
  display: flex;
  flex-wrap:nowrap;
  justify-content: space-evenly;
  padding: 8px 10px;
  gap: 25px;
  width: 90%;
  height: 80%;
  max-height: 250px; /* 최대 높이를 지정하여 리스트가 너무 길어지지 않게 함 */
  overflow-x: scroll;  /* 가로 스크롤 추가 */
  overflow-y: hidden;  /* 세로 스크롤 숨기기 */
  margin: 20px auto; /* 박스를 화면 중앙에 정렬 */
  
`

export const BookListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 150px;
  
  
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

    &:hover {
        transform: translateY(-5px);
    }

    h2 {
        font-size: 15px;
        text-align: left;
        margin-top: 10px;
    }

    img {
        width: 100px;
        min-height: 85%;
        object-fit: cover;
        border-radius: 5px;
    }
`