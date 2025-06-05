import { useState } from 'react'
import './header.css'
import { FaShoppingCart } from "react-icons/fa";
import './carList'

type Car = {
  id: number;
  make: string;
  name: string;
  img: string;
  disc: string;
  price: string;
};

type HeaderProps = {
  favoriteCars: Car[];
};

export default function Header ({favoriteCars }: HeaderProps){

    const [isOpen, setIsOpen] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    
    return(
        <header>
            <div className='header'>
                <div>
                    <span className="logo">Ývris</span>
                </div>
                <div className='wrapper-nav'>
                    <nav className={`header__nav ${isOpen? 'active' : ''}`}>
                        <ul className='header__nav-list'>
                            <li><a href="">О нас</a> </li>
                            <li><a href="">Контакты</a> </li>
                            <li><a href="">Кабинет</a> </li>
                        </ul>
                    </nav>
                    <button onClick={()=> setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen? 'active' : ''}`}>
                        <FaShoppingCart />
                    </button>
                    <div className='burger' onClick={()=>setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    
                </div>
                {cartOpen && (

                        <div className='shop-cart'>
                            {favoriteCars.length ===0 ? (
                                <div className='emty-car'>
                                    <p >избранных машин нет</p>
                                </div>
                            ) : 
                            (
                                <>
                                {favoriteCars.map(car =>(
                                <div key={car.id} className='car-shop-wrapper'>
                                    <div>
                                        <img className='car-shop-img' src={car.img} alt="" />
                                    </div>
                                    
                                    <div>
                                        <div className='car-shop-name-price'>
                                        <h4>{car.make} {car.name}</h4>
                                        <b>{car.price}</b>
                                    </div>
                                    </div>

                                    

                                </div>
                                
                            ))}
                            </>
                            )}


                            
                            <div className='main-car-shop-button-wrapper'>
                                <button className='main-car-shop-button'>заказать</button>
                            </div>
                            
                        </div>
                    )}
                
            </div>
            <div>
                <div className="presentation"></div>
            </div>
            
        </header>
    )
}



                 


        // <header>
        //     <div className='navbar'>
        //         <span className="logo">Ývris</span>
                
        //         <nav className={`header__nav ${isOpen? 'active' : ''}`}>
        //             <ul className='header__nav-list'>
        //                 <li><a href="">О нас</a> </li>
        //                 <li><a href="">Контакты</a> </li>
        //                 <li><a href="">Кабинет</a> </li>
        //             </ul>
        //         </nav>
        //         <button className='shop-cart-button'>
        //             <FaShoppingCart />
        //         </button>    
        //         <div className='burger' onClick={()=>setIsOpen(!isOpen)}>
        //             <span></span>
        //             <span></span>
        //             <span></span>
        //         </div>
                
        //     </div>
        //     <div className="presentation"></div>
        // </header>