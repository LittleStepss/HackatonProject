import { cookies } from "next/headers"
import { redirect } from "next/navigation"

async function getTeacher(teacherId: number) {
    if (cookies().get("API_TOKEN") == undefined) {
        redirect("/")
    }
    let apiHostname = "localhost"
    if (process.env.API_HOSTNAME != undefined) {
        apiHostname = process.env.API_HOSTNAME
    }
    let apiToken = cookies().get("API_TOKEN")?.value
    if (apiToken != undefined) {
        const res = await fetch(`http://${apiHostname}:2020/teacher?teacher_id=${teacherId}`, {
            method: "GET",
            headers: {
                "API_TOKEN": apiToken,
            },
            cache: "no-store"
        })
        if (!res.ok) {
            console.log(`http://${apiHostname}:2020/teacher?teacher_id=${teacherId}`)
            redirect("/dashboard")
        }
        return res.json()
    } else {
        redirect("/logout")
    }
}

export default async function Poll({ params }: { params: { teacher_id: number } }) {
    const data = await getTeacher(params.teacher_id)
    return (
        <div className="w-full min-h-screen flex flex-col flex-wrap justify-start item-center">
            <div className="flex flex-row flex-wrap justify-center items-center gap-7 text-6xl">
                <p>
                    {data.firstname}
                </p>
                <p>
                    {data.lastname}
                </p>
            </div>
            <div>
                <p>{data.sector}</p>
                <p>{data.module}</p>
            </div>
        </div>
    )
}