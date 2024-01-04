import ListingPosts from './ListingPosts';

const PreviewPostsView = () => {
  return (
    <div className="max-w-6xl flex justify-center items-center flex-wrap h-screen gap-4">
      <div className="w-80">
        <div className="flex mb-3 text-lg font-bold text-neutral-100 bg-blue-500 h-12 items-center justify-center rounded-md">
          🔥 HOT 🔥
        </div>
        <ListingPosts category="HOT" />
      </div>
      <div className="w-80">
        <div className="flex mb-3 text-lg font-bold text-neutral-100 bg-blue-500 h-12 items-center justify-center rounded-md">
          경영경제대학
        </div>
        <ListingPosts category="경영경제대학" />
      </div>

      <div className="w-80">
        <div className="flex mb-3 text-lg font-bold text-neutral-100 bg-blue-500 h-12 items-center justify-center rounded-md">
          융합공과대학
        </div>
        <ListingPosts category="융합공과대학" />
      </div>

      <div className="w-80">
        <div className="flex mb-3 text-lg font-bold text-neutral-100 bg-blue-500 h-12 items-center justify-center rounded-md">
          문화예술대학
        </div>
        <ListingPosts category="문화예술대학" />
      </div>

      <div className="w-80">
        <div className="flex mb-3 text-lg font-bold text-neutral-100 bg-blue-500 h-12 items-center justify-center rounded-md">
          사범대학
        </div>
        <ListingPosts category="사범대학" />
      </div>

      <div className="w-80">
        <div className="flex mb-3 text-lg font-bold text-neutral-100 bg-blue-500 h-12 items-center justify-center rounded-md">
          인문사회과학대학
        </div>
        <ListingPosts category="인문사회과학대학" />
      </div>
    </div>
  );
};

export default PreviewPostsView;
