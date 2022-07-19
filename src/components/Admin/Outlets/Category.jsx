import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

import { Button, Form, Table } from 'react-bootstrap';
import axios from 'axios';


const Category = ({categorys, makeSlug}) => {
  // delete data
  const handleDelete = (id)=>{
    let conFirm = window.confirm("Do you want to delete this Item?");
    if (conFirm === true) {
      axios.delete(`http://localhost:5050/categorys/${id}`)
    }
  }


  // show hide edit form by state
  const [result, setResult] = useState(false)

  // edit tag by state
  const [editCat, setEditCat] = useState({
    id : '',
    name : ''
  })

  // edit action function
  const handelEdit = (Index)=>{
    setResult(true)

    axios.get(`http://localhost:5050/categorys/${Index}`).then(res=>{
      setEditCat({...editCat, name:res.data.name, id:res.data.id})
    })
    
  }


  // Edit Form Data 
  const handleForm = (e) =>{
    e.preventDefault()
    let slug = makeSlug(editCat.name)
    axios.patch(`http://localhost:5050/categorys/${editCat.id}`,{
      id : '',
      name : editCat.name,
      slug : slug
    }).then(res=>{
      setResult(false)
    })
}
  return (
    <>
    <span className='list-group-item d-flex justify-content-between'><h2>Category</h2> <Link to={'/admin/add-category'} className="btn btn-primary">Add New Category</Link></span>
    {
      result && <Form onSubmit={handleForm}>
      <Form.Group >
        <Form.Label className='d-flex justify-content-between mt-3'>Edit tag <span className='btn btn-danger' onClick={()=>setResult(false)}>&#x2715; </span></Form.Label>
        <Form.Control type='text' value={editCat.name} onChange={(e)=>setEditCat({...editCat, name:e.target.value})}/>
      </Form.Group>
      <Button type='submit' varient="success">Add</Button>
    </Form>
    }
    <Table>
      <thead>
        <tr>
          <td>#</td>
          <td>Tag Name</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {
          categorys.map((data, index)=>
            <tr>
              <th>{index}</th>
              <th>{data.name}</th>
              <th className='actionBtn'>
                <span className='btn btn-primary' onClick={()=>handelEdit(data.id)}>&#9998;</span>
                <span className='btn btn-danger' onClick={()=>handleDelete(data.id)}>🗑</span>
                </th>
          
        </tr>
          )
        }
        
      </tbody>
    </Table>
    </>
  )
}

export default Category