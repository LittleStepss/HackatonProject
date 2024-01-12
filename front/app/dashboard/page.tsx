import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import LogoutButton from "../logoutButton"
import Teacher from "./teacher"

async function getData() {
    let apiTokenObj = cookies().get("API_TOKEN")
    if (apiTokenObj == undefined) {
        redirect("/")
    } else {
        let apiHostname = "localhost"
        if (process.env.API_HOSTNAME != undefined) {
            apiHostname = process.env.API_HOSTNAME
        }
        let apiToken = apiTokenObj.value
        const res = await fetch(`http://${apiHostname}:2020/teachers`, {
            headers: {
                "API_TOKEN": apiToken,
            },
            cache: "no-store",
        })
        if (!res.ok) {
            redirect("/logout")
        }
        return res.json()
    }
}

export default async function Dashboard() {
    const data = await getData()
    return (
        <div className="flex flex-col flex-wrap justify-center items-center pb-6">
            <LogoutButton />
            <div className="w-[90vw] flex flex-wrap flex-row justify-start items-center gap-28">
                {
                    data.map((teacher: {
                        "teacher_id": string,
                        "firstname": string,
                        "lastname": string,
                        "sector": string,
                        "module": string,
                    }, index: number) => (
                        <Teacher key={index} teacher={teacher} />
                    ))
                }
            </div>
        </div>
    )
}