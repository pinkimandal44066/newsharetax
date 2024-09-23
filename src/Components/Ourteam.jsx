import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const teamMembers = [
  {
    name: "Sumit Singh",
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid",
    role: "CEO & Founder",
    description:
      "With a mission to enhance financial literacy among those who may not fully understand the concept of “finance,” Sumit founded ShareTax. Sumit, a finance graduate with over 10 years of expertise in finance, accounting, and taxation, is a certified Research Analyst from the Securities Market of India and also holds a certification in Investment Banking from IIM Indore.",
  },
  {
    name: "Rishav Kejriwal",
    image:
      "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid",
    role: "Co-founder",
    description:
      "Rishav brings over five years of experience in finance, with a strong focus on the securities market and taxation. As a qualified Chartered Accountant with certification in accounts and finance from ICAI, he currently manages tax compliance matters.",
  },
  {
    name: "Anuj Kumar",
    image:
      "https://img.freepik.com/free-photo/man-wearing-t-shirt-gesturing_23-2149393647.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid",
    role: "Secretarial & Compliances",
    description:
      "Anuj boasts over 10 years of experience in company law and secretarial matters, with exceptional expertise in handling company-related issues. As a practicing Company Secretary with certification in company and secretarial compliance from ICSI, he currently oversees legal and secretarial compliance.",
  },
  {
    name: "Rahul Keshri",
    image:
      "https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid",
    role: "Technical Analyst",
    description:
      "Rahul brings over 5+ years of experience as a Technical Analyst, with a deep specialization in momentum and breakout trading, as well as volatility and liquidity-based strategies across equity, commodity, and currency markets. In an era increasingly dominated by AI and machine learning, Rahul remains a staunch advocate for traditional analysis methods, believing that timeless, hands-on techniques offer unparalleled insights and value in today's fast-paced trading environment.",
  },
  {
    name: "Amit Singh",
    image:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid",
    role: "Digital Branding Partner",
    description:
      "Amit is an expert in digital branding and marketing, with a focus on enhancing brand visibility through innovative online strategies.",
  },
];

const OurTeamSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
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
      <div className="mx-auto text-center overflow-hidden">
        <h1 className="text-4xl font-bold mb-8">Meet Our Team</h1>
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4">
              <div
                className="bg-white text-black rounded-lg p-2 shadow-lg hover:bg-blue600 transition-all duration-300 flex flex-col items-center justify-center"
                style={{ minHeight: "400px", minWidth: "230px" }} // Adjust height to allow more space
              >
                <div className="relative w-28 h-28 mb-2">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-lg font-semibold leading-tight">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-600 leading-none mt-2">
                  {member.role}
                </p>
                <p className="mt-2 text-gray-500 text-xs text-center">
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
