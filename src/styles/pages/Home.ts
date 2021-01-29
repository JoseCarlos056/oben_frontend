import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows:10vh 90vh;
  h1 {
    font-size: 2em;
    color: ${props => props.theme.colors.primary};
  }
  header{
    /* width: 100%;
    height: 100px; */
    padding: 0px 20px;
    background: #59599e;
   grid-column-start: 1;
   grid-column-end: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  main {
    background: #f2f2f2;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 20px;
    justify-content: center;
    align-items: center;
    /* align-items: space-evenly;
    justify-content: space-evenly; */
    div{
      align-self: center;
    width: 100%;
    height: 100%;
    background: #59599e;
    }
  
  }
`
