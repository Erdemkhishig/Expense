
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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



export const Navbar = ({ }) => {
    return (
        <div className="flex items-center justify-between py-4 px-16 bg-white ">
            <div className="flex gap-8">
                <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.8297 9.36772V0.300781H9.56526V9.36772H0.300781V18.6322H9.56526V27.6991H18.8297V18.6322H28.0942V9.36772H18.8297ZM18.8297 18.4347H9.56526V9.56665H18.8297V18.4347Z" fill="#0166FF" />
                </svg>
                <span>Dashboard</span>
                <span className="font-bold">Records</span>
            </div>
            <div className="flex gap-8">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="bg-blue-500 rounded-2xl p-4 text-white" variant="outline">+ Record</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Edit profile</DialogTitle>
                            <DialogDescription>
                                Make changes to your profile here. Click save when you are done.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    defaultValue="Pedro Duarte"
                                    className="col-span-3"
                                />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Username
                                </Label>
                                <Input
                                    id="username"
                                    defaultValue="@peduarte"
                                    className="col-span-3"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="submit">Save changes</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                <Avatar>
                    <AvatarImage src="Avatar.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>



            </div>

        </div>
    )
}