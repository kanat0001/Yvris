import './car.css'
import { IoMdClose } from "react-icons/io";
import { GoPlus } from "react-icons/go";
// import { useState } from 'react';
// import CarSearch from './carSearch'

type Car = {
  id: number;
  make: string;
  name: string;
  img: string;
  disc: string;
  price: string;
};

type CarCardProps = {
  car: Car;
  isFavorite: boolean;
  onToggleFavorite: () => void;
};






export default function CarCard({ car, isFavorite, onToggleFavorite }: CarCardProps) {
  return (
    <div className='car-card'>
      <img className='car-img' src={car.img} alt="" />

        <h2 className='car-name'>{car.name}</h2>

      <p className='car-disc'>{car.disc}</p>
      <div className='block-buy'>
        <b className='car-price'>{car.price}$</b>
        <button onClick={onToggleFavorite} className='car-button'>
          {isFavorite? <IoMdClose style={{color: 'white', fontSize: '24px', fontWeight: 'bold'}}/> :   <GoPlus style={{color: 'white', fontSize: '26px', fontWeight: 'bold'}}/>}
        </button>
      </div>
    </div>
  );
}
