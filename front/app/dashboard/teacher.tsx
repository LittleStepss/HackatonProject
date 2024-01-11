import Image from "next/image"
import ExemplePicture1 from "../public/exemple_picture1.png"

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
        <div className="bg-[#D4D4D4] h-[329px] w-[304px] flex flex-col justify-start items-center flex-wrap rounded-lg overflow-hidden">
            <Image src={ExemplePicture1} alt="exemple_picture1.png" />
            <div>
                <h3>{teacher.firstname}</h3>
                <h3>{teacher.lastname}</h3>
            </div>
        </div>
    )
}