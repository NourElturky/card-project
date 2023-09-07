import Image from 'next/image'
import { Inter } from 'next/font/google'
import Card from './Card'
import { useState } from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [cards, setCards] = useState([
    { title: 'Sodic', address:"Mountain View iCity New Cairo"
    , price:40000000 ,payment:5000000,month:7,bedroom:2,bathroom:4,area:250 ,uaddress:" Ayla Jefaira, North Coast, Matrouh Governorate" },
    
  ]);


  return (

     <div>

      {cards.map((card, index) => (
        <Card key={index} title={card.title} address={card.address}  price={card.price} payment={card.payment} month={card.month} bedroom={card.bedroom} bathroom={card.bathroom}  area={card.area} uaddress={card.uaddress}  />
      ))}
    </div>

  );
}
