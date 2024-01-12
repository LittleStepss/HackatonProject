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
    async function submitForm(formData: FormData) {
        'use server'
        let payload = {
            "message": formData.get("message"),
            "score": formData.get("score"),
            "id_teacher": params.teacher_id
        }
        let apiHostname = "localhost"
        if (process.env.API_HOSTNAME != undefined) {
            apiHostname = process.env.API_HOSTNAME
        }
        let apiToken = cookies().get("API_TOKEN")?.value
        if (apiToken != undefined) {
            const res = await fetch(`http://${apiHostname}:2020/poll`, {
                method: "POST",
                headers: {
                    "API_TOKEN": apiToken,
                },
                body: JSON.stringify(payload),
            })
            if (!res.ok) {
                console.log("Error")
            } else {
                redirect(`/teacher/${params.teacher_id}`)
            }
        } else {
            redirect("/")
        }
    }
    
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
            <div className="flex flex-col justify-center items-center">
                <p>{data.sector}</p>
                <p>{data.module}</p>
            </div>
            <form
                className="flex flex-col justify-center items-center gap-9"
                action={submitForm}
            >
                <div className="flex flex-col justify-center items-start">
                    <label>Qu'avez vous pensé de l'intervenant ?</label>
                    <textarea name="message" className="bg-[#F8FAFC] min-h-40 min-w-96" required />
                </div>
                <div className="flex flex-row flex-wrap justify-center items-center gap-6">
                    <div className="flex flex-col flex-wrap justify-center items-center">
                        <label>1</label>
                        <input type="radio" name="score" value={1} required />
                    </div>
                    <div className="flex flex-col flex-wrap justify-center items-center">
                        <label>2</label>
                        <input type="radio" name="score" value={2} required />
                    </div>
                    <div className="flex flex-col flex-wrap justify-center items-center">
                        <label>3</label>
                        <input type="radio" name="score" value={3} required />
                    </div>
                    <div className="flex flex-col flex-wrap justify-center items-center">
                        <label>4</label>
                        <input type="radio" name="score" value={4} required />
                    </div>
                    <div className="flex flex-col flex-wrap justify-center items-center">
                        <label>5</label>
                        <input type="radio" name="score" value={5} required />
                    </div>
                </div>
                <input type="submit" className="p-4 bg-[#7A5CFA] rounded-xl text-[#ffff]" />
            </form>
        </div>
    )
}