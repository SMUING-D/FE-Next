import usePostReportModal from '@/app/hooks/usePostReportModal';
import reportPost from '@/app/lib/post/reportPost';
import { allowScroll, preventScroll } from '@/app/utils/scroll';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import Heading from '../Heading';
import Modal from './Modal';

type PostDeleteModalProps = {
  postId: string;
};

const PostReportModal = ({ postId }: PostDeleteModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const postReportModal = usePostReportModal();

  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, []);

  const onRevoke = async () => {
    try {
      setIsLoading(true);
      await reportPost(parseInt(postId));
      toast('게시글이 신고되었습니다.');
      postReportModal.onClose();
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const cancelRevoke = () => {
    toast('취소되었습니다.');
    postReportModal.onClose();
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="해당 게시글을 신고할까요?" />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={postReportModal.isOpen}
      onClose={postReportModal.onClose}
      onSubmit={onRevoke}
      title="게시글 신고하기"
      actionLabel="신고"
      body={bodyContent}
      secondaryAction={cancelRevoke}
      secondaryActionLabel="취소"
    />
  );
};

export default PostReportModal;
