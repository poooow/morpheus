import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  overflow: scroll;  
  padding-bottom: 1rem;
  scroll-behavior: smooth;
  margin-bottom: 1rem;
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  flex-basis: 42px;

  flex-shrink: 0;
  background: var(--color-pink);
  font-size: 2rem;
  font-family: "Signika", sans-serif;
  color: #ffffff;
  border: 0;
  border-radius: 8px;
  margin: 0 0.25rem;
  box-shadow: var(--box-shadow);
  transition: all 0.2s;

  &:active {
    background: var(--color-pink-dark);
    box-shadow: var(--box-shadow);
  }
`
