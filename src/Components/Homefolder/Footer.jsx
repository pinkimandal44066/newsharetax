// import React from "react";
// import { NavLink } from "react-router-dom";
// import sslogo from "../../../public/sslogo.png";
// const Footer = () => {
//   return (
//     <>
//       <div>
//         <footer className="bg-blue-600 text-white py-8">
//           <div className="container mx-auto px-4">
//             <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
//               <div>
//                 <img
//                   src={sslogo}
//                   alt="Shaare Tax Company Logo"
//                   className="w-20 h-auto"
//                 />
//                 <h2 className="text-lg font-semibold">Shaare Tax </h2>
//                 <p>
//                   Our firm is committed to delivering top-notch accounting and
//                   financial services.
//                 </p>
//               </div>

//               <div className="ml-0 lg:ml-10">
//                 <h2 className="text-lg font-semibold mb-4">SERVICES</h2>
//                 <ul>
//                   <li>
//                     <a href="#" className="hover:underline">
//                       Tax Consulting
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="hover:underline">
//                       Financial Planning
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="hover:underline">
//                       Reporting
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="hover:underline">
//                       Consulting
//                     </a>
//                   </li>
//                   <li>
//                     <NavLink to="/faq" className="hover:underline">
//                       FAQ
//                     </NavLink>
//                   </li>
//                 </ul>
//               </div>

//               <div className="ml-0 lg:ml-10">
//                 <h2 className="text-lg font-semibold mb-4">COMPANY</h2>
//                 <ul>
//                   <li>
//                     <NavLink to="/" className="hover:underline">
//                       Home
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/about-us" className="hover:underline">
//                       About Us
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/service" className="hover:underline">
//                       Services
//                     </NavLink>
//                   </li>
//                   <li>
//                     <NavLink to="/contact-us" className="hover:underline">
//                       Contact Us
//                     </NavLink>
//                   </li>
//                   <li>
//                     <a href="#" className="hover:underline">
//                       Careers
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               <div>
//                 <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
//                 <ul>
//                   <li>
//                     <a
//                       href="mailto:service.sharetax@gmail.com"
//                       className="hover:underline"
//                     >
//                       Email: service.sharetax@gmail.com
//                     </a>
//                   </li>
//                   <li>
//                     <a href="tel:+919830969099" className="hover:underline">
//                       Phone: +91 9830969099
//                     </a>
//                   </li>
//                   <li>
//                     <a href="#" className="hover:underline">
//                       2nd Floor, Sneha Plaza Bank more, Dhanbad 826001
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               <div>
//                 <h2 className="text-lg font-semibold mb-4">More Links</h2>
//                 <form className="mt-4">
//                   <input
//                     type="email"
//                     placeholder="Send Gmail"
//                     className="w-full p-2 rounded bg-blue-950 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
//                   />
//                   <button
//                     type="submit"
//                     className="mt-2 w-full bg-white hover:bg-black text-black hover:text-white py-2 rounded"
//                   >
//                     Send
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>

//           <div className="max-w-screen-xl lg:mx-auto mx-5">
//             <div className=" mt-10">
//               <h1 className="text-lg font-semibold">POPULAR SEARCHES</h1>
//               <p className="w-full text-xs lg:text-base mt-2">
//                 Our Policies | My Account | Create an Account | Tata New | About
//                 Us Our Mission | Our Journey | What We Do
//               </p>
//             </div>

//             <hr className="border border-white  lg:mt-10 mt-5" />

//             <div className=" mt-5 mb-20">
//               <h1 className="text-xl font-medium">
//                 <a
//                   href="https://www.systaio.com/"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="hover:underline"
//                 >
//                   POWERED BY Systaio.com
//                 </a>
//               </h1>
//             </div>
//           </div>

//           <div className="bg-blue-950 py-4 mt-8">
//             <div className="container mx-auto px-4 text-center">
//               <p>
//                 &copy; {new Date().getFullYear()} Shaare Tax Company. All rights
//                 reserved.
//               </p>
//             </div>
//           </div>
//         </footer>
//       </div>
//     </>
//   );
// };

// export default Footer;























// import React from "react";
// import { NavLink } from "react-router-dom";
// import sslogo from "../../../public/sslogo.png";

// const Footer = () => {
//   return (
//     <>
//       <footer className="bg-blue-600 text-white py-8">
//         <div className="container mx-auto px-4">
//           {/* Grid layout */}
//           <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
//             {/* Company Logo and Info */}
//             <div className="flex flex-col items-start">
//               <img
//                 src={sslogo}
//                 alt="Shaare Tax Company Logo"
//                 className="w-20 h-auto mb-4"
//               />
//               <h2 className="text-lg font-semibold">Shaare Tax</h2>
//               <p className="mt-2 text-sm">
//                 Our firm is committed to delivering top-notch accounting and
//                 financial services.
//               </p>
//             </div>

//             {/* Services */}
//             <div>
//               <h2 className="text-lg font-semibold mb-4">SERVICES</h2>
//               <ul>
//                 <li>
//                   <a href="#" className="hover:underline">
//                     Tax Consulting
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:underline">
//                     Financial Planning
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:underline">
//                     Reporting
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:underline">
//                     Consulting
//                   </a>
//                 </li>
//                 <li>
//                   <NavLink to="/faq" className="hover:underline">
//                     FAQ
//                   </NavLink>
//                 </li>
//               </ul>
//             </div>

