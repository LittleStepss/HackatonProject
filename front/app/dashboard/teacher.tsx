import Image from "next/image"
import ExemplePicture1 from "../public/exemple_picture1.png"
import Link from "next/link"

export default function Teacher({
    teacher
}: {
    teacher: {
        "teacher_id": string,
        "firstname": string,
        "lastname": string,
        "sector": string,
        "module": string,
    }
}) {
    return (
        <Link className="bg-[#D4D4D4] h-[329px] w-[304px] flex flex-col justify-start items-center rounded-lg overflow-hidden" href={`/dashboard/${teacher.teacher_id}`}>
            <Image src={ExemplePicture1} alt="exemple_picture1.png" />
            <div className="flex flex-col flex-wrap justify-start items-start gap-1 w-[90%] p-4">
                <div className="flex flex-row flex-wrap justify-start items-center gap-1">
                    <h3>{teacher.firstname}</h3>
                    <h3>{teacher.lastname}</h3>
                </div>
                <div className="flex flex-col justify-center items-start text-[#666666]">
                    <p className="">{teacher.sector}</p>
                    <p>{teacher.module}</p>
                </div>
            </div>
        </Link>
    )
}