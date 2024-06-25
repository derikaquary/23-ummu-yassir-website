import Header from "@/app/_components/Header";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import bg1 from "@/public/bg1.jpg";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";

console.log(montserrat);

export const metadata = {
  title: {
    template: "%s / Ummu Yasir",
    default: "Welcome / WUY",
  },
  description:
    " a homemade and fresh igredients, giving the taste of true indonesian cuisine",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} flex flex-col justify-center sm:items-center min-h-screen antialiased relative bg-cyan-700`}>
        <Image
          src={bg1}
          fill
          placeholder="blur"
          quality={80}
          alt="Indonesian food"
          className="object-cover object-center z-[-1] filter blur"
        />
        <Header />
        <div className="flex-1 grid px-2 py-3 sm:px-8 sm:py-12">
          <main className="rounded-lg border border-secondary-100/35 backdrop-blur-md bg-secondary-100/30 sm:mx-auto sm:w-full h-full my-auto px-1 py-2 shadow xmax-w-7xl relative bg-gray-400">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
