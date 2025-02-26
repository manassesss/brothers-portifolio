"use client";
import Image from "next/image";
export default function HomeSession() {

    return (
        <div className="w-full relative pt-28">
            <Image
            src="/home.svg"
            width={3840}
            height={2160}
            className='w-full'
            alt="Autor"
            />
        </div>
    );
}