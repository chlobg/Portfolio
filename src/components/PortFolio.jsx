import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import mongoDB from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

function PortFolio() {
  const cardItem = [
    { id: 1, logo: mongoDB, name: "MongoDB" },
    { id: 2, logo: express, name: "Express" },
    { id: 3, logo: reactjs, name: "ReactJS" },
    { id: 4, logo: nodejs, name: "NodeJS" },
    { id: 5, logo: python, name: "Python" },
    { id: 6, logo: java, name: "Java" },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto px-4 md:px-20 mt-10">
      <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
      <span className="underline font-semibold">Featured Projects</span>

      {/* Grille fluide, sans tailles fixes */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-5">
        {cardItem.map(({ id, logo, name }) => (
          <div
            key={id}
            className="group h-full overflow-hidden rounded-2xl border shadow-lg bg-white"
          >
            {/* wrapper interne qui zoome, la carte reste à taille fixe */}
            <div className="p-4 transition-transform duration-300 group-hover:scale-105">
              <img
                src={logo}
                alt={name}
                className="w-24 h-24 mx-auto rounded-full border object-contain"
              />

              <div className="mt-3">
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
              </div>

              <div className="px-2 mt-4 flex gap-3">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  Source code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PortFolio;
