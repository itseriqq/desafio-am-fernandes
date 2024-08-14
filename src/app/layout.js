import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";
import NavbarAMFernandes from "./components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AM Fernandes",
  description: "A incorporadora que constrói com você o seu lar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarAMFernandes></NavbarAMFernandes>
        {children}
        </body>
    </html>
  );
}
