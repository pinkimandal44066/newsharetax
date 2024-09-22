// import { useEffect, useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { IoCloseOutline } from "react-icons/io5";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io";
// import { NavLink, Link, useLocation } from "react-router-dom";
// import logo from "../../public/logo.jpeg"
// import slogo from '../../public/slogo.jpeg';
// const Navbar = () => {
//   const [isSideMenuOpen, setMenu] = useState(false);

//   useEffect(() => {
//     setMenu(false);
//   }, []);

//   const location = useLocation();

//   useEffect(() => {
//     setMenu(false);
//   }, [location]);

//   return (
//     <div style={{ fontFamily: "Century Gothic" }} className="w-full ">
//       <div style={{ position: "relative  " }}>
//         <NavLink to="/">
//           {/* <img
//             src={logo}
//             alt=""
//             className="w-16 lg:w-24 rounded-xl lg:mt-4 lg:mx-24 md:mx-20  "
//             style={{
//               position: "absolute",
//               left: 0,
//               top: 0,
//               cursor: "pointer",
//               zIndex: 1,
//             }}
//           /> */}


// <img
//   src={slogo}
//   alt=""
//   className="w-12 lg:w-14  rounded-xl cursor-pointer absolute left-0 
//   lg:top-2   lg:mt-4 lg:mx-24 md:mx-20  sm:mx-10  mx-5  z-10
  
//        top-4 right-5 md:top-5    
//             md:right-20 lg:right-32  sm:right-10 sm:top-4  "
// />

//         </NavLink>
//         {/* <video
//           className="w-full h-auto"
//           autoPlay
//           loop
//           muted
//           style={{ position: "relative" }}
//         >
//           <source
//             src="https://media.istockphoto.com/id/1849196332/video/close-up-hand-of-woman-using-calculator-for-calculate-checking-bills-taxes-bank-account.mp4?s=mp4-640x640-is&k=20&c=kjvK7YLFmJtCoPBfcvNyix9hqHlkWEOORTR26OlJZiQ="
//             type="video/mp4"
//           />
//         </video> */}
//       </div>

//       {/* navbar */}
//       <nav>
//         <div className="container mx-auto flex justify-between items-center cursor-pointer  ">
//           <div className="left flex items-center ">
//             <div className="absolute lg:top-5 top-4 right-5 md:top-5    
//             md:right-20 lg:right-32  sm:right-10 sm:top-4   p-2 bg-blue-600  text-white rounded-full">
//               <FiMenu
//                 onClick={() => setMenu(true)}
//                 className="lg:text-4xl md:text-4xl text-4xl cursor-pointer"
//               />
//             </div>
//           </div>

//           {isSideMenuOpen && (
//             <div className="fixed h-screen w-full z-[999] font-Poppins   cursor-pointer  bg-black bg-opacity-50 backdrop-blur-sm top-0 right-0">
//               <section className="text-black bg-gray-100 flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-full text-center flex">
//                 <IoCloseOutline
//                   onClick={() => setMenu(false)}
//                   className="mt-0 mb-8 text-5xl text-white rounded-full p-2
//                    cursor-pointer bg-blue-600 absolute  
                 
                   
//                    lg:top-5 top-4 right-5 md:top-5    
//             md:right-20 lg:right-32  sm:right-10 sm:top-4 "
//                 />

//                 <NavLink
//                   to="/"
//                   className={({ isActive }) =>
//                     `  ${
//                       isActive ? "text-blue-600" : "text-gray-700"
//                     } font-light text-2xl`
//                   }
//                 >
//                   HOME
//                 </NavLink>

//                 <NavLink
//                   to="/about-us"
//                   className={({ isActive }) =>
//                     `  ${
//                       isActive ? "text-blue-600" : "text-gray-700"
//                     } font-light text-2xl`
//                   }
//                 >
//                   ABOUT US
//                 </NavLink>

//                 <NavLink
//                   to="/service"
//                   className={({ isActive }) =>
//                     `  ${
//                       isActive ? "text-blue-600" : "text-gray-700"
//                     } font-light text-2xl`
//                   }
//                 >
//                   Services
//                 </NavLink>

