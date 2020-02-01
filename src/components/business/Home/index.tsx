import React from 'react'

import Modal from '@/components/common/Modal'

import { add } from '@/utils'

const Home: React.FC = () => {
  const [show, setShow] = React.useState(false)
  function onCancel(e: React.MouseEvent) {
    setShow(false)
  }
  return (
    <div className="number1">
      home page. numbers: {add(2, 6)}
      <span className="number2"></span>
      <button onClick={() => setShow(true)}>show modal</button>
      <Modal visible={show} onMask={onCancel} maskClosable={false}>
        <div onClick={() => setShow(false)}>this is a modal.</div>
      </Modal>
    </div>
  )
}

export default Home
