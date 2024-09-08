import styled, { css } from 'styled-components';



const commonBoxStyles = css`
  border-radius: 10px;
  padding: 8px 18px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  border: none;
`;

export const ReviewCard = styled.div`
  ${commonBoxStyles}
  
  width: 100%;
  height: 415px;

  display:flex;
  flex-direction:row;
  
  padding-top: 50px;
  padding-bottom: 50px;
  padding-left: 20px;
  justify-content:space-evenly;
  align-content:center;

  background-color: var(--whiteColor);
  color: var(--whiteColor);
  &:hover {
    background-color: var(--infoBlue);
  }
`;




export const ReviewBookInfo = styled.div`
  ${commonBoxStyles}
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  width: 60%;
  
  background-color: white;
  padding: 15px;
    
  list-style-type: none;   
  
  background-color: var(--primaryColor);
  color: var(--whiteColor);
  &:hover {
    background-color: var(--secondaryColor);
  }

`

export const ReviewInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
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