import { CircleUser } from "lucide-react"


const FollowCard = () => {
    return (
        <div className="flex h-[88vh] w-[50vh] px-4  border-l-[1px] border-slate-700">
            <div className="flex bg-slate-200 w-full p-4 h-[60%] rounded-lg flex-col space-y-6 gap-x-5">
                <h4 className="text-xl font-semibold tracking-tight">Whom to follow</h4>
                <div className="flex flex-col space-y-4">
                    <span className="flex gap-x-2 px-4 py-2 hover:bg-slate-100 rounded-md text-xl font-medium">
                        <CircleUser /> Username
                    </span>
                    <span className="flex gap-x-2 px-4 py-2 hover:bg-slate-100 rounded-md text-xl font-medium">
                        <CircleUser /> Username
                    </span>
                    <span className="flex gap-x-2 px-4 py-2 hover:bg-slate-100 rounded-md text-xl font-medium">
                        <CircleUser /> Username
                    </span>
                    <span className="flex gap-x-2 px-4 py-2 hover:bg-slate-100 rounded-md text-xl font-medium">
                        <CircleUser /> Username
                    </span>
                </div>
            </div>
        </div>
    )
}

export default FollowCard