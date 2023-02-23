import {plantList} from '../datas/plantList.js'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import Categories from './Categories'





  function ShoppingList({cart, updateCart, currentCateg, updateCateg}){

    const categories = plantList.reduce(
        (acc,plant) => acc .includes(plant.category) ? acc : acc.concat(plant.category),[])

    function addToCart(name, price){
      const currentPlantAdded = cart.find((plant) => plant.name === name)
      if(currentPlantAdded){
        const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
        )
        updateCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount : currentPlantAdded.amount +1}
        ])
      }
      else
      updateCart([...cart, {name,price,amount :1}])
    }
    return(

      <div className='lmj-shopping-list'>

      <Categories categories={categories} currentCateg={currentCateg} updateCateg={updateCateg} />
            <ul  className='lmj-plant-list'>

                {plantList.map(({ id, cover, name, water, light, price, category }) => (!currentCateg || category===currentCateg) && (
                <div key={id}>
                <PlantItem
                cover={cover}
                name={name}
                water={water}
                light={light}
                price={price}
                />
                <button className='btn-add' onClick={() => addToCart(name,price)} >Ajouter</button>
                </div>

              )
              )}


            </ul>

      </div>
    )
  }

export default ShoppingList
