import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconStarFill } from "bootstrap-icons/icons/star-fill.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header"

function CardProductGrid(props) {

  const product = props.data
  console.log(product.price)

  

  return(
  <div className="card h-100">
 
  
      <img src={product.img}  className="card-img-top" alt="..." / >
      <div className="card-body">
        <h6 className="card-subtitle mb-2">
          <Link to={product.link} className="text-decoration-none">
            {product.name}
          </Link>
        </h6>
        <div className="my-2">
          <span className="fw-bold h5">Rs {product.price}</span>
          {product.originPrice > 0 && (
            <del className="small text-muted ms-2">{product.originPrice}</del>
          )}
          <br>
          </br>
          <span className="ms-2">
            {Array.from({ length: product.star }, (_, key) => (
              <IconStarFill className="text-warning me-1" key={key} />
            ))}
          </span>
        </div>
        <div className="btn-group  ms-8" role="group">
          <button
            type="button"
            className="btn btn-sm btn-primary"
            title="Add to cart"
            onClick={props.addCart}>
          
          
            
            <FontAwesomeIcon icon={faCartPlus}/>

            Add to Cart
          </button>
       

        </div>
      </div>
    </div>
  );

} 
export default CardProductGrid