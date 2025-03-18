import React from "react";
import { IoIosPeople } from "react-icons/io";
import { PiBuildingApartmentFill } from "react-icons/pi";
import { CardType } from "../../types";
import { GrTransaction } from "react-icons/gr";
import { FaTasks } from "react-icons/fa";

const Home: React.FC = () => {


  const cards: CardType[] = [
    {
      description: "Total Users",
      icon: <IoIosPeople className="text-2xl text-primary" />,
      number: 162
    },
    {
      description: "Total Companies",
      icon: <PiBuildingApartmentFill className="text-2xl text-primary" />,
      number: 43
    },
    {
      description: "Total Transactions",
      icon: <GrTransaction className="text-2xl text-primary" />,
      number: 6423
    },
    {
      description: "Total Tasks",
      icon: <FaTasks  className="text-2xl text-primary" />,
      number: 89
    }
  ];
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-300"
          >
            <div className="flex justify-between">
              <div className="lg:text-xl font-semibold ml-2">
                {card.description}
              </div>
                <div className="flex items-center">
                {card.icon}
                </div>
            </div>
            <div className="font-bold ml-3">{card.number}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
