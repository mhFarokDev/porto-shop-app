import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';

import { Button, Col, Form, Row } from 'react-bootstrap';
import axios from 'axios';
const AddProduct = ({categorys, tags, makeSlug}) => {
    // form data state
    const [product, setProduct] = useState({
        name : '',
        image : '',
        regPrice : '',
        sellPrice : '',
        categorysId : '',
        tagsId : '',
        desc : '',
        rateing : ''
    })
    const handleForm = (e)=>{
        e.preventDefault()
        let slug = makeSlug(product.name)
        
        axios.post('http://localhost:5050/products', {
        'id' : '',
        'name' : product.name,
        'slug' : slug,
        'image' : product.image,
        'regPrice' : product.regPrice,
        'sellPrice' : product.sellPrice,
        'categorysId' : product.categorysId,
        'tagsId' : product.tagsId,
        'desc' : product.desc,
        'rateing' : product.rateing
    }).then(res=>{
        setProduct({
            name : '',
            image : '',
            regPrice : '',
            sellPrice : '',
            categorysId : '',
            tagsId : '',
            desc : '',
            rateing : ''
        })
    })
    
    }
    // console.log(product);
  return (
    <>
    <span className='list-group-item d-flex justify-content-between'><h2>Add New Product</h2> <Link to={'/admin/products'} className="btn btn-info">Back </Link></span>
    <Form className='mt-3' onSubmit={handleForm}>
        <Form.Group>
            <Form.Control type='text' placeholder='Product Name' className='w-100' onChange={(e)=>setProduct({...product, name:e.target.value})} value={product.name}/>
        </Form.Group>
        <Form.Group>
            <Form.Control type='text' placeholder='Product image link' className='w-100' onChange={(e)=>setProduct({...product, image:e.target.value})} value={product.image}/>
        </Form.Group>
        <Row>
            <Col md={6}>
            <Form.Group>
                <Form.Control type='text' placeholder='regular Price' className='w-100' onChange={(e)=>setProduct({...product, regPrice:e.target.value})} value={product.regPrice}/>
            </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group>
                <Form.Control type='text' placeholder='sell price' className='w-100' onChange={(e)=>setProduct({...product, sellPrice:e.target.value})} value={product.sellPrice}/>
            </Form.Group>
            </Col>
            
        </Row>
        <br/>
        <Form.Group>
            <Form.Label>Select category  </Form.Label>
            <Form.Select onChange={(e)=>setProduct({...product, categorysId:e.target.value})}>
                <option>--Select Category--</option>
                {
                    categorys.map(data=>
                        <option value={data.id}>{data.name}</option>
                        )
                }
                
            </Form.Select>
        </Form.Group>
        <br/>
        <Form.Group>
            <Form.Label>Select Tag  </Form.Label>
            <Form.Select onChange={(e)=>setProduct({...product, tagsId:e.target.value})}>
                <option>--Select Category--</option>
                {
                    tags.map(data=>
                        <option value={data.id}>{data.name}</option>
                        )
                }
                
            </Form.Select>
        </Form.Group>
        <br/>
        <Form.Group>
            <textarea placeholder='products details' className='w-100' onChange={(e)=>setProduct({...product, desc:e.target.value})} value={product.desc}></textarea>
            
        </Form.Group>
        <Form.Group>
            <Form.Control type='text' placeholder='rateing' onChange={(e)=>setProduct({...product, rateing:e.target.value})} value={product.rateing}/>
        </Form.Group>
        <Button type="submit" Variant="primary">Add Category</Button>
    </Form>
    </>
  )
}

export default AddProduct;