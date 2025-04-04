import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/styles/darkTheme.css";
import "@/styles/lightTheme.css";
import "@/styles/alias.css";
import "@/styles/utilityClasses.css";
import "@/styles/overrides.css";
import CommonContexts from "./commonContexts";
import Header from "../Components/header";
import Footer from "../Components/footer";

import { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "DimaTi Portfolio",
  description: "DimaTi portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
          <div className="page-layout">
            <SkeletonTheme
                baseColor="#303030"
                highlightColor="#353535"
                borderRadius="0.5rem"
                duration={1}
            >
              <CommonContexts>
                <Header className="u-page-padding"/>
                  {children}
                  <div className="page-expander"/>
                <Footer className="u-page-padding"/>
              </CommonContexts>
            </SkeletonTheme>
          </div>
      </body>
      
    </html>
  );
}
