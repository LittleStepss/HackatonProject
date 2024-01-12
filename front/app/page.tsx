import LoginForm from "./loginForm"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <LoginForm />
      <Link href="https://github.com/LittleStepss/HackatonProject/wiki" scroll={false}>
        Wiki du projet
      </Link>
    </main>
  )
}
