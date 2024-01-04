'use client';

import Image from 'next/image';

import Heading from '../Heading';
import StarButton from '../StarButton';

type ListingHeadProps = {
  title: string;
  imageSrc: string;
  id: number;
  category: string;
  currentUser?: string | null;
};

const ListingHeader: React.FC<ListingHeadProps> = ({
  title,
  category,
  imageSrc
  // id,
  // currentUser
}) => {
  return (
    <>
      <Heading title={title} subtitle={category} />
      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <Image alt={`${title} 이미지`} src={imageSrc} fill className="object-cover w-full" />

        {/* <Image alt="Image" src={imageSrc} fill className="object-cover w-full" /> */}
        <div className="absolute top-5 right-5">
          <StarButton />
        </div>
      </div>
    </>
  );
};

export default ListingHeader;
