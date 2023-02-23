import '../styles/Categories.css'

function Categories({categories,currentCateg,updateCateg}){
  //const selectElmt = document.getElementById("categorie-select")
  //updateCateg(selectElmt.options[selectElmt.selectedIndex].value)

  return (
    <div className='lmj-categories'>
    <select className="lmj-categories-select" value={currentCateg} onChange={(e) => updateCateg(e.target.value)}>
    <option value=''>--Choisir une catégorie--</option>
    {categories.map((cat) => (
      <option key={cat} value={cat} >{cat}</option>
    ))}
    </select>

    <button onClick={() => updateCateg('')}>Réinitialiser</button>

    </div>

  )

}

export default Categories
