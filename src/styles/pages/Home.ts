import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows:20vh 80vh;
  h1 {
    font-size: 2em;
    color: ${props => props.theme.colors.primary};
  }
  header{
    /* width: 100%;
    height: 100px; */
    background: green;
   grid-column-start: 1;
   grid-column-end: 1;
  }
  main {
    background: brown;
    /* width: 100%;
    height: 100px; */
    /* width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows:20vh 80vh */
  
  }
`
