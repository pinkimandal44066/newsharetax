// import { useState, useEffect } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { NavLink } from "react-router-dom";
// import { Events, scrollSpy } from "react-scroll";

// function App() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("");

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset;
//       setIsScrolled(scrollTop > 0);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleSetActive = (to, element) => {
//       setActiveSection(to);
//     };

//     Events.scrollEvent.register("begin", handleSetActive);

//     return () => {
//       Events.scrollEvent.remove("begin");
//     };
//   }, []);

//   useEffect(() => {
//     scrollSpy.update();
//   });

//   const menuItems = [
//     { id: 5, title: "Home", path: "/" },
//     { id: 1, title: "About Us", path: "/about-us" },
//     { id: 2, title: "Services", path: "/service" },
//     // { id: 3, title: "Enquiry", path: "/enquiry" },
//     { id: 4, title: "Contact Us", path: "/contact-us" },
//   ];

//   const isActive = (path) => {
//     return activeSection === path;
//   };

//   return (
//     <div
//       style={{ fontFamily: "Century Gothic" }}
//       className="flex flex-col  font-Poppins w-full overflow-x-hidden"
//     >
//       <header
//         className={`z-50 lg:text-2xl text-lg w-full bg-white font-medium py-6 px-10 capitalize ${
//           isScrolled ? "fixed top-0" : ""
//         }`}
//       >
//         <Swiper
//           slidesPerView={menuItems.length <= 2 ? "auto" : 2}
//           spaceBetween={0}
//           centeredSlides={true}
//           grabCursor={true}
//           className="w-full"
//           autoplay={{ delay: 1000, disableOnInteraction: false }}
//           breakpoints={{
//             768: {
//               slidesPerView: 8,
//             },
//           }}
//         >
//           {menuItems.map((item) => (
//             <SwiperSlide key={item.id}>
//               <NavLink
//                 to={item.path}
//                 className={`cursor-pointer block text-center px-4 py-2  mr-4 hover:text-blue-600${
//                   isActive(item.path) ? "text-gray-700" : ""
//                 }`}
//               >
//                 {item.title}
//               </NavLink>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </header>
//     </div>
//   );
// }

// export default App;













import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { NavLink } from "react-router-dom";
import { Events, scrollSpy } from "react-scroll";
import slogo from '../../../public/slogo.jpeg';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleSetActive = (to, element) => {
      setActiveSection(to);
    };

    Events.scrollEvent.register("begin", handleSetActive);

    return () => {
      Events.scrollEvent.remove("begin");
    };
  }, []);

  useEffect(() => {
    scrollSpy.update();
  });

  const menuItems = [
    { id: 5, title: "Home", path: "/" },
    { id: 1, title: "About Us", path: "/about-us" },
    { id: 2, title: "Services", path: "/service" },
    { id: 4, title: "Contact Us", path: "/contact-us" },
  ];

  const isActive = (path) => {
    return activeSection === path;
  };

  return (
    <div
      style={{ fontFamily: "Century Gothic" }}
      className="flex flex-col font-Poppins w-full overflow-x-hidden"
    >
      <header
        className={`z-50 lg:text-2xl text-lg w-full bg-white font-medium py-6 px-10 capitalize ${
          isScrolled ? "fixed top-0" : ""
        } flex items-center justify-between`}
      >
        {/* Logo on the left */}
        <div className="flex items-center">
          <img src={slogo} alt="Logo" className="w-12 lg:w-14  rounded-xl cursor-pointer absolute left-0 
  lg:top-2   lg:mt-4 lg:mx-24 md:mx-20  sm:mx-10  mx-5  z-10" />
          {/* h-10 w-auto mr-4  */}
        </div>

        {/* Swiper for Menu Items */}
        <div className="flex-1">
          <Swiper
            slidesPerView={menuItems.length <= 2 ? "auto" : 2}
            spaceBetween={0}
            centeredSlides={true}
            grabCursor={true}
            className="w-full"
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            breakpoints={{
              768: {
                slidesPerView: 8,
              },
            }}
          >
            {menuItems.map((item) => (
              <SwiperSlide key={item.id}>
                <NavLink
                  to={item.path}
                  className={`cursor-pointer block text-center px-4 py-2 mr-4 hover:text-blue-600 ${
                    isActive(item.path) ? "text-gray-700" : ""
                  }`}
                >
                  {item.title}
                </NavLink>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>
    </div>
  );
}

export default App;
