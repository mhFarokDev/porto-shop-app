import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const AddCategory = ({makeSlug}) => {

    // form data state
    const [catg, setCatg] = useState()
    const handleForm = (e)=>{
        e.preventDefault()
        let slug = makeSlug(catg)
        
        axios.post('http://localhost:5050/categorys', {
        'id' : '',
        'name' : catg,
        'slug' : slug
    }).then(res=>{
        setCatg('')
    }).catch(err=>{
        alert('err')
    })
    }
    
  return (
    <>
    <span className='list-group-item d-flex justify-content-between'><h2>Add New Category</h2> <Link to={'/admin/category'} className="btn btn-info">Back </Link></span>
    <Form className='mt-3' onSubmit={handleForm}>
        <Form.Group>
            <Form.Label>Category Name</Form.Label>
            <Form.Control type='text' onChange={(e)=>setCatg(e.target.value)} value={catg}/>
        </Form.Group>
        <Button type="submit" Variant="primary">Add Category</Button>
    </Form>
    </>

  )
}

export default AddCategory