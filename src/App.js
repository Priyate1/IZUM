import './App.scss';
import React from 'react';
import Card from './components/Card/';
import Drawer from './components/Drawer';
import Header from './components/Header';





function App() {
  const [Items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://635a6f7b38725a1746c60da0.mockapi.io/items')
  .then(res => {
    return res.json();
  })
  .then(json=> {
    setItems(json);
  });
  }, []); 
  
  const onAddToCart = (obj) => {
    setCartItems(prev=> [...prev, obj]);
  };





  return ( 
<div className="wrapper clear">
  {cartOpened &&<Drawer items={cartItems} onClose= {() => setCartOpened(false)} />} 
  <Header onClickCart ={() => setCartOpened(true)} />
  <div className='content p-40'>

    <div className='d-flex align-center justify-between mb-40'>
      <h1> Все Аппараты</h1>
          <div className='search-block d-flex'>
            <img className='m-auto' src="img/search.png" alt="Search" width={38} height={38} />
            <input placeholder='Поиск..' type="text" />
          </div>
    </div>

 
        <div className='d-flex flex-wrap'>
              {Items.map((item) =>(
                <Card title={item.title} 
                price={item.price} 
                imageUrl={item.imageUrl}   
                onPlus={(obj) => onAddToCart(obj) }     
                />
              ))}
        </div>
    </div> 
  </div>
  
);
}
export default App;
