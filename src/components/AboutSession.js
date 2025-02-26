"use client";
import Image from "next/image";
import BackgroundBase from "./BackgroundBase";
import { RiInstagramFill } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";
import { TbBrandWhatsappFilled } from "react-icons/tb";



export default function AboutSession() {

    return (
       <BackgroundBase background_img={'background.svg'} background_size={'cover'}>
            <div className="bg-[#1E1E1E] w-[90%] flex flex-col rounded-3xl justify-between items-center py-10 px-6 md:px-10 md:py-10 md:flex-row">
                <div className="w-full text-center md:mr-20 md:w-[50%] md:text-left mb-8 md:mb-0">
                    <h1 className="font-[Montserrat] mb-20 font-semibold text-5xl md:text-5xl tracking-wider text-white">
                        Miquéias<br/>Santos
                    </h1>
                    <h1 className="font-[Montserrat] text-sm md:text-md tracking-wider text-white md:mb-20">
                    Desde pequeno, a música sempre fez parte da vida de Miquéias. Sua jornada começou com a flauta doce, ainda na infância, mas foi na igreja que ele descobriu sua verdadeira paixão: a bateria. A partir daí, mergulhou no mundo da percussão e dos instrumentos de sopro, se especializando em trompete e trombone. Seu talento e dedicação o levaram a se destacar em bandas de sopro, desenvolvendo uma musicalidade rica e versátil. Hoje, com uma pegada única e um groove inconfundível, ele imprime sua identidade em cada batida, trazendo a energia e a essência do forró para cada apresentação.
                    </h1>
                    <br/>
                    <div className="flex justify-center md:justify-start space-x-4 mt-2">
                        <a href="https://www.instagram.com/miqueiasssants/" target="_blank" className="text-[#B028FE] transition">
                            <RiInstagramFill className="text-5xl"/>
                        </a>
                        <a href="https://www.youtube.com/@miqueiasbateraa" target="_blank" className="text-[#B028FE] transition">
                            <BsYoutube className="text-5xl"/>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=559885373621"  target="_blank" className="text-[#B028FE] transition">
                            <TbBrandWhatsappFilled className="text-5xl"/>
                        </a>
                    </div>
                </div>

                {/* Imagem */}
                <div className="w-full md:w-[50%] flex justify-end">
                    <Image
                    src="/about.svg"
                    width={900}
                    loading="lazy"
                    height={1600}
                    className="rounded-3xl object-cover"
                    alt="Autor"
                    />
                </div>
            </div>
       </BackgroundBase>
    );
}