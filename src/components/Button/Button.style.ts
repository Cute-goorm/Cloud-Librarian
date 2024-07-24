import styled, { css } from 'styled-components';

const commonButtonStyles = css`
  border-radius: 4px;
  padding: 8px 18px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 14px;
  cursor: pointer;
  border: none;
`;

export const BasicButton = styled.button`
  ${commonButtonStyles}
  background-color: var(--primaryColor);
  color: var(--whiteColor);

  &:hover {
    background-color: var(--secondaryColor);
  }
`;

export const WarningButton = styled(BasicButton)`
  background-color: var(--errorRed);
  color: var(--whiteColor);

  &:hover {
    background-color: var(--errorRedHover);
  }
`;

export const SuccessButton = styled(BasicButton)`
  background-color: var(--successGreen);
  color: var(--whiteColor);

  &:hover {
    background-color: var(--successGreenHover);
  }
`;

