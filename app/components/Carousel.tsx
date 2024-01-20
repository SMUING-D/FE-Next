'use client';

import Image from 'next/image';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const data = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    img: 'https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 6,
    img: 'https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }
];

const Carousel = () => {
  const slideLeft = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };
  return (
    <div className="flex items-center">
      <MdChevronLeft
        size={40}
        onClick={slideLeft}
        className="text-blue-400 cursor-pointer hover:scale-110"
      />
      <div
        id="slider"
        className="w-full h-full overflow-y-hidden overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
      >
        {data.map((item) => (
          <Image
            width={220}
            height={220}
            key={item.id}
            className="rounded-xl inline-block p-2 cursor-pointer hover:scale hover:scale-95 ease-in-out duration-300"
            src={item.img}
            alt=""
          />
        ))}
      </div>
      <MdChevronRight
        size={40}
        onClick={slideRight}
        className="text-blue-400 cursor-pointer hover:scale-110"
      />
    </div>
  );
};

export default Carousel;
