


import React, { useContext, useEffect } from 'react';

import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';

import { Link, useLocation } from 'react-router-dom';
import './Cart_Bar_Styling.css';
import { IconContext } from 'react-icons';
import Cart_Item from './Cart_Item';
import { CartContext } from '../App';

function Cart_Bar(props) {

  const location = useLocation();
  useEffect(()=>
  {
    // alert("Called")

  },[])
  const {data} = useContext(CartContext); 
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className={props.show ? 'cart_menu active' : 'cart_menu'} style={{zIndex:"99"}} onMouseLeave={props.leave} >
          <ul className='cart_menu-items' >
            <li className='cart_bar-toggle'>
              <Link to='#' className='cart_bars'>
                <AiIcons.AiOutlineClose onClick={props.click} />
              </Link>
              <Link to='/cart' className='cart_bars'>
                <GiIcons.GiCash onClick={props.click} />
              </Link>
              
              {/* <button style={{marginLeft:"10%"}} className="btn btn-primary">To Check Out </button> */}
            
            </li>
            
            {
              data.map((item,index)=> {

                if(item.qty>0)                
                return(
                    
                  <div key={item.id} >
                  <div style={{color:"white"}}>
                  <Cart_Item key={item.id} name={item.name} identity={item.id} imgSrc={item.imgSrc} qty={item.qty} />
                  </div>

                  </div>
                )
              })
              
              }
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Cart_Bar;