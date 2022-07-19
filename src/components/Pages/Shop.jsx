import React from 'react'
import { Link } from 'react-router-dom';

import banner from '../../assets/images/banners/banner-top.jpg'
import product1 from '../../assets/images/products/product-1.jpg'

const Shop = ({products}) => {
  return (
    
    <main className="main">
            <div className="banner banner-cat" style={{backgroundImage: `url(${banner})`}}>
                <div className="banner-content container">
                    <h2 className="banner-subtitle">check out over <span>200+</span></h2>
                    <h1 className="banner-title">
                        INCREDIBLE deals
                    </h1>
                    <a href="#" className="btn btn-dark">Shop Now</a>
                </div>
            </div>

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
                        <nav className="toolbox">
                            <div className="toolbox-left">
                                <div className="toolbox-item toolbox-sort">
                                    <div className="select-custom">
                                        <select name="orderby" className="form-control">
                                            <option value="menu_order" selected="selected">Default sorting</option>
                                            <option value="popularity">Sort by popularity</option>
                                            <option value="rating">Sort by average rating</option>
                                            <option value="date">Sort by newness</option>
                                            <option value="price">Sort by price: low to high</option>
                                            <option value="price-desc">Sort by price: high to low</option>
                                        </select>
                                    </div>

                                    <a href="#" className="sorter-btn" title="Set Ascending Direction"><span className="sr-only">Set Ascending Direction</span></a>
                                </div>
                            </div>

                            <div className="toolbox-item toolbox-show">
                                <label>Showing 1-9 of 60 results</label>
                            </div>

                            <div className="layout-modes">
                                <a href="category.html" className="layout-btn btn-grid active" title="Grid">
                                    <i className="icon-mode-grid"></i>
                                </a>
                                <a href="category-list.html" className="layout-btn btn-list" title="List">
                                    <i className="icon-mode-list"></i>
                                </a>
                            </div>
                        </nav>

                        <div className="row row-sm">
                            

                            {
                                products.map(data=>
                                    <div className="col-6 col-md-4">
                                <div className="product-default">
                                    <figure>
                                        <Link to={`/shop/${data.slug}`}>
                                            <img src={data.image} style={{width:'250px', height:'250px', objectFit:'cover'}}/>
                                        </Link>
                                    </figure>
                                    <div className="product-details">
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{width:"100%"}}></span>
                                                <span className="tooltiptext tooltip-top"></span>
                                            </div>
                                        </div>
                                        <h2 className="product-title">
                                            <Link to="/shop/product1">{(data.name).slice(0, 16)}...</Link>
                                        </h2>
                                        <div className="price-box">
                                            <span className="product-price">$9.00</span>
                                        </div>
                                        <div className="product-action">
                                            <Link to={`/shop/${data.slug}`} className="btn-icon-wish"><i className="icon-heart"></i></Link>
                                            <button className="btn-icon btn-add-cart" data-toggle="modal" data-target="#addCartModal"><i className="icon-bag"></i>ADD TO CART</button>
                                            <Link to={`/shop/${data.slug}`} className="btn-quickview" title="Quick View"><i className="fas fa-external-link-alt"></i></Link> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                                    
                                    )
                            }
                            



                        </div>

                        <nav className="toolbox toolbox-pagination">
                            <div className="toolbox-item toolbox-show">
                                <label>Showing 1-9 of 60 results</label>
                            </div>

                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link page-link-btn" href="#"><i className="icon-angle-left"></i></a>
                                </li>
                                <li className="page-item active">
                                    <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">4</a></li>
                                <li className="page-item"><span>...</span></li>
                                <li className="page-item"><a className="page-link" href="#">15</a></li>
                                <li className="page-item">
                                    <a className="page-link page-link-btn" href="#"><i className="icon-angle-right"></i></a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <aside className="sidebar-shop col-lg-3 order-lg-first">
                        <div className="sidebar-wrapper">
                            <div className="widget">
                                <h3 className="widget-title">
                                    <a data-toggle="collapse" href="#widget-body-1" role="button" aria-expanded="true" aria-controls="widget-body-1">electronics</a>
                                </h3>

                                <div className="collapse show" id="widget-body-1">
                                    <div className="widget-body">
                                        <ul className="cat-list">
                                            <li><a href="#">Smart TVs</a></li>
                                            <li><a href="#">Cameras</a></li>
                                            <li><a href="#">Head Phones</a></li>
                                            <li><a href="#">Games</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="widget">
                                <h3 className="widget-title">
                                    <a data-toggle="collapse" href="#widget-body-2" role="button" aria-expanded="true" aria-controls="widget-body-2">Price</a>
                                </h3>

                                <div className="collapse show" id="widget-body-2">
                                    <div className="widget-body">
                                        <form action="#">
                                            <div className="price-slider-wrapper">
                                                <div id="price-slider"></div>
                                            </div>

                                            <div className="filter-price-action">
                                                <button type="submit" className="btn btn-primary">Filter</button>

                                                <div className="filter-price-text">
                                                    <span id="filter-price-range"></span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="widget">
                                <h3 className="widget-title">
                                    <a data-toggle="collapse" href="#widget-body-3" role="button" aria-expanded="true" aria-controls="widget-body-3">Size</a>
                                </h3>

                                <div className="collapse show" id="widget-body-3">
                                    <div className="widget-body">
                                        <ul className="config-size-list">
                                            <li><a href="#">S</a></li>
                                            <li className="active"><a href="#">M</a></li>
                                            <li><a href="#">L</a></li>
                                            <li><a href="#">XL</a></li>
                                            <li><a href="#">2XL</a></li>
                                            <li><a href="#">3XL</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="widget">
                                <h3 className="widget-title">
                                    <a data-toggle="collapse" href="#widget-body-4" role="button" aria-expanded="true" aria-controls="widget-body-4">Brands</a>
                                </h3>

                                <div className="collapse show" id="widget-body-4">
                                    <div className="widget-body">
                                        <ul className="cat-list">
                                            <li><a href="#">Adidas <span>18</span></a></li>
                                            <li><a href="#">Camel <span>22</span></a></li>
                                            <li><a href="#">Seiko <span>05</span></a></li>
                                            <li><a href="#">Samsung Galaxy <span>68</span></a></li>
                                            <li><a href="#">Sony <span>03</span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="widget">
                                <h3 className="widget-title">
                                    <a data-toggle="collapse" href="#widget-body-6" role="button" aria-expanded="true" aria-controls="widget-body-6">Color</a>
                                </h3>

                                <div className="collapse show" id="widget-body-6">
                                    <div className="widget-body">
                                        <ul className="config-swatch-list">
                                            <li>
                                                <a href="#" style={{backgroundColor: "#4090d5"}}></a>
                                            </li>
                                            <li className="active">
                                                <a href="#"  style={{backgroundColor: "#f5494a"}} ></a>
                                            </li>
                                            <li>
                                                <a href="#" style={{backgroundColor: "#fca309"}}></a>
                                            </li>
                                            <li>
                                                <a href="#" style={{backgroundColor: "#11426b"}}></a>
                                            </li>
                                            <li>
                                                <a href="#" style={{backgroundColor: "#f0f0f0"}}></a>
                                            </li>
                                            <li>
                                                <a href="#" style={{backgroundColor: "#3fd5c9"}}></a>
                                            </li>
                                            <li>
                                                <a href="#" style={{backgroundColor: "#979c1c"}}></a>
                                            </li>
                                            <li>
                                                <a href="#" style={{backgroundColor: "#7d5a3c"}}></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="widget widget-featured">
                                <h3 className="widget-title">Featured Products</h3>
                                
                                <div className="widget-body">
                                    <div className=" widget-featured-products">
                                        {
                                            products.slice(0, 3).map(data=>
                                                <div className="featured-col">
                                                    <div className="product-default left-details product-widget">
                                                        <figure>
                                                            <Link to="/shop/product1">
                                                                <img src={data.image}/>
                                                            </Link>
                                                        </figure>
                                                        <div className="product-details">
                                                            <h2 className="product-title">
                                                                <Link to="/shop/product1">{data.name}</Link>
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
                                                    
                                                </div>
                                            )
                                        }
                                        

                                        
                                    </div>
                                </div>
                            </div>

                            <div className="widget widget-block">
                                <h3 className="widget-title">Custom HTML Block</h3>
                                <h5>This is a custom sub-title.</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur elitad adipiscing Cras non placerat mi. </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <div className="mb-5"></div>
        </main>
  )
}

export default Shop