//                 {/* <NavLink
//                   to="/enquiry"
//                   className={({ isActive }) =>
//                     `  ${
//                       isActive ? "text-blue-600" : "text-gray-700"
//                     } font-light text-2xl`
//                   }
//                 >
//                   Enquiry
//                 </NavLink> */}




//                 <NavLink
//                   to="/contact-us"
//                   className={({ isActive }) =>
//                     `  ${
//                       isActive ? "text-blue-600" : "text-gray-700"
//                     } font-light text-2xl`
//                   }
//                 >
//                   Contact US
//                 </NavLink>

//                 {/* icons  */}

//                 <div className="flex justify-center items-center lg:text-4xl text-3xl gap-10">
//                   <Link
//                     to="https://www.facebook.com/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaFacebook />
//                   </Link>

//                   <Link
//                     to="https://www.instagram.com/accounts/login/?hl=en"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <FaInstagramSquare />
//                   </Link>

//                   <Link
//                     to="https://www.youtube.com/channel/YourChannelID"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <IoLogoYoutube />
//                   </Link>
//                 </div>
//               </section>
//             </div>
//           )}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;













// import { useEffect, useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { IoCloseOutline } from "react-icons/io5";
// import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io";
// import { NavLink, Link, useLocation } from "react-router-dom";

// import slogo from "../../public/slogo.jpeg";

// const Navbar = () => {
//   const [isSideMenuOpen, setMenu] = useState(false);

//   const location = useLocation();

//   useEffect(() => {
//     setMenu(false);
//   }, [location]);

//   return (
//     <div className="w-full fixed top-0 z-50 bg-white shadow-lg">
//       <div className="container mx-auto flex justify-between items-center py-4 px-5 lg:px-24 md:px-20 sm:px-10">
//         <NavLink to="/">
//           <img
//             src={slogo}
//             alt="Logo"
//             className="w-12 lg:w-14 rounded-xl cursor-pointer"
//           />
//         </NavLink>

//         <div className="lg:hidden">
//           <FiMenu
//             onClick={() => setMenu(true)}
//             className="text-3xl text-blue-600 cursor-pointer"
//           />
//         </div>

//         <nav className="hidden lg:flex items-center gap-10">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `  ${
//                 isActive ? "text-blue-600" : "text-gray-700"
//               } font-light text-xl`
//             }
//           >
//             HOME
//           </NavLink>
//           <NavLink
//             to="/about-us"
//             className={({ isActive }) =>
//               `  ${
//                 isActive ? "text-blue-600" : "text-gray-700"
//               } font-light text-xl`
//             }
//           >
//             ABOUT US
//           </NavLink>
//           <NavLink
//             to="/service"
//             className={({ isActive }) =>
//               `  ${
//                 isActive ? "text-blue-600" : "text-gray-700"
//               } font-light text-xl`
//             }
//           >
//             Services
//           </NavLink>
//           <NavLink
//             to="/contact-us"
//             className={({ isActive }) =>
//               `  ${
//                 isActive ? "text-blue-600" : "text-gray-700"
//               } font-light text-xl`
//             }
//           >
//             Contact US
//           </NavLink>
//         </nav>

//         {isSideMenuOpen && (
//           <div className="fixed h-screen w-full z-[999] bg-black bg-opacity-50 backdrop-blur-sm top-0 right-0 lg:hidden">
//             <section className="text-black bg-gray-100 flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-full text-center flex">
//               <IoCloseOutline
//                 onClick={() => setMenu(false)}
//                 className="mt-0 mb-8 text-5xl text-white rounded-full p-2 cursor-pointer bg-blue-600 absolute right-5 top-5"
//               />

//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   `  ${
//                     isActive ? "text-blue-600" : "text-gray-700"
//                   } font-light text-2xl`
//                 }
//               >
//                 HOME
//               </NavLink>

//               <NavLink
//                 to="/about-us"
//                 className={({ isActive }) =>
//                   `  ${
//                     isActive ? "text-blue-600" : "text-gray-700"
//                   } font-light text-2xl`
//                 }
//               >
//                 ABOUT US
//               </NavLink>

