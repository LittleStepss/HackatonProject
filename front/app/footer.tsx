import iconFacebook from "./public/🦆 icon _facebook_.png"
import iconMail from "./public/🦆 icon _mail_.png"
import iconTwitter from "./public/🦆 icon _twitter outline_.png"
import Image from "next/image"

export default function Footer() {
    return (
        <div
            className="bg-[#64BDC2] h-[109px] min-w-[100vw] flex flex-row flex-wrap justify-center items-center gap-11"
        >
            <p className="text-[#ffff] text-2xl">Mentions légales</p>
            <Image src={iconFacebook} alt="🦆 icon _facebook_.png" />
            <Image src={iconMail} alt="🦆 icon _mail_.png" />
            <Image src={iconTwitter} alt="🦆 icon _twitter outline_.png" />
        </div>
    )
}