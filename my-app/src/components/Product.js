import React, { Component } from 'react';
 
class Product extends Component
{
    state = {
        inCart: this.props.inCart
    };
 
    addToCart = (e) => {
 
        e.preventDefault();
 
        this.props.addToCart(this.props.product)
 
        this.setState({
            inCart: true
        })
    }
 
    render() {
 
        const { product } = this.props;
 
        return (
            <div className="col-md-3">
                <div className="row container bg-primary">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                        <p className="text-warning text-left"><strong>OFFER</strong></p>
                    </div>
                    <div className="col-md-6">
                        <p className="text-danger text-right"><strong>Get {product.discount}% off</strong></p>
                    </div>
                </div>

                <figure className="card card-product">
                    <div className="img-wrap">
                        <img className="img-responsive" class="img-thumbnail" src={product.image} />
                    </div>
                    <figcaption className="info-wrap">
                        <h4 className="title" class="list-inline text-primary">{product.title}</h4>
                        <p className="category" class="list-inline text-info">{product.category}</p>
                        <p className="desc" class="list-inline text-info">{product.brand}</p>
                        <p className="availability" class="list-inline text-info">Availabile: {product.availability}</p>
                        <p className="quantity" class="list-inline text-info">{product.quantity}</p>
                        
                    </figcaption>
                    <div className="bottom-wrap">
 
                        {
                            this.state.inCart?(
                                <span className="btn btn-success">Added to cart</span>
                            ) : (
                                <a href="#" onClick={this.addToCart} className="btn btn-sm btn-primary float-right">Add to cart</a>
                            )
                        }
                        
                        <div className="price-wrap h5">
                        <br />
                            <span className="price-new">
                                <h6 class="small list-inline"><del>Rs.{product.price}</del><p class="lead">Rs.{product.price - product.price * product.discount / 100}</p></h6>
                                </span>
                        </div>
                    </div>
                </figure>
            </div>
        )
    }
}
 
export default Product;