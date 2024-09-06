import styled from 'styled-components'

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 72px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  box-shadow: 0px 2px 0px 0px #e0e0e0;
  background: linear-gradient(0deg, #e5617c 0%, var(--color-pink) 75%);
  font-weight: 600;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 1.75rem;
    text-decoration: none;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  flex-grow: 1;
`

export const BackIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 54px;
  font-size: 28px;
  height: 72px;

  svg path {
    fill: #ffffff;
  }
`

export const MenuIcon = styled.div`  
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 54px;
  font-size: 28px;
  height: 72px;
  cursor: pointer;

  svg path {
    fill: #ffffff;
  }
`

export const Main = styled.main`
  margin-top: 80px;
  max-width: 768px;
  margin: 92px auto 0;
  padding: 0 1rem;
`

export const Title = styled.h2`
  margin-bottom: 1.5rem
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: bottom;
  margin-bottom: 2rem;
`

export const Input = styled.input`
  font-size: 3rem;
  width: 6rem;
  font-family: "Signika", sans-serif;
  border-radius: 16px;
  border: 2px solid #e0e0e0;
  padding: 0 0.25rem;
`

export const Unit = styled.div`
  display: flex;
  align-items: end;
  margin: 0 1rem 0 0.25rem;
  font-size: 1.5rem;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  background: var(--color-pink);
  width: 64px;
  height: 64px;
  padding: 0;
  font-size: 3rem;
  font-family: "Signika", sans-serif;
  color: #ffffff;
  border: 0;
  border-radius: 16px;
  margin: 0 0.25rem;
  box-shadow: var(--box-shadow);
  transition: all 0.2s;

  &:active {
    background: var(--color-pink-dark);
    box-shadow: var(--box-shadow);
  }
`

export const Result = styled.div`
  margin: 0 0 2rem 0;
  font-size: 3rem;
  text-align: center;
`

export const Description = styled.div``