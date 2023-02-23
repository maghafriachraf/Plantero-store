import '../styles/App.css';
import logo from '../assets/logo.png'
import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import '../styles/Layout.css'
import {useState, useEffect} from 'react'




function App() {

  const stockage=JSON.parse(localStorage.getItem('panier'))
  const [cart, updateCart] = useState(stockage ? stockage : [] )

  const [currentCateg, updateCateg] = useState('')


  useEffect(() => {
    localStorage.setItem('panier', JSON.stringify(cart))
  },[cart])


      return (
          <div>

            <Banner logo={logo}/>
              <div className='lmj-layout-inner'>
                    <Cart cart={cart} updateCart={updateCart} currentCateg={currentCateg} updateCateg={updateCateg} />
				            <ShoppingList cart={cart} updateCart={updateCart} currentCateg={currentCateg} updateCateg={updateCateg} />

              </div>

            <Footer />

          </div>
     )
}

export default App;
