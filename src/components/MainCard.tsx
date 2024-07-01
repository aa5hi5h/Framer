
import SearchBar from "./SearchBar"
import { Input } from "./ui/input"


const MainCard = () => {
    return (
        <div className="max-w-5xl mx-auto p-6 mt-[6rem]">
        <div className="flex justify-center items-center ">
          <div className="relative  p-1 sm:p-6">
            <h1 className="text-2xl md:text-4xl lg:text-5xl tracking-tight font-semibold pb-3">Generate website ideas into wireframe</h1>
            <div className="mx-auto mt-4 w-full max-w-2xl flex flex-col flex-grow">
                <SearchBar /> 
                </div>    
          </div>
        </div>
      </div>
    )
}

export default MainCard