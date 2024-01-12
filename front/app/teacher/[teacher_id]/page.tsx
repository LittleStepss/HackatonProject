import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Poll from "./poll";

async function getData(teacher_id: number) {
    let apiHostname = "localhost"
    if (process.env.API_HOSTNAME != undefined) {
        apiHostname = process.env.API_HOSTNAME
    }
    let apiToken = cookies().get("API_TOKEN")?.value
    if (apiToken != undefined) {
        const res = await fetch(`http://${apiHostname}:2020/polls?teacher_id=${teacher_id}`, {
            method: "GET",
            headers: {
                "API_TOKEN": apiToken,
            }
        })
        if (!res.ok) {
            redirect("/")
        }
        return res.json()
    } else {
        redirect("/")
    }
}

export default async function Teacher({ params }: { params: { teacher_id: number } }) {
    const data = await getData(params.teacher_id)
    
    return (
        <div className="flex flex-row flex-wrap justify-center items-center gap-5 pb-4">
            {
                data.map((poll: { "poll_id": number, "fk_user_mail": string, "fk_id_teacher": number, "score": number, "comment": string }, index: number) => (
                    <Poll poll={poll} key={index} />
                ))
            }
        </div>
    )    
}