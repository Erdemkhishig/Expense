'use client'
import { Checkbox } from "@/components/ui/checkbox"

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
import { Eye, Icon, icons, Plus } from 'lucide-react';


import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { useState } from "react"

import { Addbutton } from "./Addbutton";
import { Addcategory } from "./Addcategory"


// const category = [
//     {
//         icon: <Eye color="#94A3B8 " />,
//         title: "Food & Drinks"
//     },
//     {
//         icon: <Eye color="#94A3B8 " />,
//         title: "Shopping"
//     },
//     {
//         icon: <Eye color="#94A3B8 " />,
//         title: "Housing"
//     },
//     {
//         icon: <Eye color="#94A3B8 " />,
//         title: "Transportation"
//     },
//     {
//         icon: <Eye color="#94A3B8 " />,
//         title: "Vehicle"
//     },
//     {
//         icon: <Eye color="#94A3B8 " />,
//         title: "Life & Entertainment"
//     },
//     {
//         icon: <Eye color="#94A3B8 " />,
//         title: "Communication, PC"
//     },
//     {
//         icon: <Eye color="#94A3B8 " />,
//         title: "Financial expenses"
//     },
//     {
//         icon: <Eye color="#94A3B8 " />,
//         title: "Investments"
//     },
//     {
//         icon: <Eye color="#94A3B8 " />,
//         title: "Income"
//     },
//     {
//         icon: <Eye color="#94A3B8 " />,
//         title: "Others"
//     },


