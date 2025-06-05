import { useEffect, useState } from 'react';
import './car.css';
import CarCard from './carCard';

type Car = {
  id: number;
  make: string;
  name: string;
  img: string;
  disc: string;
  price: string;
};

type CarListProps = {
  cars: Car[];
  favorites:number[];
  toggleFavorite: (id:number)=>void;
}


function useDebouncedValue (value: string, delay: number): string{
  const [debouncedValue, setDebauncedValue] = useState(value)

  useEffect(()=>{
    const timeout = setTimeout(()=>{
      setDebauncedValue(value)
    }, delay)
    return () => clearTimeout(timeout)
  }, [value, delay])
  return debouncedValue
}



export default function CarList({cars, favorites, toggleFavorite} : CarListProps) {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebouncedValue(query, 600)

  const filterCard = cars.filter(car => car.name.toLowerCase().includes(debouncedQuery.toLowerCase()))



  return (
    <main >
      <div>
        <input 
        type="text"
        placeholder='Поиск'
        value={query}
        onChange={(e) => setQuery(e.target.value)} 
        />
      </div>
      <div className='car-list'>
        {filterCard.length ? (
          filterCard.map(car => (
            <CarCard
              key={car.id}
              car={car}
              isFavorite={favorites.includes(car.id)}
              onToggleFavorite={() => toggleFavorite(car.id)}
            />
          ))
        ) :(
          <p>ничего не найдено</p>
        )}
      </div>

    </main>
  );
}



      // <div className='car-list'>
      //         {cars.map((car) => (
      //   <CarCard
      //     key={car.id}
      //     car={car}
      //     isFavorite={favorites.includes(car.id)}
      //     onToggleFavorite={() => toggleFavorite(car.id)}
      //   />
      // ))}
      // </div>


  // const toggleFavorite = (id: number) => {
  //   setFavorites((prev) =>
  //     prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
  //   );
  // };