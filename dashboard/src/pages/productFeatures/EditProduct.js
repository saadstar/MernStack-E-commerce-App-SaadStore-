import React, { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import "../usersFeatures/user.css";
import axios from "axios";

export const EditProduct = (props) => {
 const [img, setImg] = useState(undefined);
 const [imgPer, setImgPer] = useState(0);
 const [img2, setImg2] = useState(undefined);
 const [img2Per, setImg2Per] = useState(0);
 const [isNew, setIsNew] = useState(false);
  const [inputs, setInputs] = useState({});
  
 const handleChange = (e) => {
   setInputs((prev) => {
     return { ...prev, [e.target.name]: e.target.value };
   });
  };
   const uploadFile = (file, urlType) => {
     const storage = getStorage(app);
     const fileName = new Date().getTime() + file.name;
     const storageRef = ref(storage, fileName);
     const uploadTask = uploadBytesResumable(storageRef, file);
     uploadTask.on(
       "state_changed",
       (snapshot) => {
         const progress =
           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         urlType === "img"
           ? setImgPer(Math.round(progress))
           : setImg2Per(Math.round(progress));
         switch (snapshot.state) {
           case "paused":
             console.log("Upload is paused");
             break;
           case "running":
             console.log("Upload is running");
             break;
           default:
             break;
         }
       },
       (error) => {},
       () => {
         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
           setInputs((prev) => {
             return { ...prev, [urlType]: downloadURL };
           });
         });
       }
     );
   };
   useEffect(() => {
     img && uploadFile(img, "img");
   }, [img]);
   useEffect(() => {
     img2 && uploadFile(img2, "img2");
   }, [img2]);
   const handleEditProduct = async () => {
     try {
       await axios.put(`http://localhost:3500/api/products/${props.editData.id}`, {
         ...inputs,
         isNew,
       });
       props.setOpen(false);
       setInputs({});
     } catch (err) {
       console.log(err);
     }
   };
  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setEditOpen(false)}>
          X
        </span>
        <h1>{`Edit ${props.slug}`}</h1>
        <form>
          <div className="item">
            <label className="label">
              Upload <span>(optional)</span> main Image
            </label>
            {imgPer > 0 ? (
              "Done" + imgPer + "%"
            ) : (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImg(e.target.files[0])}
              />
            )}
          </div>
          <div className="item">
            <label className="label">Title:</label>
            <input
              type="text"
              placeholder={props.editData.title}
              name="title"
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label className="label">
              Upload seconed Image<span>(optional)</span>
            </label>
            {img2Per > 0 ? (
              "Done" + img2Per + "%"
            ) : (
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImg2(e.target.files[0])}
              />
            )}
          </div>
          <div className="item">
            <label className="label">High Price:</label>
            <input
              type="number"
              name="oldPrice"
              placeholder={props.editData.oldPrice}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label className="label">Category:</label>
            <input
              type="text"
              name="category"
              placeholder={props.editData.category}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label className="label">Description</label>
            <input
              type="textarea"
              name="desc"
              placeholder={props.editData.desc}
              onChange={handleChange}
            />
          </div>
          <div className="item">
            <label className="label">Price:</label>
            <input
              type="number"
              name="price"
              placeholder={props.editData.price}
              onChange={handleChange}
            />
          </div>
          <div className="userItems">
            <div className="item">
              <label className="label">isNew</label>
              <input
                type="checkbox"
                name="isNew"
                onChange={() => setIsNew(!isNew)}
                className="checkbox"
              />
            </div>
          </div>
          <button className="addButton" onClick={handleEditProduct}>
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};
