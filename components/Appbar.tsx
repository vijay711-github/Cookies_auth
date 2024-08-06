"use client"
import { useRouter } from "next/navigation"
export const Appbar = () => {
    const router = useRouter()
    return (
        <button onClick={()=>router.push("/api/auth/signin")}>Signin</button>
    )
}