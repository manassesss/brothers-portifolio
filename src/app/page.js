import Image from "next/image";
import Header from "@/components/Header";
import HomeSession from "@/components/HomeSession";
import AboutSession from "@/components/AboutSession";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeSession id='#home'/>
      <AboutSession id='#about'/>
    </div>
  );
}
