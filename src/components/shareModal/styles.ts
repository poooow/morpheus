import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  background: #ffffff;
  padding: 1rem;
  border-radius: 1rem;

  img {
    width: calc(100vw - 6rem);
    height: auto;
  }

  div {
    text-align: center;
  }
`