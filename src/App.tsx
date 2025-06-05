import { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import CarList from './components/carList'
import {cars} from './data/cars';
import './App.css'

export default function App() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  const favoriteCars = cars.filter((car) => favorites.includes(car.id));




  return (
    <div className="wrapper">
      <Header favoriteCars={favoriteCars} />
      <CarList cars={cars} favorites={favorites} toggleFavorite={toggleFavorite} />
      <Footer />
    </div>
  );
}
