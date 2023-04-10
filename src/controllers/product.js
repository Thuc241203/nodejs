import Joi from "joi";
import Product from "../models/product";
const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  image: Joi.string(),
  description: Joi.string(),
  categoryId: Joi.string().required(),
});

export const getAll = async function (req, res) {
  try {
    // const { data } = await axios.get("http://localhost:3002/products");
    const data = await Product.find();
    if (data.length === 0) {
      return res.status(400).json({ message: "khong co san pham nao" });
    }
    return res.status(200).json(data);
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};

export const remove = async (req, res) => {
  try {
    // await axios.delete(`http://localhost:3002/products/${req.params.id}`);
    const product = await Product.findByIdAndDelete(req.params.id);
    return res.json({ message: "xoa thanh cong", product });
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};

export const create = async (req, res) => {
  try {
    const body = req.body;
    const { error } = productSchema.validate(body);
    if (error) {
      const error = error.details.map((errorItem) => errorItem.message);
      return res.status(400).json({
        message: error,
      });
    }

    const data = await Product.create(body);
    if (!data) {
      return res.status(400).json({ message: "them san pham that bai" });
    }
    return res.json({
      message: "them san pham thanh cong",
      data,
    });
  } catch (error) {
    return res.json({
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    // const { data } = await axios.put(
    //   `http://localhost:3002/products/${id}`,
    //   body
    // );
    const data = await Product.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    if (!data) {
      return res.status(400).json({ message: "cap nhap san pham that bai" });
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

export const get = async function (req, res) {
  try {
    // const { data } = await axios.get(
    //   `http://localhost:3002/products/${req.params.id}`
    // );
    const data = await Product.findOne({ _id: req.params.id });
    if (!data) {
      return res.status(400).json({ message: "khong co san pham nao" });
    }
    return res.json(data);
  } catch (error) {
    return res.json({
      message: error,
    });
  }
};
