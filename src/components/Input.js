import React from 'react'
import PropTypes from 'prop-types'


export default function Input(props) {
  return (
    <>
    <div className="form-floating mb-3 my-3">
  <input  type="text" className="form-control" id="floatingInput" placeholder="Enter Place Name Here"/>
  <label htmlFor="floatingInput">Enter Place Name Here </label>
  <button className='hey2' onClick={props.shange}>Click Here For Live Weather Details</button>
  
</div>

</>
  )
}
