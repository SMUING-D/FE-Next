'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';
import ImageViewer from 'react-simple-image-viewer';

import { JOB_IMAGE_DTO } from '../types';

type ImageSliderProps = {
  imageList: JOB_IMAGE_DTO[];
  size?: number;
};

const ImageSlider = ({ imageList, size = 200 }: ImageSliderProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const imageLinkList: string[] = imageList.map((item) => item.communityImagePath);

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
      {imageList?.map((images) => (
        <Image
          key={images.communityId}
          className="flex rounded-md"
          src={images.communityImagePath}
          width={size}
          height={size}
          alt="profle"
          onClick={() => openImageViewer(images.communityId)}
        />
      ))}

      {isViewerOpen && imageLinkList && (
        <ImageViewer
          src={imageLinkList}
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
