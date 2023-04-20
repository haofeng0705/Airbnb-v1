import styled from "styled-components";

export const LeftWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  //接收 themeProvider 传来的主题
  color: ${props => props.theme.color.primaryColor};

  
  .logo {
    margin-left: 24px;
    cursor: pointer;
  }
`
