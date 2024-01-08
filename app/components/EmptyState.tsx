'use client';

import { useRouter } from 'next/navigation';

import Button from './Button';
import Heading from './Heading';

type EmptyState = {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
};

const EmptyState: React.FC<EmptyState> = ({
  title = '카테고리에 해당하는 정보가 없습니다.',
  subtitle = '다른 필터로 변경해주세요!',
  showReset
}) => {
  const router = useRouter();
  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading title={title} subtitle={subtitle} center />
      <div className="w-48 mt-4">
        {!showReset && <Button outline label="홈으로 이동하기" onClick={() => router.push('/')} />}
      </div>
    </div>
  );
};

export default EmptyState;
