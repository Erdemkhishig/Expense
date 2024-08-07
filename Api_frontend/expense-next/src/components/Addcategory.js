import * as Icons from "react-icons/fa6";

import { useState, useEffect } from "react";
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

    const URL = "http://localhost:3001"
    const [selectedCat, setSelectedCat] = useState('');
    const [selectedColor, setSelectedColor] = useState('#0000FF'); // default color
    const [selectedInput, setSelectedInput] = useState('');


    const handleCatChange = (e) => {
        setSelectedCat(e);
    };

    const handleColorChange = (colorCode) => {
        setSelectedColor(colorCode);
    };

    const handleSaveChanges = () => {
        console.log('Selected Category:', selectedCat);
        console.log('Selected Color:', selectedColor);
        console.log('Selected Input:', selectedInput);
    };

    const FaIcon = selectedCat ? Icons[selectedCat] : null;

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`${URL}/categories`);
                setCategories(response.data);
            } catch (error) {
                console.error("There was an error fetching the accounts!", error);
            }
        };
        getData();
    }, []);

    const createCategory = async () => {
        const newCategory = {
            category: selectedCat,
            color: selectedColor,
            name: selectedInput,
        };
        try {
            const response = await axios.post(`${URL}/categories`,
                newCategory
            );
            setCategories([...categories, response.data]);
        } catch (error) {
            console.error(error)
        }
    };

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
                        <Select onValueChange={(val) => handleCatChange(val)}>
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
                                                        <Icon />
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
                                            >
                                                {/* Empty button to show color */}
                                            </button>
                                        ))}
                                    </div>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Input onChange={(e) => setSelectedInput(e.target.value)} />
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
