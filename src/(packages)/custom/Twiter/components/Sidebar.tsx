import { Bell, Home, LogOut, User } from "lucide-react"



const Sidebar = () => {
    return (
        <div className="flex flex-col space-y-6 h-[130vh] px-2 pl-[-2rem] border-r-[1px] border-slate-500">
            <h2 className="text-4xl font-bold tracking-tight px-4">Logo</h2>
            <ul className="flex flex-col space-y-4">
                <li className="flex gap-x-2 px-4 py-2 hover:bg-slate-200 rounded-md text-xl font-medium"><Home /> Home</li>
                <li className="flex gap-x-2 px-4 py-2 hover:bg-slate-200 rounded-md text-xl font-medium"><Bell /> Notification</li>
                <li className="flex gap-x-2 px-4 py-2 hover:bg-slate-200 rounded-md text-xl font-medium"><User /> Profile</li>
                <li className="flex gap-x-2 px-4 py-2 hover:bg-slate-200 rounded-md text-xl font-medium"><LogOut /> Logout</li>
            </ul>
        </div>
    )
}

export default Sidebar