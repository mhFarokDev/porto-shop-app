import React from 'react'
import { Link } from 'react-router-dom'
import banner1 from '../../assets/images/banners/banner-1.jpg'
import banner2 from '../../assets/images/banners/banner-2.jpg'
import banner3 from '../../assets/images/banners/banner-3.jpg'
import banner4 from '../../assets/images/banners/banner-4.jpg'
import banner5 from '../../assets/images/banners/banner-5.jpg'
import banner6 from '../../assets/images/banners/banner-6.jpg'
import banner7 from '../../assets/images/banners/banner-7.jpg'
import banner8 from '../../assets/images/banners/banner-8.jpg'
import banner9 from '../../assets/images/banners/banner-9.jpg'



import product1 from '../../assets/images/products/product-1.jpg'

const Home = ({products}) => {
  return (
    <main className="main">
            <div className="home-top-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="home-slider owl-carousel owl-carousel-lazy">
                                <div className="home-slide">
                                    <div className="owl-lazy slide-bg" ></div>
                                    <div className="home-slide-content text-white">
                                        <h3>Get up to <span>60%</span> off</h3>
                                        <h1>Summer Sale</h1>
                                        <p>Limited items available at this price.</p>
                                        <a href="category.html" className="btn btn-dark">Shop Now</a>
                                    </div>
                                </div>

                                <div className="home-slide">
                                    <div className="owl-lazy slide-bg" ></div>
                                    <div className="home-slide-content">
                                        <h3>OVER <span>200+</span></h3>
                                        <h1>GREAT DEALS</h1>
                                        <p>While they last!</p>
                                        <a href="category.html" className="btn btn-dark">Shop Now</a>
                                    </div>
                                </div> 

                                <div className="home-slide">
                                    <div className="owl-lazy slide-bg" ></div>
                                    <div className="home-slide-content">
                                        <h3>up to <span>40%</span> off</h3>
                                        <h1>NEW ARRIVALS</h1>
                                        <p>Starting at $9</p>
                                        <a href="category.html" className="btn btn-dark">Shop Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 order-lg-first">
                            <div className="side-custom-menu">
                                <h2>TOP CATEGORIES</h2>

                                <div className="side-menu-body">
                                    <ul>
                                        <li><a href="#"><i className="icon-cat-shirt"></i>Fashion</a></li>
                                        <li><a href="#"><i className="icon-cat-computer"></i>Electronics</a></li>
                                        <li><a href="#"><i className="icon-cat-gift"></i>Gifts</a></li>
                                        <li><a href="#"><i className="icon-cat-couch"></i>Home  Garden</a></li>
                                        <li><a href="#"><i className="icon-cat-computer"></i>Music</a></li>
                                        <li><a href="#"><i className="icon-cat-sport"></i>Sports</a></li>
                                    </ul>

                                    <a href="#" className="btn btn-block btn-primary">HUGE SALE - <strong>70%</strong> Off</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="info-boxes-container">
                <div className="container">
                    <div className="info-box">
                        <i className="icon-shipping"></i>

                        <div className="info-box-content">
                            <h4>FREE SHIPPING  RETURN</h4>
                            <p>Free shipping on all orders over $99.</p>
                        </div>
                    </div>

                    <div className="info-box">
                        <i className="icon-us-dollar"></i>

                        <div className="info-box-content">
                            <h4>MONEY BACK GUARANTEE</h4>
                            <p>100% money back guarantee</p>
                        </div>
                    </div>

                    <div className="info-box">
                        <i className="icon-support"></i>

                        <div className="info-box-content">
                            <h4>ONLINE SUPPORT 24/7</h4>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="banners-group">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="banner banner-image">
                                <a href="#">
                                    <img src={banner1} alt="banner"/>
                                </a>
                            </div>

                            <div className="banner banner-image">
                                <a href="#">
                                    <img src={banner2} alt="banner"/>
                                </a>
                            </div>

                            <div className="banner banner-image">
                                <a href="#">
                                    <img src={banner3} alt="banner"/>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6 order-lg-last">
                            <div className="banner banner-image">
                                <a href="#">
                                    <img src={banner4} alt="banner"/>
                                </a>
                            </div>

                            <div className="banner banner-image">
                                <a href="#">
                                    <img src={banner5} alt="banner"/>
                                </a>
                            </div>

                            <div className="banner banner-image">
                                <a href="#">
                                    <img src={banner6} alt="banner"/>
                                </a>
                            </div>
                        </div>        

                        <div className="col-lg-6">
                            <div className="banner banner-image">
                                <a href="#">
                                    <img src={banner7} alt="banner"/>
                                </a>
                            </div>

                            <div className="banner banner-image">
                                <a href="#">
                                    <img src={banner8} alt="banner"/>
                                </a>
                            </div>

                            <div className="banner banner-image">
                                <a href="#">
                                    <img src={banner9} alt="banner"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-4"></div>

            <section className="featured-section">
                <div className="container">
                    <h2 className="carousel-title">Featured Products</h2>
                    <div className="product-intro  owl-theme d-flex justify-content-between">



                        {
                            products.slice(0, 4).map(data=>
                                
                                <div className="product-default">
                            <figure>
                                <Link to={`/shop/${data.slug}`}>
                                    <img src={data.image} style={{width:'250px', height:'250px', objectFit:'cover'}}/>
                                </Link>
                            </figure>
                            <div className="product-details">
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{width:'100%'}}></span>
                                        <span className="tooltiptext tooltip-top"></span>
                                    </div>
                                </div>
                                <h2 className="product-title">
                                    <Link to={`/shop/${data.slug}`}>{(data.name).slice(0, 16)}...</Link>
                                </h2>
                                <div className="price-box">
                                    <span className="product-price">{data.sellPrice}&#2547;</span>
                                </div>
                                <div className="product-action">
                                    <Link  to={`/shop/${data.slug}`} className="btn-icon-wish"><i className="icon-heart"></i></Link>
                                    <button className="btn-icon btn-add-cart" ><i className="icon-bag"></i>ADD TO CART</button>
                                    <Link  to={`/shop/${data.slug}`} className="btn-quickview" title="Quick View"><i className="fas fa-external-link-alt"></i></Link> 
                                </div>
                            </div>
                        </div>
                                
                                )
                        }
                        


                    </div>
                </div>
            </section>
        </main>
  )
}

export default Home