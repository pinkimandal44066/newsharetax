// import React, { useState, useRef } from "react";
// import { IoIosArrowDown } from "react-icons/io";

// const SideFrom = ({ information }) => {
//   const [date, setDate] = useState(null);

//   const form = useRef();
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email_id: "",
//     mobile_number: "",
//     option: "",
//   });

//   const [selectedOption, setSelectedOption] = useState("");
//   const handleOptionChange = (e) => {
//     setSelectedOption(e.target.value);
//   };

//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => setIsOpen(true);
//   const closeModal = () => {
//     setIsOpen(false);
//     setFormSubmitted(false);
//   };

//   const handleChange = (name, value) => {
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const [result, setResult] = useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", "0d42edc6-65b0-4b59-8960-8f883bc43380");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Form Submitted Successfully");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };
//   const [message, setMessage] = useState("");

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(`Message submitted: ${message}`);
//     setMessage("");
//   };

//   return (
//     <div style={{ fontFamily: "Century Gothic" }} className="text-black">
//       {/* Modal toggle */}
//       <button
//         onClick={openModal}
//         className="top-80 right-0 h-36 w-10 z-[999] fixed transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 md:text-xl lg:text-2xl text-xl rounded-md shadow-md text-white"
//         type="button"
//         style={{
//           writingMode: "vertical-rl",
//           textOrientation: "mixed",
//           transform: "rotate(180deg)",
//         }}
//       >
//         ENQUIRE
//       </button>

//       {/* Main modal */}
//       {isOpen && (
//         <div className="fixed z-[999] inset-0 overflow-y-auto overflow-x-hidden flex justify-center items-center">
//           <div className="relative p-4 w-full max-w-2xl max-h-full">
//             {/* Modal content */}
//             <form onSubmit={onSubmit}>
//               <div className="relative bg-[#FEF3E2] rounded-lg shadow">
//                 {/* Modal header */}
//                 <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 bg-blue-600">
//                   <h3 className="--text-center text-2xl block w-[100%] text-center font-semibold text-white ">
//                     Add Your Information
//                   </h3>
//                   <button
//                     onClick={closeModal}
//                     type="button"
//                     className="text-white hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//                   >
//                     <svg
//                       className="w-3 h-3"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 14 14"
//                     >
//                       <path
//                         stroke="currentColor"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//                 {/* Modal body */}
//                 <div className="p-4 md:p-5 space-y-4">
//                   <div className="bg-[#FEF3E2] ">
//                     <h1 className="lg:text-5xl text-3xl font-semibold text-blue-600 text-center mt-2 ">
//                       Reach out to us
//                     </h1>
//                     <div className="flex flex-col justify-evenly items-center lg:mx-40 mx-5 mt-10 ">
//                       <div>
//                         <div className="lg:w-80 w-60 md:w-96 sm:w-72">
//                           <div className="relative w-full min-w-[200px] h-12">
//                             <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
//                               <i
//                                 className="fas fa-heart"
//                                 aria-hidden="true"
//                               ></i>
//                             </div>
//                             <input
//                               className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-black"
//                               placeholder=" "
//                             />
//                             <label className="flex  w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-black after:border-blue-gray-200 peer-focus:after:!border-black">
//                               Full Name
//                             </label>
//                           </div>
//                         </div>
//                         <div className="lg:w-80 w-60 md:w-96 sm:w-72 mt-10 mb-4 ">
//                           <div className="relative w-full min-w-[200px] h-12">
//                             <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
//                               <i
//                                 className="fas fa-heart"
//                                 aria-hidden="true"
//                               ></i>
//                             </div>
//                             <input
//                               className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-black"
//                               placeholder=" "
//                             />
//                             <label
//                               className="flex  w-full h-full select-none 
//                             pointer-events-none absolute left-0 font-normal
//                              !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500
//                               leading-tight peer-focus:leading-tight peer-disabled:text-transparent
//                                peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all 
//                                -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px]
//                                 before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5
//                                  before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent
//                                   before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l 
//                                   peer-focus:before:border-l-2 before:pointer-events-none before:transition-all
//                                    peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-black after:border-blue-gray-200 peer-focus:after:!border-black"
//                             >
//                               Mobile Number
//                             </label>
//                           </div>
//                         </div>
//                       </div>

//                       <div className="">
//                         <div className="lg:w-80 w-60 md:w-96 sm:w-72 ml-3 mt-5 ">
//                           <div className="relative w-full min-w-[200px] h-12">
//                             <div className="absolute grid w-5 h-5 place-items-center text-blue-gray-500 top-2/4 right-3 -translate-y-2/4">
//                               <i
//                                 className="fas fa-heart"
//                                 aria-hidden="true"
//                               ></i>
//                             </div>
//                             <input
//                               className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-gray-800 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] !pr-9 border-blue-gray-200 focus:border-black"
//                               placeholder=" "
//                             />
//                             <label className="flex  w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-black after:border-blue-gray-200 peer-focus:after:!border-black">
//                               E-mail ID
//                             </label>
//                           </div>
//                         </div>

