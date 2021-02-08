import styled from 'styled-components'

export const Container = styled.div`
  z-index: 2;
  display: flex;
  background-color: rgb(0 0 0 / 25%);
  height: 100%;
  width: 100%;
  position: fixed;
  top: 45px;
  left: 0;
  align-items: center;
  justify-content: center;
  .list-area {
    position: relative;
    background-color: white;
    width: 40%;
    min-height: 350px;
    max-height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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
