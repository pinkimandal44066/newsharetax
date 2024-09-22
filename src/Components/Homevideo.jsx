
// VIDEO SECETION


// import { useEffect, useState } from "react";
// import { FiMenu } from "react-icons/fi";
// import { IoCloseOutline } from "react-icons/io5";
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { IoLogoYoutube } from "react-icons/io";
// import { NavLink, Link, useLocation } from "react-router-dom";
// import logo from "../../public/logo.jpeg"
// // import homebanner from '../../public/homebanner.png';
// import home from '../../public/home.png';
// const Homevideo = () => {
//   const [isSideMenuOpen, setMenu] = useState(false);

//   useEffect(() => {
//     setMenu(false);
//   }, []);

//   const location = useLocation();

//   useEffect(() => {
//     setMenu(false);
//   }, [location]);
//   return (
//     <div>
//          <div style={{ position: "relative" }}>
//         {/* <NavLink to="/">
//           <img
//             src={logo}
//             alt=""
//             className="w-16 rounded-xl"
//             style={{
//               position: "absolute",
//               left: 0,
//               top: 0,
//               cursor: "pointer",
//               zIndex: 1,
//             }}
//           />
//         </NavLink> */}
//         {/* <video
//           className="w-full h-auto bg-black"
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

// <img
//   className="w-full h-full bg-black"
//   src={home}
//   alt=""
//   style={{ position: "relative" }}
// />

//       </div>

//       {/* <nav>
//         <div className="container mx-auto flex justify-between items-center cursor-pointer">
//           <div className="left flex items-center ">
//             <div className="absolute lg:top-6 top-4
//               right-5 md:top-5 md:right-20 lg:right-32 p-2  sm:top-4  sm:right-10 
//                bg-blue-700  text-white rounded-full ">
//               <FiMenu
//                 onClick={() => setMenu(true)}
//                 className="lg:text-4xl md:text-4xl text-4xl cursor-pointer"
//               />
//             </div>
//           </div>

//           {isSideMenuOpen && (
//             <div className="fixed h-screen w-full z-[999] font-Poppins  cursor-pointer  bg-black bg-opacity-50 backdrop-blur-sm top-0 right-0">
//               <section className="text-black bg-gray-100 flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-full text-center flex">
//                 <IoCloseOutline
//                   onClick={() => setMenu(false)}
                 
//                   className="mt-0 mb-8 text-5xl  text-white rounded-full p-2 cursor-pointer
//                    bg-blue-600 absolute


//                         lg:top-5 top-4 right-5 md:top-5    
//             md:right-20 lg:right-32  sm:right-10 sm:top-4 
//                    "
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
//       </nav> */}
      
//     </div>
//   )
// }

// export default Homevideo






























import React from "react";
import Slider from "react-slick";
import home from '../../public/home.png';

const BannerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false, 
    pauseOnFocus: false,
    cssEase: "linear", 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const images = [home, home, home]; 

  return (
    <div className="w-full h-full">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="w-full h-full">
            <img
              className="w-full h-full object-cover"
              src={image}
              alt={`Banner ${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerCarousel;
