import React, { useState } from "react";
import {toast} from 'react-hot-toast';

function Contact() {
  const ACCESS_KEY =  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
   

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const form = event.target; // Get the form element
    const formData = new FormData(form);

    formData.append("access_key", ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

       
   if(res.success){
    // console.log("Success", res);
    toast.success("Message sent successfully! 🎉");
    form.reset();
   }else{
    toast.error("Error sending message! ❌");
   }
   

    
  }catch (error) {
    toast.error("Something went wrong. Try again!");
    console.error("Error:", error);
  }
};



  return (
    <div className="my-24 lg:my-18">
      <h2 className="mt-12 lg:mt-10 mb-2 text-center text-4xl">Contact Me</h2>
      <div className="w-20 h-1 bg-[#9D98E6] mx-auto mb-20 lg:mb-10 "></div>

      <form onSubmit={onSubmitHandler} className="w-full ">
        <div className="flex flex-col justify-center items-center gap-4  lg:mb-4">
          <input
            required
            className="p-3 border border-[#9D98E6] bg-transparent text-white focus:outline-none  text-sm font-normal rounded-lg lg:w-md w-full  "
            type="text"
            name="name"
            placeholder="Enter your name"
          />
          <input
            required
            className="p-3 border border-[#9D98E6] bg-transparent text-white focus:outline-none  text-sm font-normal rounded-lg lg:w-md w-full "
            type="email"
            name="email"
            placeholder="Enter your email"
          />
          <textarea
            required
            name="message"
            className="p-3 border border-[#9D98E6]  text-sm text-white focus:outline-none  font-normal rounded-lg lg:w-md w-full"
            placeholder="Write a message..."
          />
          <button
            type="submit"
            className="bg-[#9D98E6] text-black cursor-pointer rounded-lg px-4 py-2 mb-4 ml-62 md:ml-155 lg:ml-93 text-sm font-normal"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
