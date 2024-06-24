import Header from "@/app/_components/Header";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import background from "@/public/background.jpeg";

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
      <body className={`${montserrat.className} antialiased relative`}>
        <Image
          src={background}
          fill
          placeholder="blur"
          quality={100}
          alt="Indonesian food"
          className="object-cover min-h-screen filter blur-[10px]"
          priority={true}
        />
        <main>{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
