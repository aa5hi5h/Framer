import ThirdSignIn from "@/(packages)/components/Login/Login-3/page"
import Navbar from "@/(packages)/components/Navbar/Navbar-1/page"
import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"
import ThirdSignUp from "@/(packages)/components/SignUp/SignUp-3/page"
import BlogNavbar from "../components/Navbar"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"

interface BlogSignUpPageProp{
    viewMode: string
}

const BlogSignUpPage = ({viewMode}:BlogSignUpPageProp) => {

if(viewMode === "monitor"){
    return (
        <div className="flex flex-col space-y-4">
          <BlogNavbar viewMode="monitor" />
          <div className="p-6 ">
            <ThirdSignUp viewMode="monitor" />
        </div>
        <SecondFooter viewMode="monitor" />
        </div>
    )
}
if(viewMode === "mobile"){
    return (
        <div className="flex flex-col space-y-4">
          <BlogNavbar viewMode="mobile" />
          <div className="">
            <ThirdSignUp viewMode="mobile" />
        </div>
        <SecondFooter viewMode="mobile" />
        </div>
    )
}
}
export default BlogSignUpPage