//                         <div className="flex justify-center items-center mt-10">
//                           <div className="bg-blue-600  rounded-md shadow-md max-w-md w-full">
//                             <h1 className="text-lg font-semibold mb-4 px-3">
//                               Your Message{" "}
//                             </h1>
//                             <form onSubmit={handleSubmit}>
//                               <textarea
//                                 className="w-full px-3 py-2 -mt-3 border rounded-md focus:outline-none focus:border-blue-500"
//                                 rows="5"
//                                 placeholder="Enter your message..."
//                                 value={message}
//                                 onChange={handleMessageChange}
//                               ></textarea>
//                               <div className="mt-4 flex justify-end"></div>
//                             </form>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="flex items-center justify-center mt-10">
//                       <button className="mb-10 py-3 px-28 rounded-sm bg-blue-600 text-white font-semibold text-2xl">
//                         SUBMIT
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Popup message */}

//                 <span className="block text-center mt-4">{result}</span>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SideFrom;










import React, { useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SideForm = ({ information }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email_id: "",
    mobile_number: "",
    message: "",
  });

  const [selectedOption, setSelectedOption] = useState("");
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setFormSubmitted(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formDataToSubmit = new FormData();
    formDataToSubmit.append("name", formData.name);
    formDataToSubmit.append("email_id", formData.email_id);
    formDataToSubmit.append("mobile_number", formData.mobile_number);
    formDataToSubmit.append("message", formData.message);
    formDataToSubmit.append("access_key", "0d42edc6-65b0-4b59-8960-8f883bc43380");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSubmit,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setFormData({
        name: "",
        email_id: "",
        mobile_number: "",
        message: "",
      });
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div style={{ fontFamily: "Century Gothic" }} className="text-black">
      {/* Modal toggle */}
      <button
        onClick={openModal}
        className="top-80 right-0 h-36 w-10 z-[999] fixed transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 md:text-xl lg:text-2xl text-xl rounded-md shadow-md text-white"
        type="button"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          transform: "rotate(180deg)",
        }}
      >
        ENQUIRE
      </button>

      {/* Main modal */}
      {isOpen && (
        <div className="fixed z-[999] bg-black bg-opacity-80 inset-0 overflow-y-auto overflow-x-hidden flex justify-center items-center">
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            {/* Modal content */}
            <form onSubmit={onSubmit}>
              <div className="relative bg-[#FEF3E2] rounded-lg shadow">
                {/* Modal header */}
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 bg-blue-600">
                  <h3 className="text-2xl block w-full text-center font-semibold text-white">
                    Add Your Information
                  </h3>
                  <button
                    onClick={closeModal}
                    type="button"
                    className="text-white hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                  </button>
                </div>
                {/* Modal body */}
                <div className="p-4 md:p-5 space-y-4">
                  <div className="bg-[#FEF3E2]">
                    <h1 className="lg:text-5xl text-3xl font-semibold text-blue-600 text-center mt-2">
                      Reach out to us
                    </h1>
                    <div className="flex flex-col justify-evenly items-center lg:mx-40 mx-5 mt-10">
                      <div className="lg:w-80 w-60 md:w-96 sm:w-72">
                        <input
                          className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal border-b-2 py-2 px-3 focus:outline-none focus:border-blue-600"
                          placeholder="Full Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="lg:w-80 w-60 md:w-96 sm:w-72 mt-4">
                        <input
                          className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal border-b-2 py-2 px-3 focus:outline-none focus:border-blue-600"
                          placeholder="Email ID"
                          name="email_id"
                          value={formData.email_id}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="lg:w-80 w-60 md:w-96 sm:w-72 mt-4">
                        <input
                          className="w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal border-b-2 py-2 px-3 focus:outline-none focus:border-blue-600"
                          placeholder="Mobile Number"
                          name="mobile_number"
                          value={formData.mobile_number}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="lg:w-80 w-60 md:w-96 sm:w-72 mt-4">
                        <textarea
                          className="w-full h-24 bg-transparent text-blue-gray-700 font-sans font-normal border-b-2 py-2 px-3 focus:outline-none focus:border-blue-600"
                          placeholder="Your Message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="flex justify-center items-center mt-10">
                      <button
                        type="submit"
                        className="bg-blue-600 text-white px-5 py-2 rounded-md shadow-md"
                      >
                        Submit
                      </button>
                    </div>
                    <div className="text-center mt-4 text-red-600">{result}</div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideForm;













