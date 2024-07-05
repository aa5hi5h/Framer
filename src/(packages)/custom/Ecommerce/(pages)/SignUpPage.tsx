import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"
import ThirdSignUp from "@/(packages)/components/SignUp/SignUp-3/page"



const EcommerceSignUpPage = () => {
    return (
        <div className="flex flex-col space-y-4">
            <SecondNavbar />
            <div className="p-6">
                <ThirdSignUp />
                </div>
            </div>
    )
}

export default EcommerceSignUpPage