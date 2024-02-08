import React from 'react'

const LikeImage3 = (props) => {
  return (
    <button onClick={props.handleCount}>Like image {props.count}</button>
  )
}

export default LikeImage3