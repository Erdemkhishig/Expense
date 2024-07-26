

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Plus } from 'lucide-react';

import { Textarea } from "@/components/ui/textarea"


import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"


export const Addbutton = () => {
    const [date, setDate] = React.useState();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-blue-500 rounded-2xl text-white" variant="outline">+ Record</Button>
            </DialogTrigger>
            <DialogContent className="w-[792px]">
                <div className="border-b-2 w-full h-10 ">Add Record</div>
                <div className="flex ">
                    <div className="flex flex-col gap-6 w-full">



                        <div className="w-[90%] flex h-10  bg-gray-200 rounded-3xl">
                            <button className="w-1/2 rounded-3xl  bg-blue-500 text-white">Expense</button>
                            <button className="w-1/2 rounded-3xl bg-gray-200">Income</button>

                        </div>


                        <input className="p-3 border-2 rounded-md" name="Amount" type="Amount" placeholder="$ 000.00" />
                        <p>Category</p>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choose" />
                            </SelectTrigger>
                            <SelectContent >
                                <SelectGroup>
                                    <button className="px-6 flex items-center gap-2"> <p className="bg-black rounded-full"><Plus size={16} color="white" /> </p>Categories</button>
                                    <SelectItem value="apple">Food & Drinks</SelectItem>
                                    <SelectItem value="banana">Lending & Renting</SelectItem>

                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <div className="flex gap-2">
                            <div className="flex flex-col">
                                Date
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[180px] justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? format(date, "PPP") : <span>{setDate}</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>


                            </div>
                            <div className="flex flex-col">
                                Date
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-[180px]  justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? format(date, "PPP") : <span>{setDate}</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>


                            </div>
                        </div>

                        <Button className="w-full bg-blue-600" type="submit">Add Records</Button>

                    </div>
                    <div className="w-full h-full px-2">
                        <p className="p-2">Payee</p>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Choose" />
                            </SelectTrigger>
                            <SelectContent >
                                <SelectGroup>
                                    <SelectLabel>Categories</SelectLabel>
                                    <SelectItem value="apple">Food & Drinks</SelectItem>
                                    <SelectItem value="banana">Lending & Renting</SelectItem>

                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <p className="p-2 my-2">Note</p>
                        <Textarea className="h-[64%]" placeholder="Type your message here." />

                    </div>
                </div>
            </DialogContent>
        </Dialog>

    )
}