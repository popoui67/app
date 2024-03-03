import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { Nav , Footer , Header } from "../components/header . footer  Nav ";
const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <div className=" flex  flex-col ">
    <Nav/>
    {children}
    <Footer/>
  </div>
  );
}
