// "use client";

// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone } from "lucide-react";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     age: "",
//     email:"",
//     gender: "",
//     height: "",
//     weight: "",
//     location: "",
//     occupation: "",
//     primaryGoal: "",
//     otherGoal: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if(!emailRegex.test(formData.email))
//     {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     const subject = "New Contact Form Submission";

//     const finalGoal = formData.primaryGoal === "Other" && formData.otherGoal.trim() !== "" ? formData.otherGoal: formData.primaryGoal;

//     const body = `
//     Full Name: ${formData.fullName}
//     Email: ${formData.email}
//     Age: ${formData.age}
//     Gender: ${formData.gender}
//     Height: ${formData.height}
//     Weight: ${formData.weight}
//     Location: ${formData.location}
//     Occupation: ${formData.occupation}
//     Primary Goal: ${finalGoal}`;

//     const mailtoLink = `mailto:nutricurediet@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

//     window.location.href = mailtoLink;

//     // const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nutricurediet@gmail.com&su=${encodeURIComponent( subject)}&body=${encodeURIComponent(body)}`;
//     // window.open(gmailUrl, "_blank");

//   };

//   const inputClass =
//     "w-full p-4 h-10 pl-3 mt-4 rounded-xl border-2 border-[#92BC34] bg-white text-[#1B5C24] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ECBE59] focus:border-[#1B5C24] transition";

//   const selectClass =
//     "w-full p-4 h-10 mt-4 rounded-xl border-2 border-[#92BC34] bg-white text-[#1B5C24] appearance-none focus:outline-none focus:ring-2 focus:ring-[#ECBE59] focus:border-[#1B5C24] transition";
  
//   return (
//     <div className="flex flex-col min-h-screen bg-[#ECBE59] ">
//       <Header />

//       <div className="h-24 md:h-28"></div>

//       {/* Hero Section */}
//      <section className="bg-[#1B5C24]  py-20 px-5 md:px-20 flex flex-col md:flex-row items-stretch gap-10 ">

//   {/* Left Side Text */}
//      <div className="w-full md:w-1/2 bg-[#18401A] p-8 rounded-xl flex flex-col justify-center">
//         <h1 className="text-4xl md:text-5xl font-bold mb-5">Let's Meet & <span className="text-4xl md:text-5xl font-bold mb-5 text-secondary">Talk Nutrition</span></h1>
//         <p className="mb-5 text-lg">
//            Send us a message and we’ll get back to you. Your health goals are our priority!
//         </p>
//         <div className="mt-6 space-y-4">

//       <div className="mt-6 flex flex-col lg:flex-row gap-4">  

//   {/* Email */}
//         <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md 
//                   px-5 py-4 rounded-xl shadow-md border border-white/20
//                   transition hover:bg-white/20 w-80">
    
//     <div className="bg-[#1B5C24]/20 p-3 rounded-lg">
//       <Mail className="w-5 h-5 text-secondary"/>
//     </div>

//     <div>
//       <p className="text-sm text-[#1B5C24]/70 font-medium">
//         Email
//       </p>
//       <a 
//         href="mailto:nutricurediet@gmail.com" 
//         className="text-[#1B5C24] font-bold hover:underline break-all"
//       >
//         nutricurediet@gmail.com
//       </a>
//     </div>
//         </div>

//   {/* Phone */}
//        <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md 
//                   px-5 py-4 rounded-xl shadow-md border border-white/20
//                   transition hover:bg-white/20 w-80">
    
//     <div className="bg-[#1B5C24]/20 p-3 rounded-lg">
//       <Phone className="w-5 h-5 text-secondary"/>
//     </div>

//     <div>
//       <p className="text-sm text-[#1B5C24]/70 font-medium">
//         Phone
//       </p>
//       {/* <p className="text-[#1B5C24] font-bold">
//         96256 91566
//       </p> */}
//       <a href="tel:9625691566" className="text-[#1B5C24] font-bold hover:underline">96256 91566</a>
//     </div>
//        </div>
//      </div>
//   </div>


//         <ol className="mt-6 space-y-4">
//   <li className="flex  justify-between items-center bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl shadow-md border border-white/20">
//     <span className="font-semibold text-lg">Sunday</span>
//     <span className="text-red-400 font-medium">Closed</span>
//   </li>

//   <li className="flex justify-between items-center bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl shadow-md border border-white/20">
//     <span className="font-semibold text-lg">Mon – Thu</span>
//     <span className="text-green-300 font-medium">9 A.M – 7 P.M</span>
//   </li>

