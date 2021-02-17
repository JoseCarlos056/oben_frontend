import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  /* grid-template-rows:10vh 90vh;
  grid-row-gap: 10px; */
  flex-direction: column;
  h1 {
    font-size: 2em;
    color: ${props => props.theme.colors.primary};
  }
  header {
    position: fixed;
    z-index: 2;
    height: 45px;
    width: 100vw;
    padding: 0px 20px;
    background: #59599e;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  main {
    width: 100vw;
    padding: 60px;
    margin-top: 55px;
    .masonry {
      column-count: 5;
      column-gap: 10px;
      figure {
        position: relative;
        margin: 0;
        display: flex;
        margin-bottom: 10px;
        break-inside: avoid;
        img {
          width: 100%;
          border-radius: 4px;
        }
      }
    }
  }
`
