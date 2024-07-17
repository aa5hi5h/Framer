import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"
import ThirdSignIn from "@/(packages)/components/Login/Login-3/page"
import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"


interface EccomerceSignInPageProp {
    viewMode: string
}

const EcommerceSignInPage = ({viewMode}:EccomerceSignInPageProp) => {
    
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
          <div className="p-2">
            <ThirdSignIn viewMode="mobile" />
        </div>
        <SecondFooter viewMode="mobile" />
        </div>
    )
}
}

export default EcommerceSignInPage