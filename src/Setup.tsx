import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./assets/theme/EverydayPay";
import { defaultQueryFn, defaultMutationFn } from "./api/requests";

const generateQueryClient = (baseUrl: string): QueryClient => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: defaultQueryFn(baseUrl),
        refetchOnWindowFocus: false,
      },
      mutations: {
        mutationFn: defaultMutationFn(baseUrl),
        useErrorBoundary: true,
      },
    },
  });

  return queryClient;
};

interface SetupProps {
  baseURL: string;
  children: React.ReactNode;
}
const Setup = ({ baseURL, children }: SetupProps) => {
  const queryClient = generateQueryClient(baseURL);
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </QueryClientProvider>
    </StrictMode>
  );
};

export default Setup;
