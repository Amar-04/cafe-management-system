import React from "react";

const MenuCard = ({ image, title, description, price }) => {
  return (
    <div className="flex items-center px-2 py-4 mb-4">
      <img src={image} alt={title} className="w-24 h-36 rounded-md" />
      <div className="ml-4 flex-grow flex items-start justify-between flex-col h-full">
        <h3 className="text-sm font-bold text-[#834D1E]">{title}</h3>
        <p className="text-xs text-[#834D1E]">{description}</p>
        <p className="mt-2 text-md font-bold text-[#834D1E]">{price}</p>
      </div>
      <button className="ml-4 px-2 bg-[#834D1E] text-white rounded-md">
        +
      </button>
    </div>
  );
};

const DrinkMenu = () => {
  const items = [
    {
      image: './americano.jpg',
      title: 'Iced Americano',
      description: 'Double espresso and water, served cold',
      price: 'Rp 20.000',
    },
    {
      image: 'https://placehold.co/80x140',
      title: 'Iced Coffee Sweet Heaven',
      description: 'Double espresso with condensed milk, served cold',
      price: 'Rp 24.000',
    },
    {
      image: 'https://placehold.co/80x140',
      title: 'Hot Cappuccino',
      description: 'Double espresso and fresh milk, served hot',
      price: 'Rp 23.000',
    },
  ];

  return (
    <>
      <div className="text-center mb-4">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <button
            type="button"
            className="px-2 py-1 text-sm font-bold text-[#834D1E] bg-[#FCF2D9] border border-[#834D1E] rounded-s-lg hover:bg-[#47201C] hover:text-[#FCF2D9]"
          >
           Cold Coffees
          </button>
          <button
            type="button"
            className="px-2 py-1 text-sm font-bold text-[#834D1E] bg-[#FCF2D9] border-t border-b border-[#834D1E] hover:bg-[#47201C] hover:text-[#FCF2D9]"
          >
            Hot Coffees
          </button>
          <button
            type="button"
            className="px-2 py-1 text-sm font-bold text-[#834D1E] bg-[#FCF2D9] border border-[#834D1E] rounded-e-lg hover:bg-[#47201C] hover:text-[#FCF2D9]"
          >
            Mojitos
          </button>
        </div>
      </div>

      <div className="rounded-t-3xl border-2 border-[#834D1E] bg-[#FCF2D9] p-4">
        
        {items.map((item, index) => (
          <MenuCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default DrinkMenu;
