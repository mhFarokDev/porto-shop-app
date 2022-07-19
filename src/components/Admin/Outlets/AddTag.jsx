import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AddTag = ({makeSlug}) => {

    // form data state
    const [tag, setTag] = useState()
    const handleForm = (e)=>{
        e.preventDefault()
        let slug = makeSlug(tag)
        
        axios.post('http://localhost:5050/tags', {
        'id' : '',
        'name' : tag,
        'slug' : slug
    }).then(res=>{
        setTag('')
    })
    }
    
  return (
    <>
    <span className='list-group-item d-flex justify-content-between'><h2>Add New Tag</h2> <Link to={'/admin/tags'} className="btn btn-info">Back </Link></span>
    <Form className='mt-3' onSubmit={handleForm}>
        <Form.Group>
            <Form.Label>Tag Name</Form.Label>
            <Form.Control type='text' onChange={(e)=>setTag(e.target.value)} value={tag}/>
        </Form.Group>
        <Button type="submit" Variant="primary">Add Tag</Button>
    </Form>
    </>

  )
}

export default AddTag