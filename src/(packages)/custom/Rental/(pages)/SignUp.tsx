
import ThirdSignUp from "@/(packages)/components/SignUp/SignUp-3/page"
import Navbar from "../components/Navbar"



const RenatalsSignUp = () => {
    return (
        <div className="flex flex-col space-y-4">
            <Navbar />
            <div className="p-6">
                <ThirdSignUp viewMode="monitor" />
                </div>
            </div>
    )
}

export default RenatalsSignUp