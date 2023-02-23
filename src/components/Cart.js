import '../styles/cart.css'
import { useState } from 'react'

function Cart({cart, updateCart,currentCateg, updateCateg}) {

  const [isOpen, setIsOpen] = useState(true)
  const total = cart.reduce(
      (acc, plantType) => acc +plantType.amount * plantType.price,0
  )




  return isOpen ? (
    <div className='cart' >
        <div className='cart-header'>
          <a className='close-button' onClick={() => setIsOpen(false)}><i class="uil uil-minus-square-full close"></i></a>
        </div>

        <div className='cart-content'>
          <h2>Panier</h2>
          {cart.map(({name, price, amount}, index) =>(
            <div key={`${name}-${index}`} >
              {name} {price}€ x {amount}
            </div>
          ) )}

          <h3>Total : {total}€</h3>
          <a className='btn-vider' onClick={() => updateCart([])}> <i class="uil uil-trash-alt trash"></i></a>
        </div>

    </div>

  ) : (
    <div className='cart-closed'>
        <div className='cart-header'>
          <a className='open-button'  onClick={() => setIsOpen(true)}> <i class="uil uil-shopping-bag open"></i></a>
        </div>
    </div>
    )

}

export default Cart
