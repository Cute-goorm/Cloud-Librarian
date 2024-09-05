import styled from 'styled-components';
import Link from 'next/link';


export const FlexBox = styled.ul`

  display: flex;            
  flex-direction: row;      
  justify-content: space-between;
  list-style-type: none;
  padding: 0;  
  margin: 0;   
  
`;

export const ListItem = styled.li`
  padding: 10px;
  background-color: lightgray;
  border-radius: 4px;
`;

export const NavLink = styled(Link)`
  color: black;
  background-color: lightgray;                   
  text-decoration: none;          
  &:hover {
    color: #ddd;                  
  }
`;