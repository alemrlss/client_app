"use client";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import RightColumn from '@/components/login/RightColumn';
import LeftColumn from '@/components/login/LeftColumn';
const LoginPage = () => {
    const [errors, setErrors] = useState<string[]>([]);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const router = useRouter();
    const { data: session, status } = useSession();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setErrors([]);
        const responseNextAuth = await signIn("credentials", {
            email,
            password,
            redirect: true,
        });

        if (responseNextAuth?.error) {
            setErrors(responseNextAuth.error.split(","));
            return;
        }
        router.push("/dashboard");
    };
    if (session) {
        redirect("/dashboard");
    }
    return (
        <section className="h-screen bg-neutral-200 dark:bg-neutral-700">
            <div className="container h-full p-10">
                <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
                    <div className="w-full">
                        <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                            <div className="g-0 lg:flex lg:flex-wrap ">

                                {/* <!-- Left column container--> */}
                                <LeftColumn handleSubmit={handleSubmit} setEmail={setEmail} setPassword={setPassword} errors={errors} />

                                {/* <!-- Right column container--> */}
                                <RightColumn />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default LoginPage;
