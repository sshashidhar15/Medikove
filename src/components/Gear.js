import React from "react"
import { lazy} from "react";
import { data } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CardProductGrid from "./card/CardProductGrid"

import FilterCategory from "./card/FilterCategory"
import { PersonPlus } from "react-bootstrap-icons";
import Cart from "./cart/Cart";


    
function Gear(props)
{

  let products = data.products;

    const[item,setItem] = React.useState({
        currentProducts: products.slice(0,9),
        currentPage: null,
        totalPages: null,
        totalItems: 0,
        view: "grid",
      })

const [cart,setCart] = React.useState(0)

function add(){
    setCart(prevCart => prevCart + 1)
    {props.countHandle(cart,products)}
 }
 
  console.log(item.currentProducts)

    return (   
                <React.Fragment>
                  {/* <div
                    className="p-5 bg-primary bs-cover"
                    style={{
                      backgroundImage: "url(../components/images/hero.png)",
                    }}>                    
                  </div> */}
  
                  <div >
                    <div className="row">
                      <div className="col-md-3">
                        <FilterCategory />   
                      </div>
                    
                    
                      <div className="col-md-9">
                        
                        <div className="row mt-4">
                          {item.view === "grid" &&
                            item.currentProducts.map((product, idx) => {
                              return (
                                <div key={idx} className="col-md-3">
                                  <CardProductGrid data={product} addCart={add}/>
                                 </div>
                              );
                            
                            })}
                           
                        </div>
                     
                      </div>
                    </div>
                    
                  </div>
                </React.Fragment>
              )
}     

export default Gear