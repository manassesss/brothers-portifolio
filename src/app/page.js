import Image from "next/image";
import Header from "@/components/Header";
import HomeSession from "@/components/HomeSession";
import AboutSession from "@/components/AboutSession";
import BannerSession from "@/components/BannerSession";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeSession id='#home'/>
      <AboutSession id='#about'/>
      <BannerSession/>
    </div>
  );
}
