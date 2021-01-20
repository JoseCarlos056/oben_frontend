import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 3.375rem;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }
  p {
    line-height: 32px;
  }
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .first-panel {
      height: 100vh;
      flex: 70%;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .auth-panel {
      box-shadow: -5px 3px 5px -3px rgba(0, 0, 0, 0.65);
      height: 100vh;
      flex: 30%;
      background: #6666cc;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      .change-input {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        div {
          width: 2px;
          height: 1.1rem;
          background-color: #f2f2f2;
          margin: 5px;
        }
        p {
          font-size: 1.1rem;
        }
      }
      .input {
        width: 60%;
        p {
          display: flex;
          align-items: center;
          justify-content: first baseline;
          font-size: 0.938rem;
          font-weight: bold;
          svg {
            margin-right: 5px;
            width: 18px;
            height: 18px;
          }
        }
        input {
          outline: none;
          width: 100%;
          height: 45px;
          border-radius: 5px;
          border: none;
          padding-right: 20px;
          padding-left: 20px;
        }
      }
      .logIn {
        width: 60%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .social-media {
          .list-social-media {
            list-style-type: none;
            display: flex;
            margin: 0;
            padding: 0;
            .item-social-media {
              transition: all 0.2s ease-in;
              border: 1px solid #bdc3c7;
              border-radius: 50%;
              width: 35px;
              height: 35px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-left: 10px;
              svg {
                width: 60%;
                color: ${props => props.theme.colors.primary};
              }
              &:hover {
                background-color: #f2f2f2;
                svg {
                  color: #6666cc;
                }
              }
            }
          }
        }
        button {
          transition: all 0.2s ease-in;
          width: 80px;
          height: 35px;
          border-radius: 5px;
          border: none;
          outline: none;
          background: transparent;
          border: 1px solid #bdc3c7;
          cursor: pointer;
          svg {
            color: #f2f2f2;
            width: 80%;
            height: 80%;
          }
          &:hover {
            background-color: #f2f2f2;
            svg {
              color: #6666cc;
            }
          }
        }
      }
      .suggest {
        font-size: 0.938rem;
        a {
          cursor: pointer;
          color: #57b0c9;
          transition: all 0.1s ease-in;
          text-decoration: underline;
          text-decoration-color: rgba(0, 0, 0, 0.15);
          &:hover {
            text-decoration-color: #57b0c9;
          }
        }
      }
      .copyright {
        font-size: 0.75rem;
      }
    }
  }
`
