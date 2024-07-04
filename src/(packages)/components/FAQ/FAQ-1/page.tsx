import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

const FirstFAQ = () => {
    return (
        <div className="max-w-2xl mx-auto my-[2.7rem] p-6">
            <div className="flex flex-col">
                <h1 className="text-center font-bold tracking-tight text-5xl">FAQs</h1>
                <p className="text-center mt-[0.7rem] text-slate-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
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
    )
}

export default FirstFAQ