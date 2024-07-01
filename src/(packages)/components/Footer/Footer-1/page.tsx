import Socials from "../../props/Socials"


const FirstFooter = () => {
    return (
        <div className="p-3 flex flex-col my-[2rem] ">
            <div className=" flex flex-col lg:flex-row space-y-6 justify-between items-center">
                <h1 className="text-4xl font-bold tracking-tight">Logo</h1>
                <ul className="flex flex-col lg:flex-row items-center space-y-2 lg:space-y-0 md:flex gap-4">
                    <li>Link 1</li>
                    <li>link 2</li>
                    <li>link 3</li>
                    <li>link 4</li>
                    <li>link 5</li>
                </ul>
                <div>
                    <Socials />
                </div>
            </div>
            <hr className="w-full  mt-[2rem] h-[1px] border-gray-700" />
        </div>
    )
}

export default FirstFooter