//   <li className="flex justify-between items-center bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl shadow-md border border-white/20">
//     <span className="font-semibold text-lg">Friday</span>
//     <span className="text-green-300 font-medium">9 A.M – 5 P.M</span>
//   </li>
// </ol>
//         {/* <p className="mt-5">Sunday: Closed <br/> Mon-Thu: 9 A.M - 7 P.M <br/> Fri: 9 A.M - 5 P.M</p> */}
//      </div>



//   {/* Right Side Image */}
//      <div className="w-full md:w-1/2 flex justify-center items-center">
//         <img
//           src="https://indiannutritionist.com/wp-content/uploads/2023/04/contact.svg"
//           alt="Nutritionist Meeting"
//           className="w-full h-auto max-w-lg rounded-xl "
//         />
//     </div>
//   </section>

//       {/* Contact Form Section */}
//       <section className="flex flex-col md:flex-row gap-10 py-20 px-5 md:px-20 bg-[#92BC34] text-[#1B5C24]">
        
//         {/* Info Panel */}
//         <div
//           className="flex-1 bg-[#ECBE59] p-10 rounded-xl shadow-lg mb-6"
//         >
//           <h2 className="text-3xl font-bold mb-5">CALL US, WRITE US, OR<span className="text-3xl font-bold mb-5 text-secondary"> KNOCK ON OUR DOOR </span></h2>
//           <p className="mb-3">We would be happy to meet you and learn about your nutritional needs.</p>
//           <p className="mb-3">Email: nutricurediet@gmail.com</p>
//           <p className="mb-3">Reach out on our social media channels!</p>
//           <img src="https://indiannutritionist.com/wp-content/uploads/2023/04/Mail-icon.svg" alt="Contact Info" className="mt-5 rounded-lg" />
//         </div>

//         {/* Form */}
//         <form
//           onSubmit={handleSubmit}
//           className="flex-1  p-10 rounded-xl shadow-lg space-y-5 relative overflow-visible mb-6"
//         >
//           <h2 className="text-3xl font-bold text-secondary mb-5">Send Us a Message</h2>

//           {/* Full Name & Age Row */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
//             <input
//               type="text"
//               name="fullName"
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={handleChange}
//               className={inputClass}
//               required
//             />
//             <input
//               type="number"
//               name="age"
//               placeholder="Age"
//               value={formData.age}
//               onChange={handleChange}
//               className={inputClass}
//               required
//             />
//           </div>

//           {/* Email */}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             className={inputClass}
//             required
//           />

//           {/* Gender */}
//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             className={selectClass}
//             required
//           >
//             <option value="" disabled>Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//           </select>

//           {/* Height & Weight Row */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
//             <input
//               type="number"
//               name="height"
//               placeholder="Height (cm)"
//               value={formData.height}
//               onChange={handleChange}
//               className={inputClass}
//               required
//             />
//             <input
//               type="number"
//               name="weight"
//               placeholder="Weight (kg)"
//               value={formData.weight}
//               onChange={handleChange}
//               className={inputClass}
//               required
//             />
//           </div>

//           {/* Location */}
//           <input
//             type="text"
//             name="location"
//             placeholder="Location (City)"
//             value={formData.location}
//             onChange={handleChange}
//             className={inputClass}
//             required
//           />

//           {/* Occupation */}
//           <select
//             name="occupation"
//             value={formData.occupation}
//             onChange={handleChange}
//             className={selectClass}
//             required
//           >
//             <option value="" disabled>Select Occupation</option>
//             <option value="sedentary">Sedentary</option>
//             <option value="moderate">Moderate</option>
//             <option value="active">Active</option>
//           </select>

//           {/* Primary Goal */}
//           <select
//             name="primaryGoal"
//             value={formData.primaryGoal}
//             onChange={handleChange}
//             className={selectClass}
//             required
//           >
//             <option value="" disabled>Select Primary Goal</option>
//             <option value="Fat loss">Fat loss</option>
//             <option value="Muscle gain">Muscle gain</option>
//             <option value="Improve stamina">Improve stamina</option>
//             <option value="Manage diabetes">Manage diabetes</option>
//             <option value="Manage thyroid">Manage thyroid</option>
//             <option value="Improve gut health">Improve gut health</option>
//             <option value="PCOS management">PCOS management</option>
//             <option value="Blood pressure control">Blood pressure control</option>
//             <option value="General wellness">General wellness</option>
//             <option value="Other">Other</option>
//           </select>

