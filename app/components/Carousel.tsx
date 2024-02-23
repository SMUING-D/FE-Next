'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

import { POST_DTO } from '../types';

const defaultImg =
  'https://images.unsplash.com/photo-1515041219749-89347f83291a?q=80&w=2274&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

type CarouselProps = {
  popularPosts: POST_DTO[];
};

const Carousel = ({ popularPosts }: CarouselProps) => {
  const router = useRouter();
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
        className="flex flex-row w-full h-full overflow-y-hidden overflow-x-scroll scroll whitespace-nowrap scroll-smooth"
      >
        {popularPosts &&
          popularPosts.map((postData) => (
            <div
              key={postData?.id}
              className="relative w-56 h-52"
              onClick={() => router.push(`/post/study/${postData?.id}`)}
            >
              <Image
                className="rounded-xl inline-block p-2 cursor-pointer hover:scale hover:scale-95 ease-in-out duration-300"
                src={postData?.postImage ? postData?.postImage : defaultImg}
                alt=""
                fill
                objectFit="cover"
              />
            </div>
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
