
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,          
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,    
        settings: {
          slidesToShow: 2,    
        },
      },
      {
        breakpoint: 768,      
        settings: {
          slidesToShow: 1,    
        },
      },
      {
        breakpoint: 640,     
        settings: {
          slidesToShow: 1,    
        },
      },
    ],
  };

  return (
  <>
  <div className="bg-blue-600">
  <div className="flex flex-col  lg:mx-20  mx-0 md:flex-row items-center justify-between md:gap-8 mt-5 p-8">
   
   <div className="md:w-1/2 mb-8 md:mb-0">
     <h2 className="text-5xl font-bold mb-4">Our Products</h2>
     <p className="text-lg mb-6">
       Our tax services are designed to assist both individuals and businesses in navigating the complexities of tax compliance. 
       We offer comprehensive solutions that ensure your financial well-being while minimizing tax liabilities.
     </p>
     <ul className="list-none space-y-2">
       <li>— Tax Consultation</li>
       <li>— Income Tax Filing</li>
       <li>— Corporate Tax Planning</li>
       <li>— GST Registration & Filing</li>
       <li>— International Taxation</li>
       <li>— Tax Audit & Representation</li>
     </ul>
   </div>

   
   <div className="md:w-1/2 w-full">
     <Slider {...settings}>
       <div>
         <img
           src="https://img.freepik.com/free-vector/people-doing-shopping-webpage_74855-2513.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"

       
           alt="Tax Services Banner"
           className="w-full h-auto object-cover md:h-[400px]"
         />
       </div>
       <div>
         <img
           src="https://img.freepik.com/free-vector/payment-receipt-template-with-flat-design_23-2147906389.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
           alt="Tax Services Banner 2"
           className="w-full h-auto object-cover md:h-[400px]" 
         />
       </div>
       <div>
         <img
           src="https://img.freepik.com/free-vector/flat-3d-isometric-realty-estate-financial-accounting-bookkeeping-business-concept_126523-1602.jpg?ga=GA1.1.2000051094.1716005427&semt=ais_hybrid"
           alt="Tax Services Banner 3"
           className="w-full h-auto object-cover md:h-[400px]"  
         />
       </div>
     </Slider>
   </div>
 </div>
  </div>
  </>
  );
};

export default Products;
