

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

import { Anchor, CircleHelp, Earth, Layers, Grape, Bird, Watch, LoaderPinwheel, FileDigit, Kanban, Hourglass, ShipWheel, Plus, House, Gift, Utensils, Martini, CarTaxiFront, Shirt, Circle, Contact, CreditCard, Image, ZoomIn, Mic, Sheet, Leaf, } from 'lucide-react';

import { Textarea } from "@/components/ui/textarea"

import { useState } from "react"


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


const cat = [
    {
        icon: <House color="blue" />,
        title: "Home"
    },
    {
        icon: <Gift color="red " />,
        title: "Gift"
    },
    {
        icon: <Utensils color="orange " />,
        title: "Food"
    },
    {
        icon: <Martini color="purple " />,
        title: "Drink"
    },
    {
        icon: <CarTaxiFront color="yellow " />,
        title: "Vehicle"
    },
    {
        icon: <Shirt color="purple " />,
        title: "Shopping"
    },

]

const icons = [
    {
        icon: <House />,
    },
    {
        icon: <Gift />,
    },
    {
        icon: <Utensils />,
    },
    {
        icon: <Martini />,
    },
    {
        icon: <CarTaxiFront />,
    },
    {
        icon: <Shirt />,
    },
    {
        icon: <Contact />,
    },
    {
        icon: <CreditCard />
    },
    {
        icon: <Image />,
    },
    {
        icon: <ZoomIn />,
    },
    {
        icon: <Mic />,
    },
    {
        icon: <Sheet />,
    },
    {
        icon: <Leaf />,
    },
    {
        icon: <Kanban />,
    },
    {
        icon: <Hourglass />,
    },
    {
        icon: <ShipWheel />,
    },
    {
        icon: <FileDigit />,
    },
    {
        icon: <LoaderPinwheel />,
    },
    {
        icon: <Watch />,
    },
    {
        icon: <Bird />,
    },
    {
        icon: <Grape />,
    },
    {
        icon: <Layers />,
    },
    {
        icon: <Earth />,
    },
    {
        icon: <CircleHelp />,
    },
    {
        icon: <Anchor />,
    },
]

const color = [
    {
        clr: < Circle fill="blue" color="blue" />
    },
    {
        clr: < Circle fill="cyan" color="cyan" />
    },
    {
        clr: < Circle fill="green" color="green" />
    },
    {
        clr: < Circle fill="yellow" color="yellow" />
    },
    {
        clr: < Circle fill="orange" color="orange" />
    },
    {
        clr: < Circle fill="purple" color="purple" />
    },
    {
        clr: < Circle fill="red" color="red" />
    },
]

export const Addbutton = () => {
    const [date, setDate] = React.useState();
    const [checked, unchecked] = useState(false)
    const handlebgcolor = () => {
        unchecked(!checked)
    };

    const [chckd, unchckd] = useState(false)
    const bgcolor = () => {
        unchckd(!chckd)
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-blue-500 w-full rounded-2xl text-white" variant="outline">+ Record</Button>
            </DialogTrigger>
            <DialogContent className="w-[792px]">
                <div className="border-b-2 w-full h-10 ">Add Record</div>
                <div className="flex ">
                    <div className="flex flex-col gap-6 w-full">



                        <div className="w-[90%] flex h-10  bg-gray-200 rounded-3xl">
                            <button onClick={handlebgcolor} className={checked ? 'w-1/2 rounded-3xl  bg-blue-500 text-white' : 'w-1/2 rounded-3xl  bg-gray-200 text-black'}>Expense</button>
                            <button onClick={bgcolor} className={chckd ? 'w-1/2 rounded-3xl  bg-green-500 text-white' : 'w-1/2 rounded-3xl  bg-gray-200 text-black'}>Income</button>


                        </div>


                        <input className="p-3 border-2 rounded-md" name="Amount" type="Amount" placeholder="$ 000.00" />
                        <p>Category</p>
                        <Select>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Find or choose category" />
                            </SelectTrigger>
                            <SelectContent >
                                <SelectGroup>

                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="w-full flex gap-2" variant="outline">
                                                <div className="border-2 border-blue-600 rounded-full bg-blue-600"><Plus size={16} color="white" /></div>
                                                <div>Category</div>
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle>Add Category</DialogTitle>

                                            </DialogHeader>
                                            <div className="flex gap-4">

                                                <Select>
                                                    <SelectTrigger className="w-fit">
                                                        <SelectValue placeholder={<House />} />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <div className="grid grid-cols-6 grid-rows-4 py-4 pr-4">

                                                                {icons.map((item, index) => (
                                                                    <div >

                                                                        <SelectItem value={index}>
                                                                            <div>{item.icon} </div>
                                                                        </SelectItem>

                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <div className="flex justify-between pr-4 pl-8 py-4 border-t-2">
                                                                {color.map((item, index) => (
                                                                    <div>{item.clr}</div>
                                                                ))}
                                                            </div>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                                <Select>
                                                    <SelectTrigger className="w-72">
                                                        <SelectValue placeholder="Name" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Categories</SelectLabel>
                                                            <SelectItem value="apple">Food</SelectItem>
                                                            <SelectItem value="banana">Gift</SelectItem>

                                                        </SelectGroup>
                                                    </SelectContent>

                                                </Select>
                                            </div>

                                            <DialogFooter className="flex w-96 px-0 justify-center">
                                                <button className="bg-green-600 rounded-2xl p-2 w-full text-white" type="submit">Save changes</button>
                                            </DialogFooter>
                                        </DialogContent>

                                    </Dialog>
                                    {cat.map((item, index) => (
                                        <SelectItem value={index} >

                                            <div className="flex gap-4 p-2" value={index}>{item.icon}
                                                {item.title}
                                            </div>
                                        </SelectItem>
                                    ))}

                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <div className="flex gap-2 items-center">
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

                            <div className="flex flex-col w-full">
                                Time
                                <Input type="time" placeholder="Email" />


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
                                    <SelectLabel>... </SelectLabel>
                                    <SelectItem value="apple">Credit</SelectItem>
                                    <SelectItem value="apple">Cash</SelectItem>

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