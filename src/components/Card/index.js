import React from 'react'
import styles from './Card.module.scss'


function Card({title, imageUrl, price, onPlus }){
  const [isAdded, setIsAdded] = React.useState(false);
  
  const onClickPlus = () => {
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  };



  
    return ( 
    <div className={styles.card}>
    <img width={155} height={140} src={imageUrl} alt="Devices" />
    <h5>{title}</h5>
    <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{price} руб</b>
        </div> 
        
        <img className={styles.plus} 
        onClick={onClickPlus} 
        src={isAdded ? '/img/checked.svg' : '/img/plus.svg'} 
        alt="Plus" 
        />
        
        </div>
    </div>
); 
}                      
export default Card;