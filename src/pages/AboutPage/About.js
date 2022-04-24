import React from 'react'
import { homeObjOne } from './Data'
import { About } from '../../components'

const Home = () => {
  return (
    <div>
      <About {...homeObjOne} />
    </div>
  )
}

export default Home
