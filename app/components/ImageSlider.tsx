'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

type ImageSlider = {
  imageList: string[];
  size?: number;
};

const ImageSlider = ({ imageList, size = 200 }: ImageSlider) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <div className="flex flex-row p-2 gap-1 overflow-x-auto scrollbar-hide">
      {imageList?.map((src: string, index: number) => (
        <Image
          key={index}
          className="flex rounded-md"
          src={src}
          width={size}
          height={size}
          alt="profle"
          onClick={() => openImageViewer(index)}
        />
      ))}

      {isViewerOpen && (
        <ImageViewer
          src={imageList}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
        />
      )}
    </div>
  );
};

export default ImageSlider;