//               <NavLink
//                 to="/service"
//                 className={({ isActive }) =>
//                   `  ${
//                     isActive ? "text-blue-600" : "text-gray-700"
//                   } font-light text-2xl`
//                 }
//               >
//                 Services
//               </NavLink>

//               <NavLink
//                 to="/contact-us"
//                 className={({ isActive }) =>
//                   `  ${
//                     isActive ? "text-blue-600" : "text-gray-700"
//                   } font-light text-2xl`
//                 }
//               >
//                 Contact US
//               </NavLink>

//               {/* Social icons */}
//               <div className="flex justify-center items-center text-3xl gap-10 mt-8">
//                 <Link
//                   to="https://www.facebook.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaFacebook />
//                 </Link>

//                 <Link
//                   to="https://www.instagram.com/accounts/login/?hl=en"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaInstagramSquare />
//                 </Link>

//                 <Link
//                   to="https://www.youtube.com/channel/YourChannelID"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <IoLogoYoutube />
//                 </Link>
//               </div>
//             </section>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;














// import { useEffect, useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { IoCloseOutline } from "react-icons/io5";
// import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io";
// import { NavLink, Link, useLocation } from "react-router-dom";

// import slogo from "../../public/slogo.jpeg";

// const Navbar = () => {
//   const [isSideMenuOpen, setMenu] = useState(false);

//   const location = useLocation();

//   useEffect(() => {
//     setMenu(false);
//   }, [location]);

//   return (
//     <div className="w-full bg-white shadow-lg">
//       <div className="container mx-auto flex justify-between items-center py-4 px-5 lg:px-24 md:px-20 sm:px-10">
//         <NavLink to="/">
//           <img
//             src={slogo}
//             alt="Logo"
//             className="w-12 lg:w-14 rounded-xl cursor-pointer"
//           />
//         </NavLink>

//         <div className="lg:hidden">
//           <FiMenu
//             onClick={() => setMenu(true)}
//             className="text-3xl text-blue-600 cursor-pointer"
//           />
//         </div>

//         <nav className="hidden lg:flex items-center gap-10">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               `  ${
//                 isActive ? "text-blue-600" : "text-gray-700"
//               } font-light text-xl`
//             }
//           >
//             HOME
//           </NavLink>
//           <NavLink
//             to="/about-us"
//             className={({ isActive }) =>
//               `  ${
//                 isActive ? "text-blue-600" : "text-gray-700"
//               } font-light text-xl`
//             }
//           >
//             ABOUT US
//           </NavLink>
//           <NavLink
//             to="/service"
//             className={({ isActive }) =>
//               `  ${
//                 isActive ? "text-blue-600" : "text-gray-700"
//               } font-light text-xl`
//             }
//           >
//             Services
//           </NavLink>
//           <NavLink
//             to="/contact-us"
//             className={({ isActive }) =>
//               `  ${
//                 isActive ? "text-blue-600" : "text-gray-700"
//               } font-light text-xl`
//             }
//           >
//             Contact US
//           </NavLink>
//         </nav>

//         {isSideMenuOpen && (
//           <div className="fixed h-screen w-full z-[999] bg-black bg-opacity-50 backdrop-blur-sm top-0 right-0 lg:hidden">
//             <section className="text-black bg-gray-100 flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-full text-center flex">
//               <IoCloseOutline
//                 onClick={() => setMenu(false)}
//                 className="mt-0 mb-8 text-5xl text-white rounded-full p-2 cursor-pointer bg-blue-600 absolute right-5 top-5"
//               />

//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   `  ${
//                     isActive ? "text-blue-600" : "text-gray-700"
//                   } font-light text-2xl`
//                 }
//               >
//                 HOME
//               </NavLink>

//               <NavLink
//                 to="/about-us"
//                 className={({ isActive }) =>
//                   `  ${
//                     isActive ? "text-blue-600" : "text-gray-700"
//                   } font-light text-2xl`
//                 }
//               >
//                 ABOUT US
//               </NavLink>

