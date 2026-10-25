import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function SharedLayout() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-20rem)]">
        <div className="flex flex-col w-full">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
