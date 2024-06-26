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
    <html lang="en" className="h-full">
      <body
        className={`${montserrat.className}  h-full relative overflow-hidden  grid grid-rows-[auto_1fr] antialiased`}>
        <div className="absolute inset-0 z-[-1] ">
          <Image
            src={bg1}
            layout="fill"
            placeholder="blur"
            alt="Indonesian food"
            className="object-cover filter blur-lg"
          />
        </div>
        <Header />
        <div className="overflow-auto sm:overflow-visible px-8 py-4">
          <main className="sm:mx-auto sm:my-auto sm:max-w-7xl text-primary-900 bg-secondary-400/50 ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}

export default RootLayout;
