import {createGlobalStyle} from 'styled-components';
import styled from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html, body {
    height: 100%;
  }
  body {
    
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
`;

export const StyledContent = styled.div`    
    min-height: 100vh;
`;