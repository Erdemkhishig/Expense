


import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Anchor, CircleHelp, Earth, Layers, Grape, Bird, Watch, LoaderPinwheel, FileDigit, Kanban, Hourglass, ShipWheel, Plus, House, Gift, Utensils, Martini, CarTaxiFront, Shirt, Circle, Contact, CreditCard, Image, ZoomIn, Mic, Sheet, Leaf, } from 'lucide-react';

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


export const Addcategory = () => {

    return (
        <div>


            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Category</Button>
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
                                    {/* <div className="flex justify-between pr-4 pl-8 py-4 border-t-2">
                                        {color.map((item, index) => (
                                            <div>{item.clr}</div>
                                        ))}
                                    </div> */}
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





        </div>
    )
}