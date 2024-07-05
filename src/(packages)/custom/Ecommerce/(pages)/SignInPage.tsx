import ThirdSignIn from "@/(packages)/components/Login/Login-3/page"
import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"



const EcommerceSignInPage = () => {
    return (
        <div className="flex flex-col space-y-4">
          <SecondNavbar />
          <div className="p-6">
            <ThirdSignIn />
        </div>
        </div>
    )
}

export default EcommerceSignInPage