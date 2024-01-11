export default function LoginForm() {
    return (
        <form className="flex flex-col flex-wrap justify-center items-center gap-6 border-b-2 p-12">
            <h2 className="text-4xl absolute top-60">Bienvenue</h2>
            <div>    
                <div className="flex flex-col flex-wrap justify-center items-start">
                    <label>Mail</label>
                    <input type="mail" className="border-2 rounded-lg border-[#E2E1E5] p-1" />
                </div>
                <div className="flex flex-col flex-wrap justify-center items-start">
                    <label>Mot de passe</label>
                    <input type="password" className="border-2 rounded-lg border-[#E2E1E5] p-1" />
                </div>
            </div>
            <input type="submit" value="connexion" className="bg-[#64BDC2] p-4 rounded-lg text-[#FFFF]" />
        </form>
    )
}