import { Home } from "@/pages/Home/Home";
import { Layout } from "@/components/layout/Layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "@/components/ui/Toaster";

const queryClient = new QueryClient();

function App() {
  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
      <Toaster />
    </Layout>
  );
}

export default App;
