import styled from 'styled-components'

const RootContainer = styled.div`  
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 125px 40px auto 40px;
  grid-template-areas:     
    "Header1Area" 
    "MenuArea"
    "ContentArea" 
    "FooterArea";  
  height: 100vh;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  text-align: left;
  min-width: 1366px;
  color: #003e60;
`
export default RootContainer