//               <NavLink
//                 to="/service"
//                 className={({ isActive }) =>
//                   `  ${
//                     isActive ? "text-blue-600" : "text-gray-700"
//                   } font-light text-2xl`
//                 }
//               >
//                 Services
//               </NavLink>

//               <NavLink
//                 to="/contact-us"
//                 className={({ isActive }) =>
//                   `  ${
//                     isActive ? "text-blue-600" : "text-gray-700"
//                   } font-light text-2xl`
//                 }
//               >
//                 Contact US
//               </NavLink>

//               {/* Social icons */}
//               <div className="flex justify-center items-center text-3xl gap-10 mt-8">
//                 <Link
//                   to="https://www.facebook.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaFacebook />
//                 </Link>

//                 <Link
//                   to="https://www.instagram.com/accounts/login/?hl=en"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaInstagramSquare />
//                 </Link>

//                 <Link
//                   to="https://www.youtube.com/channel/YourChannelID"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <IoLogoYoutube />
//                 </Link>
//               </div>
//             </section>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


















// import { useEffect, useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { IoCloseOutline } from "react-icons/io5";
// import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io";
// import { NavLink, Link, useLocation } from "react-router-dom";

// import slogo from "../../public/slogo.jpeg";

// const Navbar = () => {
//   const [isSideMenuOpen, setMenu] = useState(false);
//   const [isScrolled, setScrolled] = useState(false);
  
//   const location = useLocation();

//   useEffect(() => {
//     setMenu(false);
//   }, [location]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50); 
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className={`w-full fixed top-0 left-0 transition-colors duration-300 ease-in-out ${isScrolled ? 
//     "bg-blue-600 shadow-lg" : "bg-transparent"} z-50`}>
//       <div className="container mx-auto flex justify-between items-center py-4 px-5 lg:px-24 md:px-20 sm:px-10">
//         <NavLink to="/">
//           <img
//             src={slogo}
//             alt="Logo"
//             className="w-12 lg:w-14 rounded-xl cursor-pointer"
//           />
//         </NavLink>

//         <div className="lg:hidden">
//           <FiMenu
//             onClick={() => setMenu(true)}
//             className="text-3xl text-blue-600 cursor-pointer"
//           />
//         </div>

//         <nav className="hidden lg:flex items-center gap-10">
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               ` ${
//                 isActive ? "text-white" : ""
//               } font-bold text-xl`
//             }
//           >
//             HOME
//           </NavLink>
//           <NavLink
//             to="/about-us"
//             className={({ isActive }) =>
//               ` ${
//                 isActive ? "text-white" : ""
//               } font-light text-xl`
//             }
//           >
//             ABOUT US
//           </NavLink>
//           <NavLink
//             to="/service"
//             className={({ isActive }) =>
//               ` ${
//                 isActive ? "text-white" : ""
//               } font-light text-xl`
//             }
//           >
//             Services
//           </NavLink>
//           <NavLink
//             to="/contact-us"
//             className={({ isActive }) =>
//               ` ${
//                 isActive ? "text-white" : ""
//               } font-light text-xl`
//             }
//           >
//             Contact US
//           </NavLink>
//         </nav>

//         {isSideMenuOpen && (
//           <div className="fixed h-screen w-full z-[999] bg-black bg-opacity-50 backdrop-blur-sm top-0 right-0 lg:hidden">
//             <section className="text-black bg-gray-100 flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-full text-center flex">
//               <IoCloseOutline
//                 onClick={() => setMenu(false)}
//                 className="mt-0 mb-8 text-5xl text-white rounded-full p-2 cursor-pointer bg-blue-600 absolute right-5 top-5"
//               />

//               <NavLink
//                 to="/"
//                 className={({ isActive }) =>
//                   ` ${
//                     isActive ? "text-blue-600" : "text-gray-700"
//                   } font-light text-2xl`
//                 }
//               >
//                 HOME
//               </NavLink>

//               <NavLink
//                 to="/about-us"
//                 className={({ isActive }) =>
//                   ` ${
//                     isActive ? "text-blue-600" : "text-gray-700"
//                   } font-light text-2xl`
//                 }
//               >
//                 ABOUT US
//               </NavLink>

