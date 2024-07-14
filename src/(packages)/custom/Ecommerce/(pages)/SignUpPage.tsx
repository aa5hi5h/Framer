import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"
import ThirdSignUp from "@/(packages)/components/SignUp/SignUp-3/page"


interface EccomerceSignUpPageProp{
    viewMode: string
}


const EcommerceSignUpPage = ({viewMode}:EccomerceSignUpPageProp) => {
    if(viewMode=== "monitor"){
    return (
        <div className="flex flex-col space-y-4">
            <SecondNavbar viewMode="monitor" />
            <div className="p-6">
                <ThirdSignUp />
                </div>
            </div>
    )
}
if(viewMode === "mobile"){
    return (
        <div className="flex flex-col space-y-4">
            <SecondNavbar viewMode="mobile" />
            <div className="p-6">
                <ThirdSignUp />
                </div>
            </div>
    )
}
}

export default EcommerceSignUpPage