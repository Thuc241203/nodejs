// import cloudinary from "../config/cloudinaryConfig";

// export const uploadImage = async (req, res) => {
//   const images = req.files.map((file) => file.path);

//   const uploadImages = [];
//   for (const image of images) {
//     try {
//       const result = await cloudinary.uploader.upload(image);
//       uploadImages.push({ url: result.secure_url, publicID: result.public_id });
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return res.json({ urls: uploadImages });
// };

// export const deleteImage = async (req, res) => {
//   const publicId = req.params.publicId;
//   try {
//     const result = await cloudinary.uploader.destroy(publicId);
//     res.status(200).json({ message: "xoa anh thanh cong", result });
//   } catch (error) {
//     res.status(500).json({ error: "error deleting image" });
//   }
// };
