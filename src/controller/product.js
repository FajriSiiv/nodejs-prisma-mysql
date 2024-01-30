import { PrismaClient } from "@prisma/client";
import fs from "fs";

const prisma = new PrismaClient();

export const getProduct = async (req, res) => {
  try {
    const product = await prisma.makanan.findMany();

    res.json(product);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const newProduct = await prisma.makanan.create({
      data: req.body,
    });

    res.json({ newProduct, message: "Create new product" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const editProduct = async (req, res) => {
  const { name, price, description, category } = req.body;
  const { id } = req.params;

  try {
    const editedProduct = await prisma.makanan.update({
      where: { id: id },
      data: {
        name: name,
        price: price,
        description: description,
        category: category,
      },
    });

    res.json(editedProduct);
  } catch (error) {
    res.json({ error: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    await prisma.makanan.delete({ where: { id: req.params.id } });

    res.json({ message: "Successfuly deleted product" });
  } catch (error) {
    res.json({ error: error.message });
  }
};
