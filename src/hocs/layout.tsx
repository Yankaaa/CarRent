import { useRouter } from "next/router";
import { FC, ReactNode, useMemo, useState } from "react";
import Footer from "../components/footer";

import Header from "../components/header";

interface FuncProps {
  children: ReactNode;
}

const Layout: FC<FuncProps> = ({ children }) => {
  return (
    <div className="h-full bg-hero bg-no-repeat bg-cover bg-center bg-fixed w-full bg-[url('../../public/defwr.jpg')]">
      <Header />
      <main className="flex min-h-screen flex-col items-center pt-20">
        {children}
        <Footer></Footer>
      </main>
    </div>
  );
};

export default Layout;
