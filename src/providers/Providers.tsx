"use client";

import UserProvider from "@/context/UserContext";
import { Toaster } from "sonner";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <Toaster position="top-center" richColors />
      {children}
    </UserProvider>
  );
};

export default Providers;
