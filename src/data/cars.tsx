type Car = {
  id: number;    
  make: string;   
  name: string;    
  img: string;      
  disc: string;     
  price: string;    
};
export const cars: Car []= [
    {
        id: 1,
        make: 'Porshe',
        name: 'Porshe 911',
        img: '../../public/img/porshe911.jpg',
        disc: 'Porsche 911 — сочетание мощности, элегантности и точной управляемости.',
        price: '97 500'
    },
    {
        id: 2,
        make: 'Ferrari',
        name: 'Ferrari 488 GTB',
        img: '../../public/img/Ferrari 488 GTB.webp',
        disc: 'Ferrari 488 GTB — взрывная мощь, итальянский стиль и точность в каждой детали.',
        price: '210 000'
    },

    {
        id: 3,
        make: 'Mercedes-Benz',
        name: 'Mercedes-Benz AMG GT',
        img: '../../public/img/mercedes benz amg gt.jpg',
        disc: 'Mercedes-AMG GT — роскошь, скорость и характер настоящего гран туризмо.',
        price: '130 000'
    },
    {
        id: 4,
        make: 'Lamborghini',
        name: 'Lamborghini Huracán',
        img: '../../public/img/lamborghini huracan.jpg',
        disc: 'Lamborghini Huracán — агрессивный дизайн, ревущий двигатель и драйв без компромиссов.',
        price: '200 000'
    },
    {
        id: 5,
        make: 'Pagani',
        name: 'Pagani Huayra',
        img: '../../public/img/pagani huayra.jpg',
        disc: 'Pagani Huayra — эксклюзивный гиперкар с искусством инженерии и роскошью ручной работы.',
        price: '1 500 000'
    },
    {
        id: 6,
        make: 'Bugatti',
        name: 'Bugatti Chiron',
        img: '../../public/img/bugatti-chiron.jpg',
        disc: 'Bugatti Chiron — абсолютный рекорд скорости и инженерного совершенства.',
        price: '3 000 000'
    },
    {
        id: 7,
        make: 'McLaren',
        name: 'McLaren 720S',
        img: '../../public/img/mclaren.webp',
        disc: 'McLaren 720S — ультралёгкий суперкар с невероятной аэродинамикой и мощностью.',
        price: '300 000'
    },
    {
        id: 8,
        make: 'Bentley',
        name: 'Bentley Continental GT',
        img: '../../public/img/bentley continental.avif',
        disc: 'Bentley Continental GT — сочетание безупречной роскоши и мощного двигателя.',
        price: '220 000'
    },
    {
        id: 12,
        make: 'Subaru',
        name: 'Subaru WRX STI',
        img: '../../public/img/subaru wrx sti.jpg',
        disc: 'Subaru WRX STI — легендарный раллийный спорткар с ярким характером и полный привод.',
        price: '40 000'
    }
]
// export default cars;