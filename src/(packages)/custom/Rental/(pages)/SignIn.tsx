import ThirdSignIn from "@/(packages)/components/Login/Login-3/page"
import Navbar from "../components/Navbar"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"

interface RenatalsSignInProp{
    viewMode: string
}

const RenatalsSignIn = ({viewMode}:RenatalsSignInProp) => {
    if(viewMode === "monitor"){
    return (
        <div className="flex flex-col space-y-4">
        <Navbar viewMode="monitor" />
        <div className="p-6">
            <ThirdSignIn viewMode="monitor" />
            </div>
        <SecondFooter viewMode="monitor" />
        </div>
    )
}
if(viewMode === "mobile"){
    return (
        <div className="flex flex-col space-y-4">
        <Navbar viewMode="mobile" />
        <div className="">
            <ThirdSignIn viewMode="mobile" />
            </div>
        <SecondFooter viewMode="mobile" />
        </div>
    )
}
}
export default RenatalsSignIn