//             {/* Company Links */}
//             <div>
//               <h2 className="text-lg font-semibold mb-4">COMPANY</h2>
//               <ul>
//                 <li>
//                   <NavLink to="/" className="hover:underline">
//                     Home
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/about-us" className="hover:underline">
//                     About Us
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/service" className="hover:underline">
//                     Services
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink to="/contact-us" className="hover:underline">
//                     Contact Us
//                   </NavLink>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:underline">
//                     Careers
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* Contact Us */}
//             <div>
//               <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
//               <ul>
//                 <li>
//                   <a
//                     href="mailto:service.sharetax@gmail.com"
//                     className="hover:underline"
//                   >
//                     Email: service.sharetax@gmail.com
//                   </a>
//                 </li>
//                 <li>
//                   <a href="tel:+919830969099" className="hover:underline">
//                     Phone: +91 9830969099
//                   </a>
//                 </li>
//                 <li>
//                   <a href="#" className="hover:underline">
//                     2nd Floor, Sneha Plaza Bank more, Dhanbad 826001
//                   </a>
//                 </li>
//               </ul>
//             </div>

//             {/* More Links */}
//             <div>
//               <h2 className="text-lg font-semibold mb-4">More Links</h2>
//               <form className="mt-4">
//                 <input
//                   type="email"
//                   placeholder="Send Gmail"
//                   className="w-full p-2 rounded bg-blue-950 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
//                 />
//                 <button
//                   type="submit"
//                   className="mt-2 w-full bg-white hover:bg-black text-black hover:text-white py-2 rounded"
//                 >
//                   Send
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Popular Searches */}
//         <div className="max-w-screen-xl lg:mx-auto sm:mx-5 md:mx-5    mx-5">
//           <div className="mt-10">
//             <h1 className="text-lg font-semibold">POPULAR SEARCHES</h1>
//             <p className="w-full text-xs lg:text-base mt-2">
//               Our Policies | My Account | Create an Account | Tata New | About
//               Us Our Mission | Our Journey | What We Do
//             </p>
//           </div>

//           <hr className="border border-white lg:mt-10 mt-5" />

//           {/* Powered By */}
//           <div className="mt-5 mb-20">
//             <h1 className="text-xl font-medium">
//               <a
//                 href="https://www.systaio.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="hover:underline"
//               >
//                 POWERED BY Systaio.com
//               </a>
//             </h1>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="bg-blue-950 py-4 mt-8">
//           <div className="container mx-auto px-4 text-center">
//             <p>
//               &copy; {new Date().getFullYear()} Shaare Tax Company. All rights
//               reserved.
//             </p>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;









import React from "react";
import { NavLink } from "react-router-dom";
import sslogo from "../../../public/sslogo.png";

const Footer = () => {
  return (
    <>
    <div className=" bg-blue-600">
    <footer className=" text-white py-8 lg:mx-10 mx-1">
        <div className="max-w-screen-2xl mx-auto px-4">
          {/* Grid layout */}
          <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-8">
            {/* Company Logo and Info */}
            <div className="flex flex-col items-start">
              <img
                src={sslogo}
                alt="Shaare Tax Company Logo"
                className="w-20 h-auto mb-4"
              />
              <h2 className="text-lg font-semibold">Shaare Tax</h2>
              <p className="mt-2 text-sm">
                Our firm is committed to delivering top-notch accounting and
                financial services.
              </p>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-lg font-semibold mb-4">SERVICES</h2>
              <ul>
                <li>
                  <a href="#" className="hover:underline">
                    Tax Consulting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Financial Planning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Reporting
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Consulting
                  </a>
                </li>
                <li>
                  <NavLink to="/faq" className="hover:underline">
                    FAQ
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/blog" className="hover:underline">
                   Blog
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h2 className="text-lg font-semibold mb-4">COMPANY</h2>
              <ul>
                <li>
                  <NavLink to="/" className="hover:underline">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about-us" className="hover:underline">
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/service" className="hover:underline">
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact-us" className="hover:underline">
                    Contact Us
                  </NavLink>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
              <ul>
                <li>
                  <a
                    href="mailto:service.sharetax@gmail.com"
                    className="hover:underline"
                  >
                    Email: service.sharetax@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919830969099" className="hover:underline">
                    Phone: +91 9830969099
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    2nd Floor, Sneha Plaza Bank more, Dhanbad 826001
                  </a>
                </li>
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h2 className="text-lg font-semibold mb-4">More Links</h2>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Send Gmail"
                  className="w-full p-2 rounded bg-blue-950 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="mt-2 w-full bg-white hover:bg-black text-black hover:text-white py-2 rounded"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="max-w-screen-2xl mx-auto px-4">
          <div className="mt-10">
            <h1 className="text-lg font-semibold">POPULAR SEARCHES</h1>
            <p className="text-xs lg:text-base mt-2">
              Our Policies | My Account | Create an Account | Tata New | About
              Us Our Mission | Our Journey | What We Do
            </p>
          </div>

          <hr className="border border-white lg:mt-10 mt-5" />

          {/* Powered By */}
          <div className="mt-5 mb-20">
            <h1 className="text-xl font-medium">
              <a
                href="https://www.systaio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                POWERED BY Systaio.com
              </a>
            </h1>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-blue-950 py-4 mt-8">
          <div className="container mx-auto px-4 text-center">
            <p>
              &copy; {new Date().getFullYear()} Shaare Tax Company. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default Footer;
