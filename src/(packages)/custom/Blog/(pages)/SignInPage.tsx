import ThirdSignIn from "@/(packages)/components/Login/Login-3/page"
import Navbar from "@/(packages)/components/Navbar/Navbar-1/page"
import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"
import BlogNavbar from "../components/Navbar"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"

interface BlogSignInPageProp{
    viewMode: string
}

const BlogSignInPage = ({viewMode}:BlogSignInPageProp) => {

if(viewMode === "monitor"){
    return (
        <div className="flex flex-col space-y-4">
          <BlogNavbar viewMode="monitor"  />
          <div className="p-6 ">
            <ThirdSignIn viewMode="monitor" />
        </div>
        <SecondFooter viewMode="monitor" />
        </div>
    )
}
if(viewMode === "mobile"){
    return (
        <div className="flex flex-col space-y-4">
          <BlogNavbar viewMode="mobile"  />
          <div className="">
            <ThirdSignIn viewMode="mobile" />
        </div>
        <SecondFooter viewMode="mobile" />
        </div>
    )
}
}
export default BlogSignInPage