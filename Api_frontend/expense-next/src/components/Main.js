import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { House, Utensils } from 'lucide-react';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const table = [
    {
        check: <Checkbox />,
        icon: <House color="#94A3B8 " />,
        title: "Food & Drinks",
        time: "0",
        amount: "0",
    },
]

export const Main = ({ accounts }) => {
    return (
        <div>
            <div className="pt-8 pb-4 flex justify-between">

                <Carousel className="w-40 max-w-xs">
                    <CarouselContent>
                        {Array.from({ length: 30 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1 h-10">
                                    <Card>
                                        <CardContent className="flex items-center justify-center py-1">
                                            <span className="text-sm font-semibold">Last {index + 1} days</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>



                <Select className="pt-4">
                    <SelectTrigger className="w-[180px] font-bold">
                        <SelectValue placeholder="Newest first" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel className="text-bold">Newest first</SelectLabel>
                            <SelectItem value="apple">Oldest First</SelectItem>
                            <SelectItem value="banana">...</SelectItem>

                        </SelectGroup>
                    </SelectContent>
                </Select>

            </div>
            <div className="-ml-12">
                <div className="flex justify-between space-x-2 border-2 p-4 rounded-2xl bg-white">
                    <div className="flex items-center pl-4 gap-4"><Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            <div className="flex gap-4">

                                <div className="text-lg flex flex-col justify-center items-center gap-2">
                                    <p>Select all</p>

                                </div>
                            </div>
                        </label>
                    </div>
                    <p className="text-red-300 flex justify-end">- 1,000$</p>
                </div>
                <p className="font-bold py-4">Today</p>

                <div className=" flex flex-col gap-4">
                    <div className="flex justify-between space-x-2 border-2 p-4 rounded-2xl bg-white ">
                        <div className="flex items-center pl-4 gap-4"><Checkbox id="terms" />
                            <label
                                htmlFor="terms"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                <div className="flex gap-4">
                                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center"><House color="white" size={18} /></div>
                                    <div className="flex flex-col justify-center items-center gap-2">
                                        <p>Lending & Renting</p>
                                        <p className="text-gray-300">14:00</p>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <p className="text-green-300 flex justify-end">- 1,000$</p>
                    </div>


                    <p className="font-bold py-4">Yesterday</p>
                    {accounts.map((account, index) => (
                        <div className="flex justify-between space-x-2 border-2 p-4 rounded-2xl bg-white" key={account.title + index}>
                            <div className="flex items-center pl-4 gap-4"><Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    <div className="flex gap-4">
                                        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center"><Utensils color="white" size={18} />{account.category}</div>
                                        <div className="flex flex-col justify-center items-center gap-2">
                                            <p> {account.title}</p>
                                            <p className="text-gray-300">{account.time}</p>
                                        </div>
                                    </div>
                                </label>
                            </div>
                            <p className="text-red-300 flex justify-end">-  {account.amount}</p>
                        </div>
                    ))}





                </div>

            </div>
        </div>



    )

}