//               <NavLink
//                 to="/service"
//                 className={({ isActive }) =>
//                   ` ${
//                     isActive ? "text-blue-600" : "text-gray-700"
//                   } font-light text-2xl`
//                 }
//               >
//                 Services
//               </NavLink>

//               <NavLink
//                 to="/contact-us"
//                 className={({ isActive }) =>
//                   ` ${
//                     isActive ? "text-blue-600" : "text-gray-700"
//                   } font-light text-2xl`
//                 }
//               >
//                 Contact US
//               </NavLink>

//               {/* Social icons */}
//               <div className="flex justify-center items-center text-3xl gap-10 mt-8">
//                 <Link
//                   to="https://www.facebook.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaFacebook />
//                 </Link>

//                 <Link
//                   to="https://www.instagram.com/accounts/login/?hl=en"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaInstagramSquare />
//                 </Link>

//                 <Link
//                   to="https://www.youtube.com/channel/YourChannelID"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <IoLogoYoutube />
//                 </Link>
//               </div>
//             </section>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

















// import { useEffect, useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { IoCloseOutline } from "react-icons/io5";
// import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io";
// import { NavLink, Link, useLocation } from "react-router-dom";

// import slogo from "../../public/slogo.jpeg";

// const Navbar = () => {
//   const [isSideMenuOpen, setMenu] = useState(false);
//   const [isScrolled, setScrolled] = useState(false);
  
//   const location = useLocation();

//   useEffect(() => {
//     setMenu(false);
//   }, [location]);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50); 
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <div className={`w-full fixed top-0 left-0 transition-colors duration-300 ease-in-out ${isScrolled ? 
//     "bg-blue-600 shadow-lg" : "bg-transparent"} z-50`}>
//       <div className="container mx-auto flex justify-between items-center py-4 px-5 lg:px-24 md:px-20 sm:px-10">
//         <NavLink to="/">
//           <img
//             src={slogo}
//             alt="Logo"
//             className="w-12 lg:w-14 rounded-xl cursor-pointer"
//           />
//         </NavLink>

//         <div className="lg:hidden">
//           <FiMenu
//             onClick={() => setMenu(true)}
//             className="mt-0 mb-8 text-5xl text-blue-600 rounded-full p-2 cursor-pointer bg-white absolute right-5 top-5"
//           />
//         </div>

//         <nav className="hidden lg:flex items-center gap-10">
//           <NavLink
//             to="/"
//             className="text-white font-bold text-xl"
//           >
//             Home
//           </NavLink>
//           <NavLink
//             to="/about-us"
//             className="text-white font-bold text-xl"
//           >
//            About Us
//           </NavLink>
//           <NavLink
//             to="/service"
//             className="text-white font-bold text-xl"
//           >
//             Services
//           </NavLink>
//           <NavLink
//             to="/contact-us"
//             className="text-white font-bold text-xl"
//           >
//             Contact Us
//           </NavLink>
//         </nav>

//         {isSideMenuOpen && (
//           <div className="fixed h-screen w-full z-[999] bg-black bg-opacity-50 backdrop-blur-sm top-0 right-0 lg:hidden">
//             <section className="text-black bg-blue-600 flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-full text-center flex">
//               <IoCloseOutline
//                 onClick={() => setMenu(false)}
//                 className="mt-0 mb-8 text-5xl text-blue-600 rounded-full p-2 cursor-pointer bg-white absolute right-5 top-5"
//               />

//               <NavLink
//                 to="/"
//                 className="text-white font-bold text-2xl"
//               >
//                     Home        </NavLink>

//               <NavLink
//                 to="/about-us"
//                 className="text-white font-bold text-2xl"
//               >
//                          About Us
//               </NavLink>

//               <NavLink
//                 to="/service"
//                 className="text-white font-bold text-2xl"
//               >
//                 Services
//               </NavLink>

//               <NavLink
//                 to="/contact-us"
//                 className="text-white font-bold text-2xl"
//               >
//                 Contact US
//               </NavLink>

