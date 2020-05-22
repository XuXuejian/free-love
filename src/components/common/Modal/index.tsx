import React from 'react'
import { createPortal } from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import { Mask, Wrap, Content, Container, GlobalStyle } from './styled'

const duration = 300
const Modal = (
  props: {
    visible: boolean
    children?: React.ReactNode
    onMask?: (e: React.MouseEvent) => void
    maskClosable?: boolean
  } = { visible: false, maskClosable: true },
) => {
  const modalDom = document.body
  const [showModal, setShowModal] = React.useState(false)
  const [display, setDisplay] = React.useState(false)
  React.useEffect(() => {
    setShowModal(props.visible)
  }, [props.visible])
  function onEnter() {
    setDisplay(true)
  }
  function onExited() {
    setDisplay(false)
  }
  function onCancel(e: React.MouseEvent) {
    if (props.maskClosable !== false) {
      props.onMask(e)
    }
  }
  return createPortal(
    <Container show={display}>
      <GlobalStyle />
      <CSSTransition mountOnEnter in={showModal} classNames="mask" timeout={duration}>
        <Mask />
      </CSSTransition>
      <CSSTransition
        mountOnEnter
        onEnter={onEnter}
        onExited={onExited}
        in={showModal}
        classNames="modal"
        timeout={duration}
      >
        <Wrap onClick={e => onCancel(e)}>
          <Content>{props.children}</Content>
        </Wrap>
      </CSSTransition>
    </Container>,
    modalDom,
  )
}

export default Modal
