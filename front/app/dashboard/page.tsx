import { cookies } from "next/headers"
import { redirect } from "next/navigation"

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
        return res.json()
    }
}

export default async function Dashboard() {
    const data = await getData()

    return (
        <div>
            <h1>Dashboard</h1>
            {
                data.map((teacher: {"firstname": string}) => (
                    <h1>{teacher.firstname}</h1>
                ))
            }
        </div>
    )
}