// ]
0
export function Aside({ accounts }) {
    const [range, setRange] = useState({ min: 0, max: 1000 })
    return (
        <div className="px-4 py-8 w-[24rem]">

            <Card>
                <CardHeader>
                    <CardTitle>Records</CardTitle>

                </CardHeader>
                <CardContent>

                    <Addbutton accounts={accounts} />

                    <input className="border-2 border-gray-400 rounded-md my-4 w-full p-1" type="Search" placeholder="  Search" />
                    <div> <p className="font-semi-bold py-3">Types</p>
                        <div className="flex flex-col justify-start items-start">

                            <RadioGroup defaultValue="comfortable">
                                <div className="flex items-center space-x-2 mt-3">
                                    <RadioGroupItem value="default" id="r1" />
                                    <Label htmlFor="r1">All</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="comfortable" id="r2" />
                                    <Label htmlFor="r2">Income</Label>
                                </div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <RadioGroupItem value="compact" id="r3" />
                                    <Label htmlFor="r3">Expense</Label>
                                </div>
                            </RadioGroup>

                        </div>


                    </div>
                    <div className="flex justify-between py-4">
                        <p className="font-bold mb-4">Category</p>
                        <button className="text-gray-300">Clear</button>
                    </div>
                    {/* {category.map((item) => (
                        <div className="flex gap-2">{item.icon}
                            {item.title}
                        </div>
                    ))} */}
                    <div className="flex flex-col gap-4">
                        <button className="text-sm flex items-center w-full justify-between">
                            <div className="flex gap-2 "><Eye color="#94A3B8" /> Food & Drinks</div>
                            <svg width="12" height="12" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.91671 3.58327L1.75004 5.74994C1.48615 6.01383 1.18407 6.07286 0.843791 5.92702C0.503513 5.78119 0.333374 5.52077 0.333374 5.14577L0.333374 0.854106C0.333374 0.479106 0.503513 0.21869 0.843791 0.0728569C1.18407 -0.0729766 1.48615 -0.0139489 1.75004 0.24994L3.91671 2.41661C4.00004 2.49994 4.06254 2.59022 4.10421 2.68744C4.14587 2.78466 4.16671 2.88883 4.16671 2.99994C4.16671 3.11105 4.14587 3.21522 4.10421 3.31244C4.06254 3.40966 4.00004 3.49994 3.91671 3.58327Z" fill="#1C1B1F" />
                            </svg>
                        </button>
                        <button className="text-sm flex items-center w-full justify-between">
                            <div className="flex gap-2"><Eye color="#94A3B8" /> Shopping</div>
                            <svg width="12" height="12" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.91671 3.58327L1.75004 5.74994C1.48615 6.01383 1.18407 6.07286 0.843791 5.92702C0.503513 5.78119 0.333374 5.52077 0.333374 5.14577L0.333374 0.854106C0.333374 0.479106 0.503513 0.21869 0.843791 0.0728569C1.18407 -0.0729766 1.48615 -0.0139489 1.75004 0.24994L3.91671 2.41661C4.00004 2.49994 4.06254 2.59022 4.10421 2.68744C4.14587 2.78466 4.16671 2.88883 4.16671 2.99994C4.16671 3.11105 4.14587 3.21522 4.10421 3.31244C4.06254 3.40966 4.00004 3.49994 3.91671 3.58327Z" fill="#1C1B1F" />
                            </svg>
                        </button>
                        <button className="text-sm flex items-center w-full justify-between">
                            <div className="flex gap-2"><Eye color="#94A3B8" /> Housing</div>
                            <svg width="12" height="12" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.91671 3.58327L1.75004 5.74994C1.48615 6.01383 1.18407 6.07286 0.843791 5.92702C0.503513 5.78119 0.333374 5.52077 0.333374 5.14577L0.333374 0.854106C0.333374 0.479106 0.503513 0.21869 0.843791 0.0728569C1.18407 -0.0729766 1.48615 -0.0139489 1.75004 0.24994L3.91671 2.41661C4.00004 2.49994 4.06254 2.59022 4.10421 2.68744C4.14587 2.78466 4.16671 2.88883 4.16671 2.99994C4.16671 3.11105 4.14587 3.21522 4.10421 3.31244C4.06254 3.40966 4.00004 3.49994 3.91671 3.58327Z" fill="#1C1B1F" />
                            </svg>
                        </button>
                        <button className="text-sm flex items-center w-full justify-between">
                            <div className="flex gap-2"><Eye color="#94A3B8" /> Transportation</div>
                            <svg width="12" height="12" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.91671 3.58327L1.75004 5.74994C1.48615 6.01383 1.18407 6.07286 0.843791 5.92702C0.503513 5.78119 0.333374 5.52077 0.333374 5.14577L0.333374 0.854106C0.333374 0.479106 0.503513 0.21869 0.843791 0.0728569C1.18407 -0.0729766 1.48615 -0.0139489 1.75004 0.24994L3.91671 2.41661C4.00004 2.49994 4.06254 2.59022 4.10421 2.68744C4.14587 2.78466 4.16671 2.88883 4.16671 2.99994C4.16671 3.11105 4.14587 3.21522 4.10421 3.31244C4.06254 3.40966 4.00004 3.49994 3.91671 3.58327Z" fill="#1C1B1F" />
                            </svg>
                        </button>
                        <button className="text-sm flex items-center w-full justify-between">
                            <div className="flex gap-2"><Eye color="#94A3B8" /> Vehicle</div>
                            <svg width="12" height="12" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.91671 3.58327L1.75004 5.74994C1.48615 6.01383 1.18407 6.07286 0.843791 5.92702C0.503513 5.78119 0.333374 5.52077 0.333374 5.14577L0.333374 0.854106C0.333374 0.479106 0.503513 0.21869 0.843791 0.0728569C1.18407 -0.0729766 1.48615 -0.0139489 1.75004 0.24994L3.91671 2.41661C4.00004 2.49994 4.06254 2.59022 4.10421 2.68744C4.14587 2.78466 4.16671 2.88883 4.16671 2.99994C4.16671 3.11105 4.14587 3.21522 4.10421 3.31244C4.06254 3.40966 4.00004 3.49994 3.91671 3.58327Z" fill="#1C1B1F" />
                            </svg>
                        </button>
                        <button className="text-sm flex items-center w-full justify-between">
                            <div className="flex gap-2"><Eye color="#94A3B8" /> Life & Entertainment</div>
                            <svg width="12" height="12" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.91671 3.58327L1.75004 5.74994C1.48615 6.01383 1.18407 6.07286 0.843791 5.92702C0.503513 5.78119 0.333374 5.52077 0.333374 5.14577L0.333374 0.854106C0.333374 0.479106 0.503513 0.21869 0.843791 0.0728569C1.18407 -0.0729766 1.48615 -0.0139489 1.75004 0.24994L3.91671 2.41661C4.00004 2.49994 4.06254 2.59022 4.10421 2.68744C4.14587 2.78466 4.16671 2.88883 4.16671 2.99994C4.16671 3.11105 4.14587 3.21522 4.10421 3.31244C4.06254 3.40966 4.00004 3.49994 3.91671 3.58327Z" fill="#1C1B1F" />
                            </svg>
                        </button>
                        <button className="text-sm flex items-center w-full justify-between">
                            <div className="flex gap-2"><Eye color="#94A3B8" /> Communication, PC</div>
                            <svg width="12" height="12" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.91671 3.58327L1.75004 5.74994C1.48615 6.01383 1.18407 6.07286 0.843791 5.92702C0.503513 5.78119 0.333374 5.52077 0.333374 5.14577L0.333374 0.854106C0.333374 0.479106 0.503513 0.21869 0.843791 0.0728569C1.18407 -0.0729766 1.48615 -0.0139489 1.75004 0.24994L3.91671 2.41661C4.00004 2.49994 4.06254 2.59022 4.10421 2.68744C4.14587 2.78466 4.16671 2.88883 4.16671 2.99994C4.16671 3.11105 4.14587 3.21522 4.10421 3.31244C4.06254 3.40966 4.00004 3.49994 3.91671 3.58327Z" fill="#1C1B1F" />
                            </svg>
                        </button>
                        <button className="text-sm flex items-center w-full justify-between">
                            <div className="flex gap-2"><Eye color="#94A3B8" /> Financial expenses</div>
                            <svg width="12" height="12" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.91671 3.58327L1.75004 5.74994C1.48615 6.01383 1.18407 6.07286 0.843791 5.92702C0.503513 5.78119 0.333374 5.52077 0.333374 5.14577L0.333374 0.854106C0.333374 0.479106 0.503513 0.21869 0.843791 0.0728569C1.18407 -0.0729766 1.48615 -0.0139489 1.75004 0.24994L3.91671 2.41661C4.00004 2.49994 4.06254 2.59022 4.10421 2.68744C4.14587 2.78466 4.16671 2.88883 4.16671 2.99994C4.16671 3.11105 4.14587 3.21522 4.10421 3.31244C4.06254 3.40966 4.00004 3.49994 3.91671 3.58327Z" fill="#1C1B1F" />
                            </svg>
                        </button>
                        <button className="text-sm flex items-center w-full justify-between">
                            <div className="flex gap-2"><Eye color="#94A3B8" /> Investments</div>
                            <svg width="12" height="12" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.91671 3.58327L1.75004 5.74994C1.48615 6.01383 1.18407 6.07286 0.843791 5.92702C0.503513 5.78119 0.333374 5.52077 0.333374 5.14577L0.333374 0.854106C0.333374 0.479106 0.503513 0.21869 0.843791 0.0728569C1.18407 -0.0729766 1.48615 -0.0139489 1.75004 0.24994L3.91671 2.41661C4.00004 2.49994 4.06254 2.59022 4.10421 2.68744C4.14587 2.78466 4.16671 2.88883 4.16671 2.99994C4.16671 3.11105 4.14587 3.21522 4.10421 3.31244C4.06254 3.40966 4.00004 3.49994 3.91671 3.58327Z" fill="#1C1B1F" />
                            </svg>
                        </button>
                        <button className="text-sm flex items-center w-full justify-between">
                            <div className="flex gap-2"><Eye color="#94A3B8" /> Income</div>
                            <svg width="12" height="12" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.91671 3.58327L1.75004 5.74994C1.48615 6.01383 1.18407 6.07286 0.843791 5.92702C0.503513 5.78119 0.333374 5.52077 0.333374 5.14577L0.333374 0.854106C0.333374 0.479106 0.503513 0.21869 0.843791 0.0728569C1.18407 -0.0729766 1.48615 -0.0139489 1.75004 0.24994L3.91671 2.41661C4.00004 2.49994 4.06254 2.59022 4.10421 2.68744C4.14587 2.78466 4.16671 2.88883 4.16671 2.99994C4.16671 3.11105 4.14587 3.21522 4.10421 3.31244C4.06254 3.40966 4.00004 3.49994 3.91671 3.58327Z" fill="#1C1B1F" />
                            </svg>
                        </button>
                        <button className="text-sm flex items-center w-full justify-between">
                            <div className="flex gap-2"><Eye color="#94A3B8" /> <p>Others</p></div>
                            <div><svg width="12" height="12" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.91671 3.58327L1.75004 5.74994C1.48615 6.01383 1.18407 6.07286 0.843791 5.92702C0.503513 5.78119 0.333374 5.52077 0.333374 5.14577L0.333374 0.854106C0.333374 0.479106 0.503513 0.21869 0.843791 0.0728569C1.18407 -0.0729766 1.48615 -0.0139489 1.75004 0.24994L3.91671 2.41661C4.00004 2.49994 4.06254 2.59022 4.10421 2.68744C4.14587 2.78466 4.16671 2.88883 4.16671 2.99994C4.16671 3.11105 4.14587 3.21522 4.10421 3.31244C4.06254 3.40966 4.00004 3.49994 3.91671 3.58327Z" fill="#1C1B1F" />
                            </svg>
                            </div>
                        </button>
                        {/* <button className="flex items-center gap-2">
                            <Plus size={20} color="blue" />Add Category
                        </button> */}
                        <Addcategory />
                    </div>

                </CardContent>
                <CardFooter className="flex flex-col gap-4 items-start">
                    <p>Amount Range</p>
                    <div className="flex gap-4">
                        <Input placeholder="0" value={range.min} onChange={(event) => { setRange({ ...range, min: event.target.value }), console.log(range); }} />
                        <Input placeholder="1000" value={range.max} onChange={(event) => { setRange({ ...range, max: event.target.value }), console.log(range); }} />

                    </div>
                    <Slider defaultValue={[33]} min={range.min} max={range.max} step={50} />
                    <div className="flex w-full justify-between">
                        <p>{range.min}</p>
                        <p>{range.max}</p>
                    </div>
                </CardFooter>

            </Card>

        </div>
    )
}
