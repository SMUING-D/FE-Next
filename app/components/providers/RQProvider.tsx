import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface RQProviderProps {
  children: React.ReactNode;
}

const RQProvider: React.FC<RQProviderProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'} />
    </QueryClientProvider>
  );
};

export default RQProvider;
