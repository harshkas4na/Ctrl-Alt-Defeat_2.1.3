import React, { useEffect, useState } from "react";
import "./PagesCss/BuyerRegister.css"; // Import your stylesheet
import logo from "./img/logo.png";
import carousel1 from "./img/carousel1.png";
import carousel2 from "./img/carousel2.png";
import carousel3 from "./img/carousel3.png";
import { useRecoilValue } from "recoil";
import { userAtom } from "../store/userAtoms/user";
// import axios from 'axios';
import toast from "react-hot-toast";

const AddItemForm = () => {
  const user = useRecoilValue(userAtom);
  const sellerId = user?._id;

  const [formData, setFormData] = useState({
    name: "Artwork 3",
    seller: sellerId,
    description: "", //by form
    sold: false,
    itemPic: "",
    buyer: null,
    startingPrice: null,
    soldPrice: null,
    category: "",
    eventName: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithPic = new FormData();
      formDataWithPic.append("name", formData.name);
      formDataWithPic.append("seller", formData.seller);
      formDataWithPic.append("description", formData.description);
      formDataWithPic.append("sold", formData.sold);
      formDataWithPic.append("itemPic", formData.itemPic); // Append file object to form data
      formDataWithPic.append("buyer", formData.buyer);
      formDataWithPic.append("startingPrice", formData.startingPrice);
      formDataWithPic.append("soldPrice", formData.soldPrice);
      formDataWithPic.append("category", formData.category);
      formDataWithPic.append("eventName", formData.eventName);

      console.log("formDataWithPic:", formDataWithPic);
      const res = await fetch(`http://localhost:3000/seller/item/${sellerId}`, {
        method: "POST",
        body: formDataWithPic,
      });

      const data = await res.json();
      console.log(formDataWithPic);
      console.log(data);
      toast.success("Item Added Successfully");
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong");
    }
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({
        ...formData,
        [name]: files[0], // Store the file object
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  return (
    <main className={"sign-up-mode w-full h-screen bg-gradient-to-b from-stone-950 to-stone-700"}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            <form
              action={`http://localhost:3000/seller/item/${sellerId}`}
              autoComplete="off"
              className="sign-up-form"
              encType="multipart/form-data"
              onSubmit={handleSubmit}
            >
              <div className="actual-form">
                {/* <h1 className="mb-12 text-4xl ml-12 text-[#8b746a] font-bold">
                  Add Your Item
                </h1> */}
                <div className="heading">
                <h2>Add Your Item</h2>
                </div>
                <div class="scrollableArea size-96">
                  <p className="font-semibold text-xl mt-6 mb-4">Item-Details:</p>

                  <div class="input-wrap ">
                    <input
                      type="text"
                      class="input-field"
                      onChange={handleChange}
                      name="name"
                      autocomplete="off"
                    />
                    <label className="active">Item Name</label>
                  </div>
                  <label className="active mt-52 ml-0 static">Item Image</label>
                  <div class="input-wrap itimg">
                    
                    <input
                      type="file"
                      class="input-field"
                      onChange={handleChange}
                      name="itemPic"
                      autocomplete="off"

                    />
                  </div>
                  <div class="input-wrap">
                    <input
                      type="text"
                      class="input-field"
                      onChange={handleChange}
                      name="description"
                      autocomplete="off"
                    />
                    <label className="active">Item Description</label>
                  </div>
                  <div class="input-wrap">
                    <input
                      type="text"
                      class="input-field"
                      onChange={handleChange}
                      name="category"
                      autocomplete="off"
                    />
                    <label className="active">Category:</label>
                  </div>
                  <div class="input-wrap">
                    <input
                      type="text"
                      class="input-field"
                      onChange={handleChange}
                      name="startingPrice"
                      autocomplete="off"
                    />
                    <label className="active">Base price</label>
                  </div>

                  <div class="input-wrap">
                    <input
                      type="text"
                      class="input-field"
                      onChange={handleChange}
                      name="eventName"
                      autocomplete="off"
                    />
                    <label className="active">Event Name</label>
                  </div>
                </div>
                <div className='add mt-20'>
                <input type="submit" value="Submit" className="sign-btn" />
                </div>
              </div>
            </form>
          </div>


          
          <div className="carousel ">
            <div className="images-wrapper">
              <img src={carousel1} class="image img-1 show" alt="" />
            </div>

            <div className="text-slider">
              <div className="text-wrap">
                <div className="text-group">
                  <h2>Real-time bidding auction platform.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AddItemForm;
