import React from "react";
import GymPreisList from '../components/gympreis.list/price-list.component';

export default function Pricing() {

  return (
    <div className="text-white m-3 p-3 bg-opacity-10 backdrop-blur-lg rounded-md bg-black">
        <h1 className="text-center font-mono font-extrabold m-5 text-5xl text-blue-100">Árlista</h1>
        <GymPreisList />
    </div>
);
}
