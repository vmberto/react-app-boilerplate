import { createGlobalStyle } from 'styled-components'
import { rootBackgroundColor, fontFamily } from "app/utils/styled-components.utils";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${rootBackgroundColor};
    font-family: ${fontFamily}
  } 
`
export default GlobalStyle;