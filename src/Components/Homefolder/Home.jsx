// import React from "react";
import { FaInstagramSquare, FaFacebookSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Accordion from "./Accordion";
import img4 from '../../../public/img4.png';
import Products from "../Products";
const Home = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0d42edc6-65b0-4b59-8960-8f883bc43380");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const [message, setMessage] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message submitted: ${message}`);
    setMessage("");
  };





  
  return (
    <>
      {/* <div
        className=" 
           flex justify-evenly lg:flex-row md:flex-row flex-col mt-10 mb-10 bg-white items-center font-Poppins"
      >
        <div>
          <h1 className="lg:text-6xl text-3xl font-bold">
          Who We Are?
          </h1>
        </div>
        <div className="lg:w-[916px] md:w-96 w-80 text-justify sm:w-96 mt-2 font-light text-lg">
          <p>
          We are a dedicated team of professionals offering comprehensive accounting and financial services. 
    With a focus on precision, transparency, and excellence, we work tirelessly to help businesses and 
    individuals achieve their financial objectives.


          </p>
        </div>
      </div> */}



      <section className="bg-gradient-to-r  text-black text-center py-10">
        <h1 className="text-5xl font-bold mb-4"> Who We Are</h1>
        <p className="text-lg mb-6"> Welcome to ShareTax—your ultimate destination for all your financial and tax compliance needs. Established in 2021, ShareTax is an emerging venture guided by a team of seasoned professionals with over 10 years of expertise in financial services and tax planning. We cater to a diverse range of clients, from individuals and firms to corporates, SMEs, trusts, and LLPs.</p>
          {/* we offer expert accounting and financial services tailored to the unique needs of businesses and individuals. Led by an experienced Chartered Accountant, our firm provides personalized solutions with a strong focus on integrity and professionalism. Our services include tax planning, auditing, financial advisory, and business consulting. We are committed to delivering reliable, growth-oriented financial guidance. Partner with us to achieve your financial goals with confidence.  */}
        <NavLink to='/about-us'>
        <button className="bg-blue-600 text-white hover:text-black
         font-semibold py-2 px-6 rounded-lg shadow-md
         hover:bg-white">
          Learn More
        </button>
        </NavLink>
      </section>



      <div className="flex bg-white items-center font-Poppins justify-center mb-10 ">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          spaceBetween={170}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 0,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          loop={true}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="about-swiper"
          breakpoints={{
            1800: { spaceBetween: 140 },
            1600: { spaceBetween: 120 },
            1400: { spaceBetween: 100 },
            1200: { spaceBetween: 80 },
            1020: { spaceBetween: 60 },
            992: { spaceBetween: 60 },
            768: { spaceBetween: 40 },
            576: { spaceBetween: 40 },
            575: { spaceBetween: 40 },
            320: { spaceBetween: 20 },
            0: { spaceBetween: 10 },
          }}
        >
          <SwiperSlide>
            <img
              src={img4}
              alt="Nature 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
             
            
             src={img4}
             // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMrkUSIuR2aphIU9yTDLTL6BvdhCfu2yUC8Q5pMCPFxg&s"
              alt="Nature 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
                     src={img4}
              // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9m8nRquJdm6egP4mT_cw2YVIhirdBOYyhitFpqBwXBWcjejzwl2FPhRi2qBoRbjTtji4&usqp=CAU"
              alt="Nature 4"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
                     src={img4}
              // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-yUurIQwnkWX2zMopXVDAoB_BnJAG5rS5AAk_PTdcoA&s"
              alt="Nature 2"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
                     src={img4}
              // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAn_uOgKrPNfGYQApoajPLzVenMDvnTYI52MtGSPC-bw&s"
              alt="Nature 3"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
                     src={img4}
              // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWauK6MII9Ke1pMWQdrv0A3qi59lPJ_mv--PHmzrWpHQ&s"
              alt="Nature 4"
            />
          </SwiperSlide>
        </Swiper>
      </div>








      {/* <div className="flex justify-evenly lg:flex-row md:flex-row flex-col bg-white items-center font-Poppins">
        <div>
          <h1 className="lg:text-5xl text-3xl font-medium text-blue-700">
            Company Info
          </h1>
        </div>
        <div className="lg:w-[816px] mb-8 text-justify md:w-96 sm:w-96 w-80 mt-2 font-light text-lg">
          <p>
          Our services provide expert financial guidance, ensuring compliance with tax laws, accurate bookkeeping, and effective financial planning. Focusing on auditing, taxation, and advisory services, we help businesses navigate complex financial landscapes. Our dedicated team ensures precise financial reporting, enabling informed decision-making. Trust us to safeguard your financial health and promote sustainable growth.
          </p>
        </div>
      </div> */}











      

      <div className="max-w-screen-xl  text-center  justify-center  mx-7 lg:mx-64 md:mx-28 sm:mx-12 ">
        <h1 className="lg:text-5xl text-5xl font-bold text-black">
         Our Services
        </h1>
      </div>




<div className="max-w-4xl lg:mx-auto md:mx-10  mx-5 py-5">
  <p className="text-lg text-gray-800 mb-8 ">
    We provide financial solutions tailored to your needs. Our expertise ensures precision in financial management. From auditing to advisory services, we deliver results that drive growth. Partner with us to navigate financial complexities and achieve your goals.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-6">
    <div className="flex flex-col sm:flex-row items-center">
      <img src="https://img.freepik.com/free-photo/young-successful-businessman-sitting-workplace-office-background_176420-5236.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid" alt="Auditing" 
      className="w-60 lg:w-52 rounded-lg mb-2 sm:mb-0 sm:mr-4" />
      <p className="text-gray-700 text-center sm:text-left">Financial and Investment planning</p>
    </div>
    <div className="flex flex-col sm:flex-row items-center">
      <img src="https://img.freepik.com/free-photo/young-successful-businessman-sitting-workplace-office-background_176420-5282.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid" alt="Taxation" 
      className="w-60 lg:w-52 rounded-lg mb-2 sm:mb-0 sm:mr-4" />
      <p className="text-gray-700 text-center sm:text-left">Tax planning and optimization</p>
    </div>
    <div className="flex flex-col sm:flex-row items-center">
      <img src="https://img.freepik.com/free-photo/modern-office-composition-with-businessman_23-2147900141.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid" alt="Advisory" 
      className="w-60 lg:w-52 rounded-lg mb-2 sm:mb-0 sm:mr-4" />
      <p className="text-gray-700 text-center sm:text-left">Market Research Analysis and report</p>
    </div>
    <div className="flex flex-col sm:flex-row items-center">
      <img src="https://img.freepik.com/free-photo/hands-holding-smatphone-young-handsome-stylish-hipster-man-black-jacket-sitting-office-table-business-style-white-shirt-isolated-working-laptop-start-up-work-place_285396-1469.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid" alt="Bookkeeping"
       className="w-60 lg:w-52 rounded-lg mb-2 sm:mb-0 sm:mr-4" />
      <p className="text-gray-700 text-center sm:text-left">Business advisory and consulting</p>
    </div>
  </div>
</div>

 
      



























        
      {/* <div className="max-w-screen-xl lg:mx-auto  ">
        <div
          className=" lg:grid-cols-3 lg:grid md:grid-cols-2 md:grid sm:grid-cols-2 sm:grid grid-cols-1
      
      lg:mx-52  md:mx-24 md:gap-10  sm:mx-10 sm:gap-10 mt-6 mx-6 mb-8"
        >
     

          <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
            <h1 className="text-xl text-[#E79F30]   font-semibold lg:mt-10 md:mt-4 lg:mx-16 md:mx-7">
              Tax Planning:
            </h1>
            <p className="lg:w-60 text-xs  md:mx-2  lg:mx-4 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              veritatis enim minus non debitis quo unde iure ...
            </p>
          </div>

      

          <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
            <h1 className="text-xl text-[#E79F30]  font-semibold lg:mt-10 md:mt-4 lg:mx-12 md:mx-7">
              Tax Preparation:
            </h1>
            <p className="lg:w-60 text-xs  md:mx-2  lg:mx-5 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              veritatis enim minus non debitis quo unde iure ...
            </p>
          </div>



          <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
            <h1 className="text-xl  text-[#E79F30] font-semibold lg:mt-10 md:mt-4 lg:mx-10 md:mx-7">
              Tax Compliance:
            </h1>
            <p className="lg:w-60 text-xs  md:mx-2  lg:mx-4 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              veritatis enim minus non debitis quo unde iure ...
            </p>
          </div>

          <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
            <h1 className="text-xl  text-[#E79F30] font-semibold lg:mt-7 md:mt-4 lg:mx-10 md:mx-7">
              Tax Consultation:
            </h1>
            <p className="lg:w-60 text-xs  md:mx-2  lg:mx-4 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              veritatis enim minus non debitis quo unde iure ...
            </p>
          </div>

          <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
            <h1 className="text-xl text-[#E79F30] font-semibold lg:mt-7 md:mt-4 lg:mx-12 md:mx-7">
              Tax Assessment:
            </h1>
            <p className="lg:w-60 text-xs  md:mx-2  lg:mx-4 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              veritatis enim minus non debitis quo unde iure ...
            </p>
          </div>

          <div className="flex flex-col shadow-md lg:w-72 md:w-96 w-80 h-48 rounded-md   p-4">
            <h1 className="text-xl text-[#E79F30] font-semibold lg:mt-7 md:mt-4 lg:mx-12 md:mx-7">
              Tax Advocacy:
            </h1>
            <p className="lg:w-60 text-xs  md:mx-2  lg:mx-4 mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero
              veritatis enim minus non debitis quo unde iure ...
            </p>
          </div>
        </div>
      </div> */}

      <NavLink to="/service">
        <button
          className=" flex  border-2 
  border-gray-100 shadow-2xl  
  font-semibold py-2.5 px-9 mt- rounded-lg mx-auto        bg-blue-600 text-white hover:text-black  hover:bg-white
    "
        >
          View All
        </button>
      </NavLink>

      
      <Products />


{/* 
      <div className="min-h-screen  flex justify-center items-center lg:mx-20 lg:-mt-16 -mt-14">
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start p-4 sm:p-6 lg:p-12 space-y-10 lg:space-y-0 lg:space-x-16">
        
        <div className="lg:w-1/2 w-full text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-5">
            We'd love to learn more about you and what we can design and build together.
          </p>

          <div className="flex justify-center lg:justify-start space-x-6 mb-10">
            <FaInstagramSquare className="text-blue-600 hover:text-blue-800 w-14
             h-14 sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-14 lg:h-14" />
            <FaFacebookSquare className="text-blue-600 hover:text-blue-800 w-14 h-14
           sm:w-14 sm:h-14  md:w-14 md:h-14 lg:w-14 lg:h-14" />
            <FaTwitter className="text-blue-600 hover:text-blue-800 w-14 h-14
          sm:w-14 sm:h-14  md:w-12 md:h-12 lg:w-14 lg:h-14" />
            <FaLinkedin className="text-blue-600 hover:text-blue-800 w-14 h-14
          sm:w-14 sm:h-14 md:w-14 md:h-14 lg:w-14 lg:h-14" />
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex flex-col space-y-10">
          <div className="w-full  lg:-mt-20 md:-mt-10 sm:-mt-10 -mt-10"> 
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.437879692636!2d86.43137977432785!3d23.803023386755978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd41386c516d%3A0xbcd7d938eaed2bdd!2sSystAIO%20Technologies%20%2C%20Website%20Development%20Company%20in%20Dhanbad!5e0!3m2!1sen!2sin!4v1726921881051!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>

      </div>
    </div> */}






<div className="min-h-screen flex justify-center items-center lg:mx-20 lg:-mt-20 md:-mt-1  sm:-mt-1 mb-16 -mt-14">
  <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start p-4 sm:p-6 lg:p-12 space-y-10 lg:space-y-0 lg:space-x-16">

    <div className="lg:w-1/2 w-full text-center lg:text-left">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get in Touch</h1>
      <p className="text-lg sm:text-xl text-gray-700 mb-5">
        We'd love to learn more about you and what we can design and build together.
      </p>

      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-6 mb-10">
        <div className="flex justify-center lg:justify-start space-x-6">
          <FaInstagramSquare className="text-blue-600 hover:text-blue-800 w-14 h-14" />
          <FaFacebookSquare className="text-blue-600 hover:text-blue-800 w-14 h-14" />
          <FaTwitter className="text-blue-600 hover:text-blue-800 w-14 h-14" />
          <FaLinkedin className="text-blue-600 hover:text-blue-800 w-14 h-14" />
        </div>
        

        {/* className="bg-blue-600 text-white hover:text-black
         font-semibold py-2 px-6 rounded-lg shadow-md
         hover:bg-white" */}
        {/* Button next to social media icons on all devices except mobile */}

        <NavLink to='/contact-us'>
        <button className="bg-blue-600 text-white lg:py-4 lg:px-5
        md:py-4   rounded-lg hover:bg-blue-800 transition duration-200 hidden lg:block">
          Contact Us
        </button>
        </NavLink>
      </div>

      {/* Button below social media icons on mobile screens */}
      <NavLink to='/contact-us'>
      <button className="bg-blue-600 text-white px-6 py-4  -mt-10
      rounded-lg hover:bg-blue-800 transition duration-200 lg:hidden">
        Contact Us
      </button>
      </NavLink>
    </div>

    <div className="lg:w-1/2 w-full flex flex-col space-y-10">
      <div className="w-full lg:-mt-20 md:-mt-5 sm:-mt-5 -mt-5 "> 
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.437879692636!2d86.43137977432785!3d23.803023386755978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bd41386c516d%3A0xbcd7d938eaed2bdd!2sSystAIO%20Technologies%20%2C%20Website%20Development%20Company%20in%20Dhanbad!5e0!3m2!1sen!2sin!4v1726921881051!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
    </div>

  </div>
</div>



      <Accordion />
    </>
  );
};

export default Home;
