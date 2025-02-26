import Image from "next/image";
import Header from "@/components/Header";
import HomeSession from "@/components/HomeSession";
import AboutSession from "@/components/AboutSession";
import ShowCaseSession from "@/components/ShowcaseSession";
import DetailSession from "@/components/DetailSession";
import Instagram from "@/components/Instagram";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <section  id='home'>
        <HomeSession/>
      </section>
      <section  id='about'>
      <AboutSession/>
      </section>
      <section id='showcase'>
        <ShowCaseSession />
      </section>
      <DetailSession/>
      <Instagram/>
      <Footer/>
    </div>
  );
}
