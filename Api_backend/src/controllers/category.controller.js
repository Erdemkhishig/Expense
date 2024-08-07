const fs = require("fs");
const path = require("path");
const { v4 } = require('uuid');

const getAllCategories = async (req, res) => {
    try {
        const filePath = path.join(__dirname, "..", "data", "categories.json");
        const rawData = fs.readFileSync(filePath);
        const categories = JSON.parse(rawData);
        res.json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const createCategory = async (req, res) => {
    try {
        const filePath = path.join(__dirname, "..", "data", "categories.json");
        const rawData = fs.readFileSync(filePath);
        const categories = JSON.parse(rawData);
        const newCategory = { ...req.body, id: v4(), createdAt: new Date().toISOString(), };
        categories.push(newCategory);
        fs.writeFileSync(filePath, JSON.stringify(categories));
        res.json(newCategory)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const getCategoryById = async (req, res) => {
    const { id } = req.params;

    try {
        const filePath = path.join(__dirname, '..', 'data', 'categories.json');
        const rawData = fs.readFileSync(filePath);
        const categories = JSON.parse(rawData);

        const category = categories.find(cat => cat.id === id);

        if (category) {
            res.json(category);
        } else {
            res.status(404).json({ error: "Category not found" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { getAllCategories, createCategory, getCategoryById };






