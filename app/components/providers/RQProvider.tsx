import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface RQProviderProps {
  children: React.ReactNode;
}

const RQProvider: React.FC<RQProviderProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default RQProvider;
