'use client';

import { getFilteredPosts } from '@/app/lib/getFilteredPosts';
import { Listing } from '@/app/types';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import ListingGrid from './ListingGrid';

const ListingCard = () => {
  const params = useSearchParams();
  const category = params.get('category') || '';

  const { data: listings } = useQuery<Listing[]>({
    queryKey: ['posts', category],
    queryFn: () => getFilteredPosts(category)
  });

  console.log(listings);
  return (
    <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
      {listings?.map((listing) => {
        return <ListingGrid key={listing.id} data={listing} />;
      })}
    </div>
  );
};

export default ListingCard;
