import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Button, CloseButton, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Tag = ({tags, makeSlug}) => {
  // delete data
  const handleDelete = (id)=>{
    let conFirm = window.confirm("Do you want to delete this Item?");
    if (conFirm === true) {
      axios.delete(`http://localhost:5050/tags/${id}`)
    }
  }


  // show hide edit form by state
  const [result, setResult] = useState(false)

  // edit tag by state
  const [editTag, setEditTag] = useState({
    id : '',
    name : ''
  })

  // edit action function
  const handelEdit = (Index)=>{
    setResult(true)

    axios.get(`http://localhost:5050/tags/${Index}`).then(res=>{
      setEditTag({...editTag, name:res.data.name, id:res.data.id})
    })
    
  }

  // Edit Form Data 
  const handleForm = (e) =>{
      e.preventDefault()
      let slug = makeSlug(editTag.name)
      axios.patch(`http://localhost:5050/tags/${editTag.id}`,{
        id : '',
        name : editTag.name,
        slug : slug
      }).then(res=>{
        setResult(false)
      })
  }

  return (
    <>
    <span className='list-group-item d-flex justify-content-between'><h2>Tag</h2> <Link to={'/admin/add-tag'} className="btn btn-primary">Add New Tag</Link></span>
    {
      result && <Form onSubmit={handleForm}>
      <Form.Group >
        <Form.Label className='d-flex justify-content-between mt-3'>Edit tag <span className='btn btn-danger' onClick={()=>setResult(false)}>&#x2715; </span></Form.Label>
        <Form.Control type='text' value={editTag.name} onChange={(e)=>setEditTag({...editTag, name:e.target.value})}/>
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
          tags.map((data, index)=>
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

export default Tag;