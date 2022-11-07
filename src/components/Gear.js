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
  let prdData = {}
  let count = 0


    const[item,setItem] = React.useState({
        currentProducts: products.slice(0,9),
        currentPage: null,
        totalPages: null,
        totalItems: 0,
        view: "grid",
        cart:0
      })

// const [cart,setCart] = React.useState(0)

// function addCart(id){
//     setItem(prevCart => {
//       return prevCart.currentProducts.map((prd)=> {
//         return prd.id==id ? {...CardProductGrid}:CardProductGrid
//       })  
//     })

//       // props.countHandle(item.cart)
//  }

// function addCart(id){
//   {console.log(id)}
//   setItem(prevCart => {
//     return prevCart.currentProducts.map((prd) => {
//       return prd.id===id && props.countHandle(prd)
//     })
//       })

//     }

    // function addCart(id){
    //   {console.log(id)}
    //   setItem(prevCart => {
    //           prevCart
             
    //         //  return prevCart.currentProducts.map((prd) => {prd}
    //         //     //  return prd.id===id ? {...prevCart.currentProducts}:prevCart
    //         //     //     // {props.countHandle(item)}   
            
    //       })
    //     }

     function addCart(id){
      console.log(id)
      if (item.id === id){
        console.log(item.name)

      }
      return setItem(item)
         
            }
    


    // props.countHandle(item.cart)
 


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
                                  <CardProductGrid data={product} addCart={() => addCart(product.id)}/>
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