//           {formData.primaryGoal === "Other" && (
//             <input
//               type="text"
//               name="otherGoal"
//               placeholder="Specify your goal"
//               value={formData.otherGoal}
//               onChange={handleChange}
//               className={inputClass}
//             />
//           )}

//           <button
//             type="submit"
//             style={{ backgroundColor: "#065f46", color: "#ffffff" }}
//             className="w-full mt-4 p-4 h-10 cursor-pointer rounded-xl bg-green-900 text-white font-bold text-center hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-700 border-none appearance-none transition-colors shadow-md"
//           >
//             Submit
//           </button>
//         </form>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default ContactUs;



"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    location: "",
    occupation: "",
    primaryGoal: "",
    otherGoal: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(formData.email))
    {
      alert("Please enter a valid email address.");
      return;
    }

    const subject = "New Contact Form Submission";

    const finalGoal = formData.primaryGoal === "Other" && formData.otherGoal.trim() !== "" ? formData.otherGoal: formData.primaryGoal;

    const body = `
    Full Name: ${formData.fullName}
    Age: ${formData.age}
    Gender: ${formData.gender}
    Height: ${formData.height}
    Weight: ${formData.weight}
    Location: ${formData.location}
    Occupation: ${formData.occupation}
    Primary Goal: ${finalGoal}`;

    const mailtoLink = `mailto:nutricurediet@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    // const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=nutricurediet@gmail.com&su=${encodeURIComponent( subject)}&body=${encodeURIComponent(body)}`;
    // window.open(gmailUrl, "_blank");

  };

  const inputClass =
    "w-full p-4 h-10 pl-3 mt-4 rounded-xl border-2 border-[#92BC34] bg-white text-[#1B5C24] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ECBE59] focus:border-[#1B5C24] transition";

  const selectClass =
    "w-full p-4 h-10 mt-4 rounded-xl border-2 border-[#92BC34] bg-white text-[#1B5C24] appearance-none focus:outline-none focus:ring-2 focus:ring-[#ECBE59] focus:border-[#1B5C24] transition";
  
  return (
    <div className="flex flex-col min-h-screen bg-[#ECBE59] ">
      <Header />

      <div className="h-24 md:h-28"></div>

      {/* Hero Section */}
     <section className="bg-[#1B5C24]  py-20 px-5 md:px-20 flex flex-col md:flex-row items-stretch gap-10 ">

  {/* Left Side Text */}
     <div className="w-full md:w-1/2 bg-[#18401A] p-8 rounded-xl flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-5">Let's Meet & <span className="text-4xl md:text-5xl font-bold mb-5 text-secondary">Talk Nutrition</span></h1>
        <p className="mb-5 text-lg">
           Send us a message and we’ll get back to you. Your health goals are our priority!
        </p>
        <div className="mt-6 space-y-4">

      <div className="mt-6 flex flex-col lg:flex-row gap-4">  

  {/* Email */}
      <a href="mailto:nutricurediet@gmail.com" className="block w-max">
          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md 
                  px-5 py-4 rounded-xl shadow-md border border-white/20
                  transition hover:bg-white/20 w-80 cursor-pointer">
    
    <div className="bg-[#1B5C24]/20 p-3 rounded-lg">
      <Mail className="w-5 h-5 text-secondary"/>
    </div>

    <div>
      <p className="text-sm text-[#1B5C24]/70 font-medium">
        Email
      </p>
      <p className="text-[#1B5C24] font-bold break-all hover:underline">
        nutricurediet@gmail.com
      </p>
    </div>
          </div>
      </a>

  {/* Phone */}
      <a href="tel:9625691566" className="block w-max">
         <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md 
                  px-5 py-4 rounded-xl shadow-md border border-white/20
                  transition hover:bg-white/20 w-80 cursor-pointer">
    
    <div className="bg-[#1B5C24]/20 p-3 rounded-lg">
      <Phone className="w-5 h-5 text-secondary"/>
    </div>

    <div>
      <p className="text-sm text-[#1B5C24]/70 font-medium">
        Phone
      </p>
      <p className="text-[#1B5C24] font-bold hover:underline">
        96256 91566
      </p>
    </div>
         </div>
      </a>
     </div>
  </div>


        <ol className="mt-6 space-y-4">
  <li className="flex  justify-between items-center bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl shadow-md border border-white/20">
    <span className="font-semibold text-lg">Sunday</span>
    <span className="text-red-400 font-medium">Closed</span>
  </li>

  <li className="flex justify-between items-center bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl shadow-md border border-white/20">
    <span className="font-semibold text-lg">Mon – Thu</span>
    <span className="text-green-300 font-medium">9 A.M – 7 P.M</span>
  </li>

  <li className="flex justify-between items-center bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl shadow-md border border-white/20">
    <span className="font-semibold text-lg">Friday</span>
    <span className="text-green-300 font-medium">9 A.M – 5 P.M</span>
  </li>
</ol>
        {/* <p className="mt-5">Sunday: Closed <br/> Mon-Thu: 9 A.M - 7 P.M <br/> Fri: 9 A.M - 5 P.M</p> */}
     </div>



  {/* Right Side Image */}
     <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src="https://indiannutritionist.com/wp-content/uploads/2023/04/contact.svg"
          alt="Nutritionist Meeting"
          className="w-full h-auto max-w-lg rounded-xl "
        />
    </div>
  </section>

      {/* Contact Form Section */}
      <section className=" py-20 px-5 md:px-20 bg-[#92BC34] text-[#1B5C24]">
        
        {/* Info Panel */}
        <div
          className=" bg-[#ECBE59] p-5 md:p-10 rounded-xl shadow-lg mb-6"
        >
          <h2 className="text-xl md:text-3xl font-bold mb-5 text-center p-1 ">CALL US, WRITE US, OR<span className="text-xl md:text-3xl font-bold mb-5 text-secondary"> KNOCK ON OUR DOOR </span></h2>
          <p className="mb-3 text-center">We would be happy to meet you and learn about your nutritional needs.</p>
          <p className="mb-3 text-center">Email: nutricurediet@gmail.com</p>
          <p className="mb-3 text-center">Reach out on our social media channels!</p>
          {/* <img src="https://indiannutritionist.com/wp-content/uploads/2023/04/Mail-icon.svg" alt="Contact Info" className="mt-5 rounded-lg" /> */}

          <form
          onSubmit={handleSubmit}
          className=" p-6 md:p-10 rounded-xl space-y-5 relative overflow-visible mb-6 "
        >
          <h2 className="text-3xl font-bold text-secondary mb-5">Send Us a Message</h2>

          {/* Full Name & Age Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className={inputClass}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* Email */}
          {/* <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={inputClass}
            required
          /> */}

          {/* Gender */}
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={selectClass}
            required
          >
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          {/* Height & Weight Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <input
              type="number"
              name="height"
              placeholder="Height (cm)"
              value={formData.height}
              onChange={handleChange}
              className={inputClass}
              required
            />
            <input
              type="number"
              name="weight"
              placeholder="Weight (kg)"
              value={formData.weight}
              onChange={handleChange}
              className={inputClass}
              required
            />
          </div>

          {/* Location */}
          <input
            type="text"
            name="location"
            placeholder="Location (City)"
            value={formData.location}
            onChange={handleChange}
            className={inputClass}
            required
          />

          {/* Occupation */}
          <select
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            className={selectClass}
            required
          >
            <option value="" disabled>Select Occupation</option>
            <option value="sedentary">Sedentary</option>
            <option value="moderate">Moderate</option>
            <option value="active">Active</option>
          </select>

          {/* Primary Goal */}
          <select
            name="primaryGoal"
            value={formData.primaryGoal}
            onChange={handleChange}
            className={selectClass}
            required
          >
            <option value="" disabled>Select Primary Goal</option>
            <option value="Fat loss">Fat loss</option>
            <option value="Muscle gain">Muscle gain</option>
            <option value="Improve stamina">Improve stamina</option>
            <option value="Manage diabetes">Manage diabetes</option>
            <option value="Manage thyroid">Manage thyroid</option>
            <option value="Improve gut health">Improve gut health</option>
            <option value="PCOS management">PCOS management</option>
            <option value="Blood pressure control">Blood pressure control</option>
            <option value="General wellness">General wellness</option>
            <option value="Other">Other</option>
          </select>

          {formData.primaryGoal === "Other" && (
            <input
              type="text"
              name="otherGoal"
              placeholder="Specify your goal"
              value={formData.otherGoal}
              onChange={handleChange}
              className={inputClass}
            />
          )}

          <button
            type="submit"
            style={{ backgroundColor: "#065f46", color: "#ffffff" }}
            className=" text-lg w-full mt-4 p-5 h-10 cursor-pointer rounded-xl bg-green-900 text-white font-bold text-center hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-700 border-none appearance-none transition-colors shadow-md"
          >
            Submit
          </button>
        </form>
        </div>

        {/* Form */}
        
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;