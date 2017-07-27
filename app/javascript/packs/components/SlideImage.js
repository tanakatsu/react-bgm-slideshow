import React from 'react'

const SlideImage = props => (
  <div><img src={props.url} height={ props.height ? props.height : "auto" } /></div>
)

export default SlideImage
