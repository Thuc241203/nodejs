// import { v2 as cloudinary } from "cloudinary";
// import { CloudinaryStorage } from "multer-storage-cloudinary";
// import multer from "multer";

// export const uploadMulter = (req, res, next) => {
//   cloudinary.config({
//     cloud_name: "dwiloq9fa",
//     api_key: "195721371166914",
//     api_secret: "gw_S0bx-oZbnECwg6EtRXtqMbEc",
//   });

//   const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//       folder: "nodejs",
//       format: "png",
//       public_id: "some_unique_id",
//     },
//   });

//   const upload = multer({ storage: storage });
//   req.files = upload.array("images", 10);
//   next();
// };
