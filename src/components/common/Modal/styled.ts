import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  .modal-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .modal-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 300ms, transform 300ms;
  }
  .modal-exit {
    opacity: 1;
  }
  .modal-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
  .mask-enter {
    opacity: 0;
  }
  .mask-enter-active {
    opacity: 1;
    transition: opacity 300ms;
  }
  .mask-exit {
    opacity: 1;
  }
  .mask-exit-active {
    opacity: 0;
    transition: opacity 300ms;
  }
`

export const Mask = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`
export const Wrap = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`
export const Content = styled.div`
  position: relative;
  width: 520px;
  top: 200px;
  margin: 0 auto;
  background-color: white;
`
interface ContainerProps {
  show: boolean | undefined
}
export const Container = styled.div<ContainerProps>`
  display: ${props => (props.show ? 'block' : 'none')};
`
