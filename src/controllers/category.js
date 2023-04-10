import Category from "../models/category";
import Joi from "joi";
import Product from "../models/product";
import category from "../models/category";

const categorySchema = Joi.object({
  name: Joi.string().required(),
});

export const create = async (req, res) => {
  try {
    const body = req.body;
    const { error } = categorySchema.validate(body);
    if (error) {
      const error = error.details.map((errorItem) => errorItem.message);
      return res.status(400).json({
        message: error,
      });
    }
    const data = await Category.create(body);
    if (!data) {
      return res.status(400).json({ message: "them danh muc that bai" });
    }
    return res.json({
      message: "them danh muc thanh cong",
      data,
    });
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};

export const get = async function (req, res) {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(400).json({ message: "khong co danh muc nao" });
    }
    const products = await Product.find({ categoryId: req.params.id });

    return res.json({ ...category.toObject(), products });
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};

export const getAll = async function (req, res) {
  try {
    const data = await category.find();
    if (data.length === 0) {
      return res.status(400).json({ message: "khong co danh muc nao" });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await category.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    if (!data) {
      return res.status(400).json({ message: "cap nhap danh muc that bai" });
    }
    return res.json({
      message: "cap nhap thanh cong",
      data,
    });
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};

export const remove = async (req, res) => {
  try {
    const categorys = await category.findByIdAndDelete(req.params.id);
    return res.json({ message: "xoa thanh cong", categorys });
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};
