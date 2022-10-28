function Drawer({ onClose, items = [] }) {
    return (
        <div className="overlay">
        <div className="drawer">
        <h2 className='d-flex justify-between mb-30'>
          Корзина 
        <img onClick={onClose} className='cu-p' src="img/devices/cancel.png" alt="Close" width={30} />
        </h2>

          
          <div className='items'>
              {items.map((obj) => (
          <div className="cartItem d-flex align-center mb-20">
              <div style={{ backgroundImage:`url(${obj.imageUrl})` }}
              className="cartItemImg"
              ></div>
          <img
          className='mr-20' 
          width={100} 
          height={100} 
          src="img/devices/1.jpg" 
          alt="Devices" 
          />
              <div className='mr-20 flex'>
              <p className='mb-5'>{obj.title}</p>
              <b>{obj.price} руб</b>
              </div>
          <img className='delete' src="img/devices/cancel.png" alt="Delete" width={30} />
            </div>
                ))}
          </div>
          

      <div className="cartTotalBlock">
        <ul>
          <li className='d-flex'>
            <span>Итого:</span>
           <div></div>
          <b>450000руб.</b>
          </li>
        </ul>

      <button>Оформить заказ</button>
      </div>
    </div>
    </div>
); 
}
export default Drawer;