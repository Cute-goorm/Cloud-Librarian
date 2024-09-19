import styled, { css } from 'styled-components';
import Link from 'next/link';

export const SectionName = styled.h1`
  font-size: 30px;
  text-align: left;
`

const commonBoxStyles = css`
  border-radius: 10px;
  padding: 8px 18px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  border: none;
`;

export const BodyContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: lightgray;
`;

export const SectionBox = styled.div`
  ${commonBoxStyles}
  
  width: 80%;
  height: 415px;

  display:flex;
  flex-direction:column;
  
  
  padding-left: 20px;
  
  align-content:center;

  background-color: var(--secondaryColor);
  color: var(--whiteColor);
  &:hover {
    background-color: var(--secondaryColor);
  }
`;

export const SectionBookListContainer = styled.div`
  width: 100%;
  
  align-items:center;
  justify-content:center;
`;



export const SectionBookList = styled.div`
  
  display: flex;
  flex-wrap:nowrap;

  justify-content: space-between;
  width: 100%;
  background-color: white;
  padding: 0px;
  gap:32px;
  list-style-type: none;   
  min-height: 320px;
  background-color: var(--primaryColor);
  color: var(--whiteColor);
  
  
  
  overflow-x: scroll;  /* 가로 스크롤 추가 */
  overflow-y: hidden;  /* 세로 스크롤 숨기기 */
  margin: 20px auto; /* 박스를 화면 중앙에 정렬 */
  

`

export const SectionBookListItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
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
        text-align: left;
        margin-top: 10px;
    }

    img {
        width: 190px;
        height: 250px;
        object-fit: cover;
        border-radius: 5px;
    }
`


export const WeeklyReviewBox = styled.div`
  ${commonBoxStyles}
  
  width: 80%;
  

  display:flex;
  flex-direction:column;
  
  
  padding-left: 20px;
  
  align-content:center;

  background-color: var(--secondaryColor);
  color: var(--whiteColor);
  &:hover {
    background-color: var(--secondaryColor);
  }
`;