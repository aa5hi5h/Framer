import ThirdSignIn from "@/(packages)/components/Login/Login-3/page"
import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"
import SaasNavbar from "../components/Navbar"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"

interface SaasSignInProp{
  viewMode: string
}

const SaasSignIn = ({viewMode}:SaasSignInProp) => {
  if(viewMode==="monitor"){
    return (
        <div className="flex flex-col space-y-4">
          <SecondNavbar viewMode="monitor" />
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
          <SecondNavbar viewMode="mobile" />
          <div className="">
            <ThirdSignIn viewMode="mobile" />
        </div>
        <SecondFooter viewMode="mobile" />
        </div>
    )
}
}

export default SaasSignIn