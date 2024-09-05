import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* 구글 폰트 가져오기 */
<<<<<<< Updated upstream
  /* @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap'); */
=======
//  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
//  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');
>>>>>>> Stashed changes

  /* 색상 변수 정의 */
  :root {
    --mainColor: #222222;
    --secondaryColor: #f5a623;
    --primaryColor: #3a3a3a;
    --whiteColor: #ffffff;
    --lightGray: #e0e0e0;
    --darkGray: #757575;
    --errorRed: #f35071;
    --errorRedHover: #ad1735;
    --successGreen: #4caf50;
    --successGreenHover: #388e3c;
    --infoBlue: #2196f3;
  }

  /* reset CSS */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* HTML5 블록 요소 기본 설정 */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  /* 기본적인 스타일 설정 */
  body {
    line-height: 1;
    font-family: 'Noto Sans KR', sans-serif;
    background-color: var(--whiteColor);
    color: var(--mainColor);
  }

  /* 언어가 영어일 때의 스타일 설정 */
  :lang(en) {
    font-family: 'Noto Sans', sans-serif;
  }

  /* 목록 스타일 제거 */
  ol, ul {
    list-style: none;
  }

  /* 인용구 스타일 제거 */
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  /* 테이블 스타일 설정 */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* 버튼 기본 스타일 제거 */
  button {
    font: inherit;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    background-color: var(--whiteColor);
    border: none;
    appearance: none;
  }

  /* 폼 요소 기본 스타일 제거 */
  input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    background-color: transparent;
    border: none;
    outline: none;
    box-shadow: none;
    appearance: none;
  }

  /* 텍스트 영역 크기 조정 불가능 설정 */
  textarea {
    resize: none;
  }

  /* 필드셋 기본 스타일 제거 */
  fieldset {
    border: none;
  }

  /* 레전드 기본 패딩 제거 */
  legend {
    padding: 0;
  }

  /* a 태그 스타일 설정 */
  a {
    text-decoration: none;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
    background: transparent;
    border: none;
  }

  /* 플레이스홀더 스타일 설정 */
  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.5;
  }
  :-ms-input-placeholder {
    color: inherit;
    opacity: 0.5;
  }
  ::placeholder {
    color: inherit;
    opacity: 0.5;
  }
`;

export default GlobalStyle;
