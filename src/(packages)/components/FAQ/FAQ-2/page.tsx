import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"


const SecondFAQ = () => {
    return (
        <div className="p-6 my-[1rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 gap-x-8 ">
                <div className="col-span-1 p-4 mt-[3.7rem]">
                <div className="flex flex-col space-y-4">
                <h1 className="text-start font-bold tracking-tight text-5xl">FAQs</h1>
                <p className="text-start mt-[0.7rem] pb-[1rem] text-slate-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <Button className="max-w-max">Contact</Button>
                </div>
                </div>
                <div className="col-span-1 px-4">
                <div className="max-w-2xl mx-auto w-full mt-[2.3rem]">
                <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Question text here?</AccordionTrigger>
        <AccordionContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Question text here?</AccordionTrigger>
        <AccordionContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Question text here ?</AccordionTrigger>
        <AccordionContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Question text here ?</AccordionTrigger>
        <AccordionContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Question text here ?</AccordionTrigger>
        <AccordionContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondFAQ