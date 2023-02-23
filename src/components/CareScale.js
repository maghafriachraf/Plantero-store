import '../datas/plantList'
import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

function handleScale(e,caretype,scaleValue){
  e.stopPropagation();
  const requiert = scaleValue === 3 ? 'beaucoup' : scaleValue === 2 ? 'modérement' : 'peu'
  const type = caretype === 'light' ? `de lumière` : `d'arrosage`
  alert(`Cette plante requiert ${requiert} ${type} 🌱🌱`)
}

function CareScale({careType, scaleValue}){
  const scaleType = careType === 'light' ? <img src={sun} alt='sun'/> : <img src={water} alt='water' />
  const range = [1,2,3]

  return ( <div onClick={(e) => handleScale(e,careType,scaleValue)}>
                {range.map((rangeElem) =>
                        scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
                      )}
           </div>
        )
}

export default CareScale
