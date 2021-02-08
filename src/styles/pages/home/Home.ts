import styled from 'styled-components'
interface IContainer {
  dragged: boolean
}
export const Container = styled.div<IContainer>`
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
    .drag-area {
      z-index: 2;
      display: ${props => (props.dragged ? 'flex' : 'none')};
      background-color: rgb(0 0 0 / 25%);
      height: 100%;
      width: 100%;
      position: fixed;
      top: 45px;
      left: 0;
      align-items: center;
      justify-content: center;
      .area {
        background: rgb(255 255 255 / 92%);
        width: 80%;
        height: 80%;
        border: 5px solid #727272;
        border-style: dashed;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        img {
          width: 60%;
          height: 60%;
        }
        p {
          margin-top: 8px;
          font-size: 2em;
          font-weight: bold;
          color: #727272;
        }
      }
    }
  }
`
