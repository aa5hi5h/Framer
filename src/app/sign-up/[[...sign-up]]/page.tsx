import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex my-[2rem] justify-center items-center">
        <SignUp afterSignUpUrl={'/'}  />
    </div>
  )
}