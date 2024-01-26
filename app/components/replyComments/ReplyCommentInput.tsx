'use client';

// import postReplyComment from '@/app/lib/post/postReplyComment';
import Button from '../Button';

const ReplyCommentInput = ({}) => {
  const postReComment = async () => {
    // const res = await postReplyComment(userId, reComments, postId, commentId);
  };
  return (
    <div className="flex flex-col gap-5 sm:flex-row ml-20">
      <div className="flex w-full items-center justify-center gap-2 h-full p-4 rounded-lg">
        <input
          className="text-sm rounded-md border-2 h-full p-5 flex-1 outline-none"
          placeholder="대댓글을 남겨보세요"
        />
        <div className="w-15">
          <Button onClick={() => postReComment()} label="대댓글 달기" small={true} />
        </div>
      </div>
    </div>
  );
};

export default ReplyCommentInput;
