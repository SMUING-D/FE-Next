'use client';

import Image from 'next/image';

type AvatarProps = {
  src?: string | null | undefined;
};

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full w-[25px] h-[25px]"
      width={50}
      height={50}
      alt="Avatar"
      src={src || '/images/placeholder.jpg'}
    />
  );
};

export default Avatar;
