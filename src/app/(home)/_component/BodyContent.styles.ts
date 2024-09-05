import styled, { css } from 'styled-components';
import Link from 'next/link';

export const SectionName = styled.h1`
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

  background-color: var(--primaryColor);
  color: var(--whiteColor);
  &:hover {
    background-color: var(--secondaryColor);
  }
`;




export const SectionBookList = styled.div`
  ${commonBoxStyles}
  display: flex;
  justify-content: space-around;
  width: 80%;
  background-color: white;
  padding: 15px;
    
  list-style-type: none;   
  height: 100px;
  background-color: var(--primaryColor);
  color: var(--whiteColor);
  &:hover {
    background-color: var(--secondaryColor);
  }

`

export const SectionBookListItem = styled.div`
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