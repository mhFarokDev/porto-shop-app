import React, { useState } from 'react'
import product1 from '../../assets/images/products/zoom/product-1.jpg'
import product2 from '../../assets/images/products/zoom/product-2.jpg'
import product3 from '../../assets/images/products/zoom/product-3.jpg'
import product4 from '../../assets/images/products/zoom/product-4.jpg'
import bannerRIght from '../../assets/images/banners/banner-sidebar.jpg'
import brandName from '../../assets/images/product-brand.png'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'

const SingleShop = ({products}) => {
    // backend function
    // data state
    const [single, setSingle] = useState({})
    const [slugChange, setSlugChange] = useState(useParams())
    
    const slug = useParams()
    useEffect(()=>{
        axios.get(`http://localhost:5050/products?slug=${slug.slug}`).then(res=>{
            setSingle(res.data[0]);
            setUpdateSingle(res.data[0].image)
        })
        
    },[single])
    
    
    
    useEffect(()=>{
        if (singleImage === undefined) {
            setSingleImage(updateSingle)
        }else if(singleImage != single.image && singleImage != product2 && singleImage != product3 && singleImage != product4){
            setSingleImage(updateSingle)
        }else if(slugChange.slug != slug.slug){
            setSingleImage(updateSingle)
            setSlugChange(slug)
        }
      })

    
    
    
    


    // Design releted function
  // single image and change image by state
  const [singleImage, setSingleImage] = useState()
    const [updateSingle, setUpdateSingle] = useState()
  // product details tab control by state
  const handleTabControl = (e, attr)=>{
    e.preventDefault()
    // get Html Elements
    let allTabLinks = document.querySelectorAll('.nav-link')
    let allTabPens = document.querySelectorAll('.tab-pane')

    // work on teb links items
    allTabLinks.forEach(element => {
      element.classList.remove('active');
    });
    e.target.classList.add('active')

    // work on tab pen items
    allTabPens.forEach(element => {
      element.classList.remove('show', 'active');
    });
    let x = document.querySelector(`[aria-labelledby="${attr}"]`).classList.add('show', 'active')
  }

  // color switch bariation
  const handleColorSwitcher = (e)=>{
    e.preventDefault()
    const elements = document.querySelectorAll('.config-swatch-list li')
    elements.forEach(element =>{
      element.classList.remove('active')
    })
    e.target.parentElement.classList.add('active')
  }

  

  

  

  return (
    <main className="main">
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index-2.html"><i className="icon-home"></i></a></li>
                        <li className="breadcrumb-item"><a href="#">Electronics</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Headsets</li>
                    </ol>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <div className="product-single-container product-single-default">
                            <div className="row">
                                <div className="col-lg-7 col-md-6 product-single-gallery">
                                    <div className="product-slider-container product-item">
                                        <div className="product-single-carousel ">
                                            <div className="product-item ">
                                                <img className="product-single-image" src={singleImage} style={{height:'500px', objectFit:'cover'}}/>
                                            </div>
                                        </div>
                                        
                                        <span className="prod-full-screen">
                                            <i className="icon-plus"></i>
                                        </span>
                                    </div>
                                    <div className="prod-thumbnail row owl-dots" id='carousel-custom-dots'>
                                        <div className="col-3 owl-dot" onClick={()=>setSingleImage(updateSingle)}>
                                            <img src={updateSingle}  style={{height:'115px', objectFit:'cover'}}/>
                                        </div>
                                        <div className="col-3 owl-dot"  onClick={()=>setSingleImage(product2)}>
                                            <img src={product2}  style={{height:'115px', objectFit:'cover'}}/>
                                        </div>
                                        <div className="col-3 owl-dot" onClick={()=>setSingleImage(product3)}>
                                            <img src={product3}  style={{height:'115px', objectFit:'cover'}}/>
                                        </div>
                                        <div className="col-3 owl-dot" onClick={()=>setSingleImage(product4)}>
                                            <img src={product4}  style={{height:'115px', objectFit:'cover'}}/>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-md-6">
                                    <div className="product-single-details">
                                        <h1 className="product-title">{single.name}</h1>

                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{width:`${Math.ceil(single.rateing)}0%`}}></span>
                                            </div>

                                            <a href="#" className="rating-link">( 6 Reviews )</a>
                                        </div>

                                        <div className="price-box">
                                            <span className="old-price">{single.regPrice}&#2547;</span>
                                            <span className="product-price">{single.sellPrice}&#2547;</span>
                                        </div>

                                        <div className="product-desc">
                                            <p>{single.desc}</p>
                                        </div>

                                        <div className="product-filters-container">
                                            <div className="product-single-filter">
                                                <label>Colors:</label>
                                                <ul className="config-swatch-list">
                                            <li onClick={(e)=>handleColorSwitcher(e)}>
                                                <a href="#" style={{backgroundColor: "#4090d5"}}></a>
                                            </li>
                                            <li className="active" onClick={(e)=>handleColorSwitcher(e)}>
                                                <a href="#"  style={{backgroundColor: "#f5494a"}} ></a>
                                            </li>
                                            <li onClick={(e)=>handleColorSwitcher(e)}>
                                                <a href="#" style={{backgroundColor: "#fca309"}}></a>
                                            </li>
                                            <li onClick={(e)=>handleColorSwitcher(e)}>
                                                <a href="#" style={{backgroundColor: "#11426b"}}></a>
                                            </li>
                                            <li onClick={(e)=>handleColorSwitcher(e)}>
                                                <a href="#" style={{backgroundColor: "#f0f0f0"}}></a>
                                            </li>
                                            <li onClick={(e)=>handleColorSwitcher(e)}>
                                                <a href="#" style={{backgroundColor: "#3fd5c9"}}></a>
                                            </li>
                                            <li onClick={(e)=>handleColorSwitcher(e)}>
                                                <a href="#" style={{backgroundColor: "#979c1c"}}></a>
                                            </li>
                                            <li onClick={(e)=>handleColorSwitcher(e)}>
                                                <a href="#" style={{backgroundColor: "#7d5a3c"}}></a>
                                            </li>
                                        </ul>
                                            </div>
                                        </div>

                                        <div className="product-action product-all-icons">
                                            <div className="product-single-qty">
                                                <input className="horizontal-quantity form-control" type="text"/>
                                            </div>

                                            <a href="cart.html" className="paction add-cart" title="Add to Cart">
                                                <span>Add to Cart</span>
                                            </a>
                                            <a href="#" className="paction add-wishlist" title="Add to Wishlist">
                                                <span>Add to Wishlist</span>
                                            </a>
                                            <a href="#" className="paction add-compare" title="Add to Compare">
                                                <span>Add to Compare</span>
                                            </a>
                                        </div>

                                        <div className="product-single-share">
                                            <label>Share:</label>
                                            
                                            <div className="addthis_inline_share_toolbox"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product-single-tabs">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a className="nav-link active" id="product-tab-desc" onClick={(e)=>handleTabControl(e, 'product-tab-desc')} data-toggle="tab" href="#product-desc-content" role="tab" aria-controls="product-desc-content" aria-selected="true">Description</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="product-tab-tags" onClick={(e)=>handleTabControl(e, 'product-tab-tags')} data-toggle="tab" href="#product-tags-content" role="tab" aria-controls="product-tags-content" aria-selected="false">Tags</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" id="product-tab-reviews" onClick={(e)=>handleTabControl(e, 'product-tab-reviews')} data-toggle="tab" href="#product-reviews-content" role="tab" aria-controls="product-reviews-content" aria-selected="false">Reviews</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane fade show active" id="product-desc-content" role="tabpanel" aria-labelledby="product-tab-desc">
                                    <div className="product-desc-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
                                        <ul>
                                            <li><i className="icon-ok"></i>Any Product types that You want - Simple, Configurable</li>
                                            <li><i className="icon-ok"></i>Downloadable/Digital Products, Virtual Products</li>
                                            <li><i className="icon-ok"></i>Inventory Management with Backordered items</li>
                                        </ul>
                                        <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br/>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="product-tags-content" role="tabpanel" aria-labelledby="product-tab-tags">
                                    <div className="product-tags-content">
                                        <form action="#">
                                            <h4>Add Your Tags:</h4>
                                            <div className="form-group">
                                                <input type="text" className="form-control form-control-sm" required/>
                                                <input type="submit" className="btn btn-primary" value="Add Tags"/>
                                            </div>
                                        </form>
                                        <p className="note">Use spaces to separate tags. Use single quotes (') for phrases.</p>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="product-reviews-content" role="tabpanel" aria-labelledby="product-tab-reviews">
                                    <div className="product-reviews-content">
                                        <div className="collateral-box">
                                            <ul>
                                                <li>Be the first to review this product</li>
                                            </ul>
                                        </div>

                                        <div className="add-product-review">
                                            <h3 className="text-uppercase heading-text-color font-weight-semibold">WRITE YOUR OWN REVIEW</h3>
                                            <p>How do you rate this product? *</p>

                                            <form action="#">
                                                <table className="ratings-table">
                                                    <thead>
                                                        <tr>
                                                            <th>&nbsp;</th>
                                                            <th>1 star</th>
                                                            <th>2 stars</th>
                                                            <th>3 stars</th>
                                                            <th>4 stars</th>
                                                            <th>5 stars</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Quality</td>
                                                            <td>
                                                                <input type="radio" name="ratings[1]" id="Quality_1" value="1" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="ratings[1]" id="Quality_2" value="2" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="ratings[1]" id="Quality_3" value="3" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="ratings[1]" id="Quality_4" value="4" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="ratings[1]" id="Quality_5" value="5" className="radio"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Value</td>
                                                            <td>
                                                                <input type="radio" name="value[1]" id="Value_1" value="1" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="value[1]" id="Value_2" value="2" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="value[1]" id="Value_3" value="3" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="value[1]" id="Value_4" value="4" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="value[1]" id="Value_5" value="5" className="radio"/>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Price</td>
                                                            <td>
                                                                <input type="radio" name="price[1]" id="Price_1" value="1" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="price[1]" id="Price_2" value="2" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="price[1]" id="Price_3" value="3" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="price[1]" id="Price_4" value="4" className="radio"/>
                                                            </td>
                                                            <td>
                                                                <input type="radio" name="price[1]" id="Price_5" value="5" className="radio"/>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>

                                                <div className="form-group">
                                                    <label>Nickname <span className="required">*</span></label>
                                                    <input type="text" className="form-control form-control-sm" required/>
                                                </div>
                                                <div className="form-group">
                                                    <label>Summary of Your Review <span className="required">*</span></label>
                                                    <input type="text" className="form-control form-control-sm" required/>
                                                </div>
                                                <div className="form-group mb-2">
                                                    <label>Review <span className="required">*</span></label>
                                                    <textarea cols="5" rows="6" className="form-control form-control-sm"></textarea>
                                                </div>

                                                <input type="submit" className="btn btn-primary" value="Submit Review"/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sidebar-overlay"></div>
                    <div className="sidebar-toggle"><i className="icon-sliders"></i></div>
                    <aside className="sidebar-product col-lg-3 padding-left-lg mobile-sidebar">
                        <div className="sidebar-wrapper">
                            <div className="widget widget-brand">
                                <a href="#">
                                    <img src={brandName} alt="brand name"/>
                                </a>
                            </div>

                            <div className="widget widget-info">
                                <ul>
                                    <li>
                                        <i className="icon-shipping"></i>
                                        <h4>FREE<br/>SHIPPING</h4>
                                    </li>
                                    <li>
                                        <i className="icon-us-dollar"></i>
                                        <h4>100% MONEY<br/>BACK GUARANTEE</h4>
                                    </li>
                                    <li>
                                        <i className="icon-online-support"></i>
                                        <h4>ONLINE<br/>SUPPORT 24/7</h4>
                                    </li>
                                </ul>
                            </div>

                            <div className="widget widget-banner">
                                <div className="banner banner-image">
                                    <a href="#">
                                        <img src={bannerRIght} alt="Banner Desc"/>
                                    </a>
                                </div>
                            </div>

                            <div className="widget widget-featured">
                                <h3 className="widget-title">Featured Products</h3>
                                
                                <div className="widget-body">
                                    <div className=" widget-featured-products">
                                        <div className="featured-col">


                                            {
                                                products.slice(0, 3).map(data=>
                                                    
                                                    <div className="product-default left-details product-widget">
                                                <figure>
                                                    <Link to={`/shop/${data.slug}`}>
                                                        <img src={data.image}/>
                                                    </Link>
                                                </figure>
                                                <div className="product-details">
                                                    <h2 className="product-title">
                                                        <Link to={`/shop/${data.slug}`}>{(data.name).slice(0, 17)}...</Link>
                                                    </h2>
                                                    <div className="ratings-container">
                                                        <div className="product-ratings">
                                                            <span className="ratings" style={{width:`${data.rateing*2}0%`}}></span>
                                                            <span className="tooltiptext tooltip-top"></span>
                                                        </div>
                                                    </div>
                                                    <div className="price-box">
                                                        <span className="product-price">{data.sellPrice}</span>
                                                    </div>
                                                </div>
                                            </div>
                                                    
                                                    
                                                    )
                                            }
                                            
                                            

                                            


                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <div className="featured-section">
                <div className="container">
                    <h2 className="carousel-title">Featured Products</h2>

                    <div className="product-intro owl-carousel owl-theme d-flex justify-content-between">



                        {
                            products.slice(0, 5).map(data=>
                                <div className="product-default">
                                    <figure>
                                        <Link to={`/shop/${data.slug}`}>
                                            <img src={data.image} alt='' style={{width:'250px', height:'300px', objectFit:'cover'}}/>
                                        </Link>
                                    </figure>
                                    <div className="product-details">
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{width:`${Math.ceil(data.rateing)*2}0%`}}></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                        </div>
                                        <h2 className="product-title">
                                            <Link to={`/shop/${data.slug}`}>{(data.name).slice(0, 16)}...</Link>
                                        </h2>
                                        <div className="price-box">
                                            <span className="product-price">{data.sellPrice}</span>
                                        </div>
                                        <div className="product-action">
                                            <Link to={`/shop/${data.slug}`}><i className="icon-heart"></i></Link>
                                            <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag"></i>ADD TO CART</button>
                                            <Link to={`/shop/${data.slug}`} className="btn-quickview" title="Quick View"><i className="fas fa-external-link-alt"></i></Link> 
                                        </div>
                                    </div>
                                </div>
                                
                                )
                        }
                        
                        


                    </div>
                </div>
            </div>
        </main>
  )
}

export default SingleShop