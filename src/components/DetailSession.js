"use client";
import Image from "next/image";
export default function DetailSession() {

    return (
        <div className="w-full relative">
            <Image
            src="/background2.svg"
            width={1440}
            loading="lazy"
            height={564}
            className='w-full'
            alt="Autor"
            />
        </div>
    );
}