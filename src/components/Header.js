function Header(props) {

    return (
        <header className='d-flex justify-between align-center'>
        <div className ="d-flex align-center">
           <img src='/img/emblem.png' width={110} height={70} /> 
              <div> 
                  <h3 className='text-uppercase'>IZUM</h3>
                  <p className='opacity-5'>. . . .</p>
              </div>
       </div>
    
       <div className='us'>О нас</div>
    
    
    
          <ul className="d-flex">
            <li className='mr-30 cu-p'>
                <img width={30} height={30} src = "/img/profile.png"></img>
            </li>
            <li onClick={props.onClickCart} className="cu-p">
                <img width={30} height={30} src="/img/cart.png"/>
            </li>
          </ul>
          </header>
    );
}

export default Header;