import { Provider } from "react-redux";
import React, { useRef } from "react";
import { Persistor } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store, { RootState, AppDispatch, persistor } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface StoreProviderProps {
  children: React.ReactNode;
}

const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const storeRef = useRef(store);
  const persistorRef = useRef<Persistor>(persistor);
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={storeRef.current}>
        <PersistGate loading={null} persistor={persistorRef.current}>
          {children}
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default StoreProvider;
export type { RootState, AppDispatch };
