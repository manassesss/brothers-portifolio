import Image from "next/image";
import Header from "@/components/Header";
import HomeSession from "@/components/HomeSession";
import AboutSession from "@/components/AboutSession";
import ShowCaseSession from "@/components/ShowcaseSession";
import DetailSession from "@/components/DetailSession";

export default function Home() {
  return (
    <div>
      <Header />
      <HomeSession id='home'/>
      <AboutSession id='about'/>
      <ShowCaseSession id='showcase'/>
      <DetailSession/>
    </div>
  );
}
