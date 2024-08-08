import * as Icons from "react-icons/fa6";

import { useState, useEffect, useContext } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";

const cat = [
    "FaHouse",
    "FaGift",
    "FaUtensils",
    "FaWineGlass",
    "FaTruckPickup",
    "FaTags",
    "FaItunesNote",
    "FaHeadSideMask",
    "FaPlaneUp",
    "FaLandmarkFlag",
    "FaMemory",
    "FaPersonBiking",
    "FaPizzaSlice",
    "FaRegChessPawn",
    "FaRobot",
    "FaSatelliteDish",
    "FaSterlingSign",
    "FaAppStore"
];

import { Plus } from 'lucide-react';
import { UserContext } from "./context";
import { getDate } from "date-fns";

const color = [
    { color: "blue", colorCode: "#0000FF" },
    { color: "cyan", colorCode: "#00FFFF" },
    { color: "green", colorCode: "#008000" },
    { color: "yellow", colorCode: "#FFFF00" },
    { color: "orange", colorCode: "#FFA500" },
    { color: "purple", colorCode: "#800080" },
    { color: "red", colorCode: "#FF0000" },
];

export const Addcategory = () => {
    const { newCategory, setNewCategory, userInfo, allCategories, setAllCategories, getData } = useContext(UserContext);

    // console.log(newCategory, "newCate");
    // console.log(allCategories, "allCategories");
    // console.log(userInfo, "info");

    const URL = "http://localhost:3001"
    // const [selectedCat, setSelectedCat] = useState('');
    const [selectedColor, setSelectedColor] = useState('#0000FF'); // default color
    // const [selectedInput, setSelectedInput] = useState('');


    // const handleCatChange = (e) => {
    //     setNewCategory({ ...newCategory, icon: e });
    // };

    // const handleColorChange = (colorCode) => {
    //     // setSelectedColor(colorCode);
    //     setNewCategory({ ...newCategory, color: colorCode })
    // };


    const handleCatChange = (icon) => {
        setNewCategory({ ...newCategory, icon });
    };

    const handleColorChange = (colorCode) => {
        setSelectedColor(colorCode);
        setNewCategory({ ...newCategory, color: colorCode });
    };

    // const handleSaveChanges = () => {
    //     console.log('Selected Category:', selectedCat);
    //     console.log('Selected Color:', selectedColor);
    //     console.log('Selected Input:', selectedInput);
    // };

    const FaIcon = newCategory.icon ? Icons[newCategory.icon] : null;

    const createCategory = async () => {

        try {
            const response = await axios.post(`${URL}/categories`,
                newCategory
            );

            getData()
        } catch (error) {
            console.error(error)
        }
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="w-full flex gap-2" variant="outline">
                        <div className="border-2 border-blue-600 rounded-full bg-blue-600">
                            <Plus size={16} color="white" />
                        </div>
                        <div> Add Category </div>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Category</DialogTitle>
                    </DialogHeader>
                    <div className="flex gap-4">
                        <Select onValueChange={handleCatChange}>
                            <SelectTrigger className="w-fit">
                                <SelectValue placeholder={FaIcon ? <FaIcon style={{ color: selectedColor }} /> : "Select Icon"} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <div className="grid grid-cols-6 grid-rows-4 py-4 pr-4">
                                        {cat.map((item, index) => {
                                            const Icon = Icons[item];
                                            return (
                                                <SelectItem key={index} value={item}>
                                                    <div style={{ color: selectedColor }}>
                                                        <Icon size={24} />
                                                    </div>
                                                </SelectItem>
                                            );
                                        })}
                                    </div>
                                    <div className="flex justify-between pr-4 pl-8 py-4 border-t-2">
                                        {color.map((item, index) => (
                                            <button
                                                key={index}
                                                style={{ backgroundColor: item.colorCode }}
                                                className={`w-8 h-8 rounded-full border-2 border-gray-200 ${selectedColor === item.colorCode ? 'border-black' : ''}`}
                                                onClick={() => handleColorChange(item.colorCode)}
                                            />
                                        ))}
                                    </div>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Input onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })} />
                    </div>
                    <DialogFooter className="flex w-96 px-0 justify-center">
                        <button
                            className="bg-green-600 rounded-2xl p-2 w-full text-white"
                            type="button"
                            onClick={createCategory}
                        >
                            Save changes
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};
