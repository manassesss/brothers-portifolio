import Image from "next/image";
import Header from "@/components/Header";
import HomeSession from "@/components/HomeSession";
export default function Home() {
  return (
    <div>
      <Header />
      <HomeSession id='#home'/>
    </div>
  );
}
