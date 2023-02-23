import '../styles/Banner.css';

function Banner({logo}) {
    return(
      <div className='banner'>
            <div className='banner-logo'>
                  <img src={logo} alt='plantero' className='logo' />
                  <h1 className='title' >Plantero  </h1> 
                  <h2 className='subtitle' >"the green choice"</h2>
            </div>      
      </div>
      )
}

export default Banner
