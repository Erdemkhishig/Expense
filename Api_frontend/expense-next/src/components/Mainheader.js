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


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export const Mainheader = ({ }) => {
    return (
        <div>
            <div className="py-8 flex justify-between">

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



                <Select className="pt-8">
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Newest first" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Newest first</SelectLabel>
                            <SelectItem value="apple">Apple</SelectItem>
                            <SelectItem value="banana">Banana</SelectItem>

                        </SelectGroup>
                    </SelectContent>
                </Select>

            </div>
            <div className="flex items-center space-x-2 border-2 p-4 rounded-2xl bg-white pl-8 -ml-12">
                <Checkbox id="terms" />
                <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    <div className="flex gap-[50rem]">
                        <p>Select all</p>
                        <p>50000$</p>
                    </div>
                </label>
            </div>
        </div>



    )

}