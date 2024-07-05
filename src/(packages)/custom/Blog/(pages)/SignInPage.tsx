import ThirdSignIn from "@/(packages)/components/Login/Login-3/page"
import Navbar from "@/(packages)/components/Navbar/Navbar-1/page"
import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"
import BlogNavbar from "../components/Navbar"



const BlogSignInPage = () => {
    return (
        <div className="flex flex-col space-y-4">
          <BlogNavbar />
          <div className="p-6 ">
            <ThirdSignIn />
        </div>
        </div>
    )
}

export default BlogSignInPage