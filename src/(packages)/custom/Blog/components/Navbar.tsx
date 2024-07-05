import { Button } from "@/components/ui/button"


const BlogNavbar = () => {
    return (
        <div className="p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold tracking-tight">Logo</h1>
                <div className="flex items-center gap-x-4">
                    <ul className="flex gap-x-2">
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                    <Button>Login</Button>
                </div>
            </div>
        </div>
    )
}

export default BlogNavbar