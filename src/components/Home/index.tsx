import React from 'react'

import { add } from '@/utils'

const Home: React.FC = () => (
  <div className="number1">
    home page. numbers: {add(2, 6)}
    <span className="number2"></span>
  </div>
)

export default Home
