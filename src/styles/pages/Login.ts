import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 2em;
    color: ${props => props.theme.colors.primary};
  }
  /* h2 {
    font-size: 1.3rem;
    color: ${props => props.theme.colors.primary};
    margin: 0px;
  } */
  main {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 3fr 1.3fr;
    .first-panel {
      height: 100vh;

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
      position: relative;
      background: #59599e;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .head-login {
        margin: 8px 0px;
      }
      .login-container {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
        p {
          font-size: 0.8rem;
          text-align: center;
        }
        h2 {
          margin-top: 24px;
        }

        .input {
          position: relative;
          display: flex;
          align-items: center;
          width: 60%;
          margin: 8px 0px;
          i {
            width: 20%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: ${props => props.theme.colors.primary};
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
            svg {
              color: #59599e;
              width: 40%;
              height: 40%;
            }
            &:after {
              content: '';
              width: 2px;
              height: 60%;
              color: #59599e;
              background-color: currentColor;
              display: inline-block;
              margin-left: 8px;
            }
          }

          input {
            outline: none;
            width: 100%;
            height: 2.813rem;
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
            border: none;
          }
        }
        .logIn {
          width: 60%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 12px 0px;
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
                    color: #59599e;
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
                color: #59599e;
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
            font-weight: bold;
            &:hover {
              text-decoration-color: #57b0c9;
            }
          }
        }
      }

      .copyright {
        margin: 8px 0px;
        font-size: 0.75rem;
      }
    }
  }
`
