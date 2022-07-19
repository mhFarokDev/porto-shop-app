import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Products = ({products, makeSlug}) => {
  // delete data
  const handleDelete = (id)=>{
    let conFirm = window.confirm("Do you want to delete this Item?");
    if (conFirm === true) {
      axios.delete(`http://localhost:5050/products/${id}`)
    }
  }


  // show hide edit form by state
  const [result, setResult] = useState(false)

  // edit tag by state
  const [editPro, setEditPro] = useState({
    id : '',
    name : '',
    image : '',
    regPrice : '',
    sellPrice : '',
    desc : '',
    rateing : ''
  })

  // edit action function
  const handelEdit = (Index)=>{
    setResult(true)

    axios.get(`http://localhost:5050/products/${Index}`).then(res=>{
      setEditPro({...editPro, name:res.data.name, id:res.data.id, image:res.data.image, regPrice:res.data.regPrice, sellPrice:res.data.sellPrice, desc:res.data.desc, rateing:res.data.rateing})
    })
    
  }

  // Edit Form Data 
  const handleForm = (e) =>{
      e.preventDefault()
      let slug = makeSlug(editPro.name)
      axios.patch(`http://localhost:5050/products/${editPro.id}`,{
        id : '',
        name : editPro.name,
        slug : slug,
        image : editPro.image,
        regPrice : editPro.regPrice,
        sellPrice : editPro.sellPrice,
        desc : editPro.desc,
        rateing : editPro.rateing
      }).then(res=>{
        setResult(false)
      })
  }
  return (
    <>
    <span className='list-group-item d-flex justify-content-between'><h2>Products</h2> <Link to={'/admin/add-product'} className="btn btn-primary">Add New Product</Link></span>
    {
      result && <Form onSubmit={handleForm}>
      <Form.Group >
        <Form.Label className='d-flex justify-content-between mt-3'>product name <span className='btn btn-danger' onClick={()=>setResult(false)}>&#x2715; </span></Form.Label>
        <Form.Control type='text' value={editPro.name} onChange={(e)=>setEditPro({...editPro, name:e.target.value})}/>
      </Form.Group>
      <Form.Group >
        <Form.Label className='d-flex justify-content-between mt-3'>product image</Form.Label>
        <Form.Control type='text' value={editPro.image} onChange={(e)=>setEditPro({...editPro, image:e.target.value})}/>
      </Form.Group>
      <Form.Group >
        <Form.Label className='d-flex justify-content-between mt-3'>product image</Form.Label>
        <Form.Control type='text' value={editPro.regPrice} onChange={(e)=>setEditPro({...editPro, regPrice:e.target.value})}/>
      </Form.Group>
      <Form.Group >
        <Form.Label className='d-flex justify-content-between mt-3'>product image</Form.Label>
        <Form.Control type='text' value={editPro.sellPrice} onChange={(e)=>setEditPro({...editPro, sellPrice:e.target.value})}/>
      </Form.Group>
      <Form.Group >
        <Form.Label className='d-flex justify-content-between mt-3'>product image</Form.Label>
        <Form.Control type='text' value={editPro.desc} onChange={(e)=>setEditPro({...editPro, desc:e.target.value})}/>
      </Form.Group>
      <Form.Group >
        <Form.Label className='d-flex justify-content-between mt-3'>product image</Form.Label>
        <Form.Control type='text' value={editPro.rateing} onChange={(e)=>setEditPro({...editPro, rateing:e.target.value})}/>
      </Form.Group>
      <Button type='submit' varient="success">Add</Button>
    </Form>
    }
    <Table>
      <thead>
        <tr>
          <td>#</td>
          <td>products Name</td>
          <td>Category</td>
          <td>Tag</td>
          <td>reg price</td>
          <td>sell price</td>
          <td>Dricption</td>
          <td>Image</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {
          products.map((data, index)=>
            <tr>
              <th>{index+1}</th>
              <th>{(data.name).slice(0, 10)}...</th>
              <th>{data.categorysId}</th>
              <th>{data.tagsId}</th>
              <th>{data.regPrice}</th>
              <th>{data.sellPrice}</th>
              <th>{(data.desc).slice(0, 20)}...</th>
              <th><img src={data.image} alt="product Image" style={{width:'50px', height:'50px', objectFit:'cover', borderRadius:'50%'}}/></th>
              
              <th className='actionBtn'>
                <span className='btn btn-success' onClick={()=>handelEdit(data.id)}><Link to={`/shop/${data.slug}`}>&#128065;</Link></span>
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

export default Products