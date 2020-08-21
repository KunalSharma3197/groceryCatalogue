import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';
import {addToCart} from "../store/cartactions/CartActions";
 
 
class ProductList extends Component
{
    addToCart = (product) => {
        this.props.addToCart(product);
    }
 
    render() {
        return (
            <div className="container">
                <br /><br /><br />
                <h1 class="text-center text-danger"><strong>MEGA Weekend Sale is here!!!!</strong></h1>
                <br/>
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="https://st2.depositphotos.com/7341970/11081/v/950/depositphotos_110819808-stock-illustration-grocery-shopping-discount-banner.jpg" width="1200" height="700"/>
                    </div>

                <div class="item">
                    <img src="https://image.freepik.com/free-psd/fresh-healthy-grocery-sale-banner_120329-261.jpg" width="1200" height="700" />
                </div>

                <div class="item">
                    <img src="https://image.freepik.com/free-psd/american-food-banner-template-design_23-2148473300.jpg" alt="Los Angeles" width="1200" height="700" />
                </div>
            </div>

                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div> 
            <br></br><br></br>
                <div className="row">
 
                    {
                        this.props.products.map(product => <Product product={product} addToCart={this.addToCart} inCart={this.props.cart.length>0 && this.props.cart.filter(e => e.product.id === product.id).length > 0 } key={product.id} /> )
                    }
 
                </div>
            </div>
        )
    }
}
 
const mapStateToProps = (state) => {
 
    return {
        products: state.product.products,
        cart: state.cart.cart
    }
};
 
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => {
            dispatch(addToCart(product));
        }
    }
};
 
 
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)