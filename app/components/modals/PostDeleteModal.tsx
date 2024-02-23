import usePostDeleteModal from '@/app/hooks/usePostDeleteModal';
import deletePost from '@/app/lib/post/deletePost';
import { allowScroll, preventScroll } from '@/app/utils/scroll';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import Heading from '../Heading';
import Modal from './Modal';

type PostDeleteModalProps = {
  postId: string;
};

const PostDeleteModal = ({ postId }: PostDeleteModalProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const postDeleteModal = usePostDeleteModal();

  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);

  const onRevoke = async () => {
    try {
      setIsLoading(true);
      const res = await deletePost(parseInt(postId));
      if (res) {
        toast('게시글이 삭제되었습니다.');
        router.back();
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const cancelRevoke = () => {
    toast('취소되었습니다.');
    postDeleteModal.onClose();
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="해당 게시글을 삭제할까요?" />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={postDeleteModal.isOpen}
      onClose={postDeleteModal.onClose}
      onSubmit={onRevoke}
      title="게시글 삭제하기"
      actionLabel="삭제"
      body={bodyContent}
      secondaryAction={cancelRevoke}
      secondaryActionLabel="취소"
    />
  );
};

export default PostDeleteModal;
