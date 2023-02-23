import CareScale from './CareScale'
import '../styles/PlantItem.css';




function PlantItem({cover,name,light,water,id,price}){
  return (
    <div>
          <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}  >
            <img src={cover} alt={`${name} cover`} className='lmj-plant-item-cover' />
            {name}
            <div className='lmj-price'>
            {price}€
            </div>
            <div>
            <CareScale careType='light' scaleValue={light}/>
            <CareScale careType='water' scaleValue={water} /*onClick={() => handleWater(water)}*//>
            </div>


            </li>
      </div>
  )

  function handleClick(plantName){
    alert(`Vous voulez acheter 1 ${plantName} , bon choix 🎈`)
  }

}

export default PlantItem
