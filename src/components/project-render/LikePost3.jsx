import React from 'react'

const LikePost3 = (props) => {
  return (
    <button onClick={props.handleCount}>Like post {props.count}</button>
  )
}

export default LikePost3