//               {/* Social icons */}
//               <div className="flex justify-center items-center text-3xl gap-10 mt-8">
//                 <Link
//                   to="https://www.facebook.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaFacebook />
//                 </Link>

//                 <Link
//                   to="https://www.instagram.com/accounts/login/?hl=en"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <FaInstagramSquare />
//                 </Link>

//                 <Link
//                   to="https://www.youtube.com/channel/YourChannelID"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <IoLogoYoutube />
//                 </Link>
//               </div>
//             </section>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;


















import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { NavLink, Link, useLocation } from "react-router-dom";
import sslogo from '../../public/sslogo.png';
// import slogo from "../../public/slogo.jpeg";
// import slogoo from '../../public/SSS.jpg';
const Navbar = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isScrolled, setScrolled] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    setMenu(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full fixed top-0 left-0 transition-colors duration-300 ease-in-out ${isScrolled ? 
    "bg-blue-600 shadow-lg" : "bg-transparent"} z-50`}>
      <div className=" mx-auto flex justify-between items-center py-4 px-5 lg:px-24 md:px-16 sm:px-10">
        {/* <NavLink to="/">
          <img
            src={sslogo}
            alt="Logo"
            className="w-10 bg-blue-600 sm:w-12 md:w-14 lg:w-16 rounded-xl cursor-pointer"
          
          />
        </NavLink> */}


<NavLink to="/" className="flex items-center">
  <img
    src={sslogo}
    alt="Logo"
    className="w-10 bg-blue-600 sm:w-12 md:w-14 lg:w-16 rounded-xl cursor-pointer"
  />
  <span className="ml-2 text-lg sm:text-xl md:text-2xl lg:text-2xl font-bold text-white">
    Share Tax
  </span>
</NavLink>


        <div className="lg:hidden">
          <FiMenu
            onClick={() => setMenu(true)}
            className="
            text-3xl sm:text-4xl md:text-5xl text-blue-600 rounded-full p-1 sm:p-2 cursor-pointer bg-white "
          />
        </div>

        <nav className="hidden lg:flex items-center gap-6 sm:gap-8 md:gap-10">
          <NavLink
            to="/"
            className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl"
          >
            Home
          </NavLink>
          <NavLink
            to="/about-us"
            className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl"
          >
            About Us
          </NavLink>
          <NavLink
            to="/service"
            className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl"
          >
            Services
          </NavLink>
          <NavLink
            to="/contact-us"
            className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl"
          >
            Contact Us
          </NavLink>
        </nav>

        {isSideMenuOpen && (
          <div className="fixed h-screen w-full z-[999] bg-black bg-opacity-50 backdrop-blur-sm top-0 right-0 lg:hidden">
            <section className="text-black bg-blue-600 flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-full text-center flex">
              <IoCloseOutline
                onClick={() => setMenu(false)}
                className="mt-0 mb-8 text-3xl sm:text-4xl md:text-5xl text-blue-600 rounded-full p-1 sm:p-2 cursor-pointer bg-white absolute right-5 top-5"
              />

              <NavLink
                to="/"
                className="text-white font-bold text-xl sm:text-2xl"
              >
                Home
              </NavLink>

              <NavLink
                to="/about-us"
                className="text-white font-bold text-xl sm:text-2xl"
              >
                About Us
              </NavLink>

              <NavLink
                to="/service"
                className="text-white font-bold text-xl sm:text-2xl"
              >
                Services
              </NavLink>

              <NavLink
                to="/contact-us"
                className="text-white font-bold text-xl sm:text-2xl"
              >
                Contact Us
              </NavLink>

              {/* Social icons */}
              <div className="flex justify-center   items-center text-2xl sm:text-3xl md:text-4xl gap-6 sm:gap-8 md:gap-10 mt-8">
                <Link
                  to="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </Link>

                <Link
                  to="https://www.instagram.com/accounts/login/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagramSquare />
                </Link>

                <Link
                  to="https://www.youtube.com/channel/YourChannelID"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoYoutube />
                </Link>
              </div>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
