import React from 'react'

const Menu = () => {

    const items = [
        {
            id: 1,
            title: "Cold Coffees",
            imageUrl: "cold-coffee.jpg"
        },
        {
            id: 2,
            title: "Hot Coffees",
            imageUrl: "cappuccino.jpg"
        },
        {
            id: 3,
            title: "Mojitos",
            imageUrl: "mojito.jpg"
        },
        {
            id: 4,
            title: "Pizza",
            imageUrl: "pizza.jpg"
        },
        {
            id: 5,
            title: "Burger",
            imageUrl: "burger.jpg"
        },
        {
            id: 6,
            title: "Fries",
            imageUrl: "fries.jpg"
        },
    ]

  return (
    <div className='max-w-md mx-auto p-4 text-[#834D1E] pb-20'>
        <h3 className='text-lg font-bold'>Dive Into Our Delicious Offerings</h3>
        <p className='text-md font-medium'>Explore, indulge, and enjoy!</p>

        <div className='grid grid-cols-2 md:grid-cols-2 gap-2 mt-4'>
        {items.map((item) => (
          <div key={item.id} className="relative h-56">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full object-cover h-full rounded-2xl"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#8a5333cd] to-transparent text-[#F8E3B6] p-2 rounded-2xl">
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}

export default Menu