import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 72px;
  display: flex;
  align-items: center;
  padding: 12px 0 12px 12px;
  box-shadow: var(--box-shadow);
  background: linear-gradient(0deg, #e5617c 0%, var(--color-pink) 75%);

  input {
    width: 100%;
    height: 100%;
    font-size: 1.25rem;
    border: 0;
    border-radius: 30px;
    padding: 0 16px 0 48px;
    background: #f0f0f0;
    outline: 0;
    font-family: "Signika", sans-serif;

    &:focus {
      background: #fafafa;
    }
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  flex-grow: 1;
  height: 100%;
`

export const MenuIcon = styled.div`  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  font-size: 28px;
  height: 72px;
  cursor: pointer;

  svg path {
    fill: #ffffff;
  }
`


export const SearchIcon = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 72px;
  font-size: 22px;
  height: 72px;

  svg path {
    fill: var(--color-pink);
  }
`

export const Main = styled.main`
  margin-top: 80px;

  ul {
    padding: 0;
    list-style: none;

    li {
      border-bottom: 2px solid #f0f0f0;

      a {
        display: block;
        font-size: 1.25rem;
        padding: 0.75rem 1rem;
        display: block;
        text-decoration: none;
        color: inherit;
      }
    }
  }
`
export const Loading = styled.div`

`