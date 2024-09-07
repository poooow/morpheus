import styled from "styled-components"

export const Container = styled.div`
  position: absolute;
  top: 4rem;
  right: 0;
  padding: 1rem;
  display: flex;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 16px;
  box-shadow: var(--box-shadow);

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      cursor: pointer;
      font-size: 1.25rem;
      padding: 0.5rem 0.75rem;

      &.active {
        color: var(--color-gray);
        cursor: default;
      }
  }
`