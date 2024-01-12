import { redirect } from "next/navigation"

export default async function LogoutButton() {
    async function clickButton () {
        'use server'
        redirect("/logout")
    }
    return (
        <form className="bg-[#64BDC2] text-[#ffff] flex flex-col justify-center items-center p-4 rounded-lg overflow-hidden absolute top-5 right-8 cursor-pointer" action={clickButton}>
            <input type="submit" className="w-full h-full cursor-pointer" value="Logout" />
        </form>
    )
}