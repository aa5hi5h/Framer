import ThirdSignIn from "@/(packages)/components/Login/Login-3/page"
import Navbar from "@/(packages)/components/Navbar/Navbar-1/page"
import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"
import BlogNavbar from "../components/Navbar"

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
        </div>
    )
}
if(viewMode === "mobile"){
    return (
        <div className="flex flex-col space-y-4">
          <BlogNavbar viewMode="mobile"  />
          <div className="p-6 ">
            <ThirdSignIn viewMode="mobile" />
        </div>
        </div>
    )
}
}
export default BlogSignInPage