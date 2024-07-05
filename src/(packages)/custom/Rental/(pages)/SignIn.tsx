import ThirdSignIn from "@/(packages)/components/Login/Login-3/page"
import Navbar from "../components/Navbar"


const RenatalsSignIn = () => {
    return (
        <div className="flex flex-col space-y-4">
        <Navbar />
        <div className="p-6">
            <ThirdSignIn />
            </div>
        </div>
    )
}

export default RenatalsSignIn