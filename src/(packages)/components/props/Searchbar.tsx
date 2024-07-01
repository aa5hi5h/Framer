import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"


const Searchbar = () => {
    return (
        <div className='relative w-full h-10 flex flex-col bg-white'>
      <div className='relative h-10 z-10 rounded-md'>
        <Input className="absolute inset-0 h-full focus-visible:ring-offset-0 focus-visible:ring-0 focus:outline-none" placeholder="Type here to search..." />
        <Button className="absolute right-0 inset-y-0 h-full rounded-l-none">
        <Search className='h-4 w-4' />
        </Button>
        </div>
        </div>
    )
}

export default Searchbar