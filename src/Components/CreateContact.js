import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const CreateContact = () => {
  return (
    <Fragment>
        <div className='d-flex align-items-center justify-content-center w-100'style={{border:'1px solid grey',borderRadius:'5px'}}>
            <Link to='/contact'>
        <button type="button" class="btn btn-primary">Create Contact</button>
        </Link>
        </div>
    </Fragment>
  )
}

export default CreateContact