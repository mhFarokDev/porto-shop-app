import React from 'react'
import { Link } from 'react-router-dom';

import flgEn from '../../assets/images/flags/en.png'
import flgFr from '../../assets/images/flags/fr.png'
import logo from '../../assets/images/logo.png'
import product1 from '../../assets/images/products/cart/product-1.jpg'
import product2 from '../../assets/images/products/cart/product-2.jpg'
import banner2 from '../../assets/images/menu-banner-2.jpg'
import banner1 from '../../assets/images/menu-banner.jpg'

const Header = () => {
  return (
    <header class="header">
            <div class="header-top">
                <div class="container">
                    <div class="header-left header-dropdowns">
                        <div class="header-dropdown">
                            <a href="#">USD</a>
                            <div class="header-menu">
                                <ul>
                                    <li><a href="#">EUR</a></li>
                                    <li><a href="#">USD</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="header-dropdown">
                            <a href="#"><img src={flgEn} alt="England flag"/>ENGLISH</a>
                            <div class="header-menu">
                                <ul>
                                    <li><a href="#"><img src={flgEn} alt="England flag"/>ENGLISH</a></li>
                                    <li><a href="#"><img src={flgFr} alt="France flag"/>FRENCH</a></li>
                                </ul>
                            </div>
                        </div>

                        <div class="dropdown compare-dropdown">
                            <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                <i class="icon-retweet"></i> Compare (2)
                            </a>

                            <div class="dropdown-menu" >
                                <div class="dropdownmenu-wrapper">
                                    <ul class="compare-products">
                                        <li class="product">
                                            <a href="#" class="btn-remove" title="Remove Product"><i class="icon-cancel"></i></a>
                                            <h4 class="product-title"><a href="product.html">Lady White Top</a></h4>
                                        </li>
                                        <li class="product">
                                            <a href="#" class="btn-remove" title="Remove Product"><i class="icon-cancel"></i></a>
                                            <h4 class="product-title"><a href="product.html">Blue Women Shirt</a></h4>
                                        </li>
                                    </ul>

                                    <div class="compare-actions">
                                        <a href="#" class="action-link">Clear All</a>
                                        <a href="#" class="btn btn-primary">Compare</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="header-right">
                        <p class="welcome-msg">Default welcome msg! </p>

                        <div class="header-dropdown dropdown-expanded">
                            <a href="#">Links</a>
                            <div class="header-menu">
                                <ul>
                                    <li><a href="my-account.html">MY ACCOUNT </a></li>
                                    <li><a href="#">DAILY DEAL</a></li>
                                    <li><a href="#">MY WISHLIST </a></li>
                                    <li><a href="blog.html">BLOG</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                    <li><Link to="/admin" class="login-link">Admin</Link></li>
                                    <li><Link to="/admin" class="login-link">Login</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="header-middle">
                <div class="container">
                    <div class="header-left">
                        <Link to="/" class="logo">
                            <img src={logo} alt="Porto Logo"/>
                        </Link>
                    </div>

                    <div class="header-center">
                        <div class="header-search">
                            <a href="#" class="search-toggle" role="button"><i class="icon-magnifier"></i></a>
                            <form action="#" method="get">
                                <div class="header-search-wrapper">
                                    <input type="search" class="form-control" name="q" id="q" placeholder="Search..." required/>
                                    <div class="select-custom">
                                        <select id="cat" name="cat">
                                            <option value="">All Categories</option>
                                            <option value="4">Fashion</option>
                                            <option value="12">- Women</option>
                                            <option value="13">- Men</option>
                                            <option value="66">- Jewellery</option>
                                            <option value="67">- Kids Fashion</option>
                                            <option value="5">Electronics</option>
                                            <option value="21">- Smart TVs</option>
                                            <option value="22">- Cameras</option>
                                            <option value="63">- Games</option>
                                            <option value="7">Home &amp; Garden</option>
                                            <option value="11">Motors</option>
                                            <option value="31">- Cars and Trucks</option>
                                            <option value="32">- Motorcycles &amp; Powersports</option>
                                            <option value="33">- Parts &amp; Accessories</option>
                                            <option value="34">- Boats</option>
                                            <option value="57">- Auto Tools &amp; Supplies</option>
                                        </select>
                                    </div>
                                    <button class="btn" type="submit"><i class="icon-magnifier"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="header-right">
                        <button class="mobile-menu-toggler" type="button">
                            <i class="icon-menu"></i>
                        </button>
                        <div class="header-contact">
                            <span>Call us now</span>
                            <a href="tel:#"><strong>+123 5678 890</strong></a>
                        </div>

                        <div class="dropdown cart-dropdown">
                            <a href="#" class="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                <span class="cart-count">2</span>
                            </a>

                            <div class="dropdown-menu" >
                                <div class="dropdownmenu-wrapper">
                                    <div class="dropdown-cart-header">
                                        <span>2 Items</span>

                                        <a href="cart.html">View Cart</a>
                                    </div>
                                    <div class="dropdown-cart-products">
                                        <div class="product">
                                            <div class="product-details">
                                                <h4 class="product-title">
                                                    <a href="product.html">Woman Ring</a>
                                                </h4>

                                                <span class="cart-product-info">
                                                    <span class="cart-product-qty">1</span>
                                                    x $99.00
                                                </span>
                                            </div>

                                            <figure class="product-image-container">
                                                <a href="product.html" class="product-image">
                                                    <img src={product1} alt="product"/>
                                                </a>
                                                <a href="#" class="btn-remove" title="Remove Product"><i class="icon-cancel"></i></a>
                                            </figure>
                                        </div>

                                        <div class="product">
                                            <div class="product-details">
                                                <h4 class="product-title">
                                                    <a href="product.html">Woman Necklace</a>
                                                </h4>

                                                <span class="cart-product-info">
                                                    <span class="cart-product-qty">1</span>
                                                    x $35.00
                                                </span>
                                            </div>

                                            <figure class="product-image-container">
                                                <a href="product.html" class="product-image">
                                                    <img src={product2} alt="product"/>
                                                </a>
                                                <a href="#" class="btn-remove" title="Remove Product"><i class="icon-cancel"></i></a>
                                            </figure>
                                        </div>
                                    </div>

                                    <div class="dropdown-cart-total">
                                        <span>Total</span>

                                        <span class="cart-total-price">$134.00</span>
                                    </div>

                                    <div class="dropdown-cart-action">
                                        <a href="checkout-shipping.html" class="btn btn-block">Checkout</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="header-bottom sticky-header">
                <div class="container">
                    <nav class="main-nav">
                        <ul class="menu sf-arrows">
                            <li class="active"><Link to="/">Home</Link></li>
                            <li>
                                <Link to="/shop" class="sf-with-ul">Categories</Link>
                                <div class="megamenu megamenu-fixed-width">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <div class="menu-title">
                                                        <a href="#">Variations 1<span class="tip tip-new">New!</span></a>
                                                    </div>
                                                    <ul>
                                                        <li><a href="category-banner-full-width.html">Fullwidth Banner<span class="tip tip-hot">Hot!</span></a></li>
                                                        <li><a href="category-banner-boxed-slider.html">Boxed Slider Banner</a></li>
                                                        <li><a href="category-banner-boxed-image.html">Boxed Image Banner</a></li>
                                                        <li><a href="category-sidebar-left.html">Left Sidebar</a></li>
                                                        <li><a href="category-sidebar-right.html">Right Sidebar</a></li>
                                                        <li><a href="category-flex-grid.html">Product Flex Grid</a></li>
                                                        <li><a href="category-horizontal-filter1.html">Horizontal Filter1</a></li>
                                                        <li><a href="category-horizontal-filter2.html">Horizontal Filter2</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="menu-title">
                                                        <a href="#">Variations 2</a>
                                                    </div>
                                                    <ul>
                                                        <li><a href="#">Product List Item Types</a></li>
                                                        <li><a href="category-infinite-scroll.html">Ajax Infinite Scroll</a></li>
                                                        <li><a href="category-3col.html">3 Columns Products</a></li>
                                                        <li><a href="category-4col.html">4 Columns Products <span class="tip tip-new">New</span></a></li>
                                                        <li><a href="category-5col.html">5 Columns Products</a></li>
                                                        <li><a href="category-6col.html">6 Columns Products</a></li>
                                                        <li><a href="category-7col.html">7 Columns Products</a></li>
                                                        <li><a href="category-8col.html">8 Columns Products</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="banner">
                                                <a href="#">
                                                    <img src={banner2} alt="Menu banner"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="megamenu-container">
                                <Link to="/shop" class="sf-with-ul">Products</Link>
                                <div class="megamenu">
                                    <div class="row">
                                        <div class="col-lg-8">
                                            <div class="row">
                                                <div class="col-lg-4">
                                                    <div class="menu-title">
                                                        <a href="#">Variations</a>
                                                    </div>
                                                    <ul>
                                                        <li><a href="product.html">Horizontal Thumbnails</a></li>
                                                        <li><a href="product-full-width.html">Vertical Thumbnails<span class="tip tip-hot">Hot!</span></a></li>
                                                        <li><a href="product.html">Inner Zoom</a></li>
                                                        <li><a href="product-addcart-sticky.html">Addtocart Sticky</a></li>
                                                        <li><a href="product-sidebar-left.html">Accordion Tabs</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-lg-4">
                                                    <div class="menu-title">
                                                        <a href="#">Variations</a>
                                                    </div>
                                                    <ul>
                                                        <li><a href="product-sticky-tab.html">Sticky Tabs</a></li>
                                                        <li><a href="product-simple.html">Simple Product</a></li>
                                                        <li><a href="product-sidebar-left.html">With Left Sidebar</a></li>
                                                    </ul>
                                                </div>
                                                <div class="col-lg-4">
                                                    <div class="menu-title">
                                                        <a href="#">Product Layout Types</a>
                                                    </div>
                                                    <ul>
                                                        <li><a href="product.html">Default Layout</a></li>
                                                        <li><a href="product-extended-layout.html">Extended Layout</a></li>
                                                        <li><a href="product-full-width.html">Full Width Layout</a></li>
                                                        <li><a href="product-grid-layout.html">Grid Images Layout</a></li>
                                                        <li><a href="product-sticky-both.html">Sticky Both Side Info<span class="tip tip-hot">Hot!</span></a></li>
                                                        <li><a href="product-sticky-info.html">Sticky Right Side Info</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-4">
                                            <div class="banner">
                                                <a href="#">
                                                    <img src={banner1} alt="Menu banner" class="product-promo"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" class="sf-with-ul">Pages</a>

                                <ul>
                                    <li><a href="cart.html">Shopping Cart</a></li>
                                    <li><a href="#">Checkout</a>
                                        <ul>
                                            <li><a href="checkout-shipping.html">Checkout Shipping</a></li>
                                            <li><a href="checkout-shipping-2.html">Checkout Shipping 2</a></li>
                                            <li><a href="checkout-review.html">Checkout Review</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Dashboard</a>
                                        <ul>
                                            <li><a href="dashboard.html">Dashboard</a></li>
                                            <li><a href="my-account.html">My Account</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="#">Blog</a>
                                        <ul>
                                            <li><a href="blog.html">Blog</a></li>
                                            <li><a href="single.html">Blog Post</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><Link to="/admin" class="login-link">Admin</Link></li>
                                    <li><Link to="/admin" class="login-link">Login</Link></li>
                                    <li><a href="forgot-password.html">Forgot Password</a></li>
                                </ul>
                            </li>
                            <li><a href="#" class="sf-with-ul">Features</a>
                                <ul>
                                    <li><a href="#">Header Types</a></li>
                                    <li><a href="#">Footer Types</a></li>
                                </ul>
                            </li>
                            <li class="float-right"><a href="https://1.envato.market/DdLk5" target="_blank">Buy Porto!</a></li>
                            <li class="float-right"><a href="#">Special Offer!</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
  )
}

export default Header