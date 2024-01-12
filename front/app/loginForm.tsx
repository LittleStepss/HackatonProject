import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function LoginForm() {
    if (cookies().get("API_TOKEN") != undefined && cookies().get("API_TOKEN")?.value != "") {
        redirect("/dashboard")
    }
    async function submitform(formData: FormData) {
        'use server'
        let apiHostname = "localhost"
        if (process.env.API_HOSTNAME != undefined) {
            apiHostname = process.env.API_HOSTNAME
        }
        let payload = {
            "mail": formData.get("mail"),
            "password": formData.get("password"),
        }
        const resp = await fetch(`http://${apiHostname}:2020/login`, {
            method: "POST",
            body: JSON.stringify(payload)
        })
        if (!resp.ok) {
            console.log(resp.text)
        } else {
            const data = await resp.json()
            cookies().set("API_TOKEN", data.token)
            redirect("/dashboard")
        }
    }

    return (
        <form className="flex flex-col flex-wrap justify-center items-center gap-6 border-b-2 p-12" action={submitform}>
            <h2 className="text-4xl absolute top-60">Bienvenue</h2>
            <div>    
                <div className="flex flex-col flex-wrap justify-center items-start">
                    <label>Mail</label>
                    <input type="mail" name="mail" className="border-2 rounded-lg border-[#E2E1E5] p-1" />
                </div>
                <div className="flex flex-col flex-wrap justify-center items-start">
                    <label>Mot de passe</label>
                    <input type="password" name="password" className="border-2 rounded-lg border-[#E2E1E5] p-1" />
                </div>
            </div>
            <input type="submit" value="connexion" className="bg-[#64BDC2] p-4 rounded-lg text-[#FFFF]" />
        </form>
    )
}