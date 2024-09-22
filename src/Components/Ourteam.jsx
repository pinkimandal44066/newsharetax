// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const teamMembers = [
//   {
//     name: "Sumit Singh",
//     image:
//       "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid",
//     role: "CEO & Founder",
//     description:
//       "With a mission to enhance financial literacy among those who may not fully understand the concept of “finance,” Sumit founded ShareTax...",
//   },
//   {
//     name: "Rishav Kejriwal",
//     image:
//       "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid",
//     role: "Co-founder",
//     description:
//       "Rishav brings over five years of experience in finance, with a strong focus on the securities market and taxation...",
//   },
//   {
//     name: "Anuj Kumar",
//     image:
//       "https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393647.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid",
//     role: "Secretarial & Compliances",
//     description:
//       "Anuj boasts over 10 years of experience in company law and secretarial matters...",
//   },
//   {
//     name: "Rahul Keshri",
//     image:
//       "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid",
//     role: "Technical Analyst",
//     description:
//       "Rahul brings over 5+ years of experience as a Technical Analyst...",
//   },
//   {
//     name: "Amit Singh",
//     image:
//       "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid",
//     role: "Digital Branding Partner",
//     description: "",
//   },
// ];

// const OurTeamSlider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="py-16 bg-blue600 text-white">
//       <div className="container mx-auto text-center">
//         <h1 className="text-4xl font-bold mb-8">Our Team</h1>
//         <Slider {...settings}>
//           {teamMembers.map((member, index) => (
//             <div key={index} className="p-4">
//               <div
//                 className="bg-white text-black rounded-lg p-4 shadow-lg hover:bg-blue600 transition-all duration-300 w-full h-96 flex flex-col items-center justify-between"
//                 style={{ minHeight: "380px" }} // Ensures fixed height
//               >
//                 <div className="relative w-40 h-40">
//                   {" "}
//                   {/* Square div for the image */}
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-full h-full object-cover rounded-md hover:opacity-0 transition-opacity duration-300"
//                   />
//                   <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                     <h3 className="text-lg font-bold text-white">
//                       {member.name}
//                     </h3>
//                   </div>
//                 </div>
//                 <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
//                 <p className="text-sm text-gray-600">{member.role}</p>
//                 <p className="mt-2 text-gray-500 text-sm line-clamp-3 overflow-hidden">
//                   {" "}
//                   {/* Clamps text to 3 lines */}
//                   {member.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default OurTeamSlider;





















import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    name: "Sumit Singh",
    image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid",
    role: "CEO & Founder",
    description: "With a mission to enhance financial literacy among those who may not fully understand the concept of “finance,” Sumit founded ShareTax...",
  },
  {
    name: "Rishav Kejriwal",
    image: "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid",
    role: "Co-founder",
    description: "Rishav brings over five years of experience in finance, with a strong focus on the securities market and taxation...",
  },
  {
    name: "Anuj Kumar",
    image: "https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393647.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid",
    role: "Secretarial & Compliances",
    description: "Anuj boasts over 10 years of experience in company law and secretarial matters...",
  },
  {
    name: "Rahul Keshri",
    image: "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid",
    role: "Technical Analyst",
    description: "Rahul brings over 5+ years of experience as a Technical Analyst...",
  },
  {
    name: "Amit Singh",
    image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid",
    role: "Digital Branding Partner",
    description: "",
  },
];

const OurTeamSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-6 bg-blue600 text-black">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Meet Our Team</h1>
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4">
              <div
                className="bg-white text-black rounded-lg p-4 shadow-lg hover:bg-blue600 transition-all duration-300 w-full h-96 flex flex-col items-center justify-between"
                style={{ minHeight: "380px" }} 
              >
                <div className="relative w-40 h-40">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-md hover:opacity-0 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                  </div>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
                <p className="mt-2 text-gray-500 text-sm line-clamp-3 overflow-hidden">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default OurTeamSlider;
