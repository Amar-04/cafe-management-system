import React from "react";

const TopPicks = () => {
  const topPicks = [
    {
      id: 1,
      title: "Iced Americano",
      price: "$4.50",
      imageUrl: "americano.jpg",
    },
    {
      id: 2,
      title: "Cappuccino",
      price: "$3.75",
      imageUrl: "cappuccino.jpg",
    },
  ];

  return (
    <div className="max-w-md mx-auto text-[#834D1E] p-4">
      <h2 className="text-lg font-semibold">Top Picks Just for You:</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-4">
        {topPicks.map((item) => (
          <div key={item.id} className="relative h-64">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full object-cover h-full rounded-2xl"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#8a5333da] to-transparent text-[#F8E3B6] p-2 rounded-2xl">
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicks;
