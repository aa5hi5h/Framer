import ThirdSignIn from "@/(packages)/components/Login/Login-3/page"
import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"
import ThirdSignUp from "@/(packages)/components/SignUp/SignUp-3/page"
import SaasNavbar from "../components/Navbar"


const SaasSignUp = () => {
    return (
        <div className="flex flex-col space-y-4">
        <SaasNavbar />
        <div className="p-6">
          <ThirdSignUp viewMode="monitor" />
      </div>
      </div>
    )
}

export default SaasSignUp