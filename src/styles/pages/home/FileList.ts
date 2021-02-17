import styled from 'styled-components'
interface IContainer {
  dragged: boolean
}
interface IPreview {
  src: string
}
export const Container = styled.div<IContainer>`
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
  .list-area {
    border-radius: 8px;
    position: relative;
    background-color: white;
    width: 40%;
    min-height: 350px;
    max-height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .drag-area {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      .area {
        background: rgb(255 255 255 / 92%);
        width: 100%;
        min-height: 80px;
        border-radius: 8px;
        border: 2px solid #727272;
        border-style: dashed;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 25px;
          height: 25px;
        }
        p {
          font-size: 1em;
          font-weight: bold;
          color: #727272;
        }
      }
    }
    .more-area {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: 0.5px solid #c5c0c0;
      label {
        cursor: pointer;
        background: #59599e;
        justify-content: center;
        display: flex;
        align-items: center;
        margin: 8px 0px;
        border-radius: 5px;
        padding: 5px;
        input {
          display: none;
        }
      }
    }
  }
`
export const ListFiles = styled.ul`
  width: 100%;
  padding: 8px;
  flex-grow: 1;
  overflow-y: scroll;
  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #444;
    & + li {
      margin-top: 15px;
    }
  }
`
export const FileInfo = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  div {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    strong {
      overflow: hidden;
      text-overflow: ellipsis;
    }
    span {
      font-size: 12px;
      color: #999;
      margin-top: 5px;
      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`

export const Preview = styled.div<IPreview>`
  width: 36px;
  height: 36px;
  border-radius: 5px;
  background-image: url(${props => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  margin-right: 10px;
`
