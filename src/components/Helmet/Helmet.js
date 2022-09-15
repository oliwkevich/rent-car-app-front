import React from 'react'

export const Helmet = (props) => {
    document.title = 'Rent Car Service - ' + props.title;
  return (
    <div className='w-100'>{props.children}</div>
  )
}
