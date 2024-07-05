import ThirdSignIn from "@/(packages)/components/Login/Login-3/page"
import Navbar from "@/(packages)/components/Navbar/Navbar-1/page"
import SecondNavbar from "@/(packages)/components/Navbar/Navbar-2/page"
import ThirdSignUp from "@/(packages)/components/SignUp/SignUp-3/page"
import BlogNavbar from "../components/Navbar"



const BlogSignUpPage = () => {
    return (
        <div className="flex flex-col space-y-4">
          <BlogNavbar />
          <div className="p-6 ">
            <ThirdSignUp />
        </div>
        </div>
    )
}

export default BlogSignUpPage