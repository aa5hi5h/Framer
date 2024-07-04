import { Button } from "@/components/ui/button"


const FirstHeader = () => {
    return (
        <div className="p-6">
            <div className="flex flex-col space-y-4 max-w-xl mx-auto mt-[4.3rem]">
                    <h1 className="text-5xl font-bold text-center tracking-tight">Title heading  goes here </h1>
                    <p className="text-slate-800 text-center pb-[1.1rem]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labo"</p>
                        <div className="flex justify-center gap-x-4">
                            <Button>Button</Button>
                            <Button variant={"outline"} className="border-slate-300">Button</Button>
                        </div>
            </div>
        </div>
    )
}

export default FirstHeader