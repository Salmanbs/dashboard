import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "src/component/Provider";
import Home from "./page";
import Appbar from "src/component/Appbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "dashboard",
  description: "Login with google and Dashboard",
};

export default function RootLayout({ children, ssession }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {" "}
          {/* <Appbar /> */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
