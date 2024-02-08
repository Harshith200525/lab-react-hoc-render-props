import React from 'react'
import Hoc from './Hoc'

const LikePost2 = (props) => {
    const {count, handleCount} = props

  return (
    <div>
        <button onClick={handleCount}>Like Image {count}</button>
    </div>
  )
}

export default Hoc(LikePost2);