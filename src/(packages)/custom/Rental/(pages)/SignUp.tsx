
import ThirdSignUp from "@/(packages)/components/SignUp/SignUp-3/page"
import Navbar from "../components/Navbar"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"

interface RenatalsSignUpProp{
    viewMode: string
}

const RenatalsSignUp = ({viewMode}:RenatalsSignUpProp) => {

    if(viewMode === "monitor"){
    return (
        <div className="flex flex-col space-y-4">
            <Navbar viewMode="monitor" />
            <div className="p-6">
                <ThirdSignUp viewMode="monitor" />
                </div>
            <SecondFooter viewMode="monitor" />
            </div>
    )
}
if(viewMode === 'mobile'){
    return (
        <div className="flex flex-col space-y-4">
            <Navbar viewMode="mobile" />
            <div className="">
                <ThirdSignUp viewMode="mobile" />
                </div>
            <SecondFooter viewMode="mobile" />
            </div>
    )
}

}
export default RenatalsSignUp