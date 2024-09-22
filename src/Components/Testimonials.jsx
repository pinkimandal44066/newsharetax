// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/pagination";
// import { FreeMode, Pagination, Autoplay } from "swiper/modules";
// // import './Testimonials.css';

// export default function App() {
//   return (
//     <>
//       <h2 className="text-3xl font-bold text-center mt-10 mb-10">
//         Client Testimonials
//       </h2>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={20}
//         freeMode={true}
//         pagination={{
//           clickable: true,
//         }}
//         loop={true}
//         autoplay={{
//           delay: 1000,
//           disableOnInteraction: false,
//         }}
//         modules={[FreeMode, Pagination, Autoplay]}
//         className="mySwiper mb-10"
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 30,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//           },
//         }}
//       >
//         {Array(6)
//           .fill()
//           .map((_, index) => (
//             <SwiperSlide key={index}>
//               <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 max-w-md w-full text-center">
//                 <h4 className="font-semibold text-gray-800 mb-4">ABC DEF</h4>
//                 <p className="text-gray-700 leading-7">
//                   "The team at [Your Firm's Name] has been instrumental in
//                   helping our business navigate complex financial challenges.
//                   Their expertise and dedication are unmatched."
//                 </p>
//               </div>
//             </SwiperSlide>
//           ))}
//       </Swiper>
//     </>
//   );
// }
















import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "./Testimonials.css";  // Add this for custom CSS

export default function App() {
  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-10 mb-10">
        Client Testimonials
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 0,  // Set to 0 for continuous motion
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        speed={1000}  // Adjust speed for smoother scrolling
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper mb-10"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {Array(6)
          .fill()
          .map((_, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <h4 className="font-semibold text-gray-800 mb-4">ABC DEF</h4>
                <p className="text-gray-700 leading-7">
                  "The team at [Your Firm's Name] has been instrumental in
                  helping our business navigate complex financial challenges.
                  Their expertise and dedication are unmatched."
                </p>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
