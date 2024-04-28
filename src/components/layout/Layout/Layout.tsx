import { FC, PropsWithChildren } from "react";
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="relative flex flex-col min-h-screen max-container">
      <Navbar />
      <div className="flex-grow flex-1 flex padding-x bg-gray-50">
        {children}
      </div>
      <Footer />
    </main>
  );
};
