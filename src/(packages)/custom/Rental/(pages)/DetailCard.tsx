"use client"
import { CircleUser, Image, MapPin } from "lucide-react"
import Navbar from "../components/Navbar"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button"
import SecondFooter from "@/(packages)/components/Footer/Footer-2/page"

const RentalsDetailCard = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
        <div className="flex flex-col space-y-4">
        <Navbar />
        <div className="p-6">
            <div className="flex flex-col max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold tracking-tight pb-[0.7rem]">Location</h1>
                <div className="h-[50vh] w-full bg-slate-200 rounded-t-lg flex justify-center items-center">
            <Image size={36} />
        </div>
        <div className="grid  pt-[2rem] md:grid-cols-3">
            <div className="max-w-max  md:col-span-1">
            <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
    <Button className="mt-[0.7rem]">Reserve</Button>
            </div>
            <div className="col-span-2 mt-[2rem] md:mt-0 ml-0 md:ml-[4rem]">
                <h2 className="text-2xl font-semibold tracking-tight flex items-center gap-x-2">Hosted by Username<CircleUser className="opacity-60" size={28} /></h2>
                <hr className="w-full  my-[1rem] h-[1px] border-gray-300" />
                <p className="text-lg font-medium text-slate-500">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                     Ut enim ad minim veniam, quis nostrud exercitation.</p>
                     <hr className="w-full  my-[1rem] h-[1px] border-gray-300" />

                <div className="h-[40vh] rounded-md p-6 bg-slate-200 w-[80vh] flex justify-center items-center">
                    <MapPin />
                </div>
            </div>
        </div>
            </div>
            </div>
            <SecondFooter />
        </div>
    )
}

export default RentalsDetailCard