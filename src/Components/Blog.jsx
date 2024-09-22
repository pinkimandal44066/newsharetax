// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import img3 from "../../public/img3.png";

// const Blog = () => {
//   const [isLoaded, setIsLoaded] = useState(false); // Define isLoaded state

//   useEffect(() => {
//     AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
//     setIsLoaded(true); // Set isLoaded to true when component mounts
//   }, []);

//   const blogs = [
//     {
//       title: "Maximizing Your Tax Deductions",
//       description:
//         "Learn how to effectively utilize deductions to minimize your tax liability.",
//       image:
//         "https://img.freepik.com/premium-photo/modern-office-workspace-with-calculator_23-2150282060.jpg?auto=format&fit=crop&w=315&h=220",
//       // date: "Sept 22, 2024",
//     },
//     {
//       title: "Understanding Tax Credits: A Guide",
//       description:
//         "Explore the essential tax credits available to individuals and businesses.",
//       image:
//         "https://img.freepik.com/free-photo/two-young-business-people-working-with-document_144627-16689.jpg?w=1060&t=st=1709041994~exp=1709042594~hmac=67d37791d13209db401bb22aa8eacdc19489091eb9c26f6ce39255bcab23d5f2&auto=format&fit=crop&w=315&h=220",
//       // date: "Sept 15, 2024",
//     },
//     {
//       title: "The Importance of Filing Taxes on Time",
//       description:
//         "Understand the implications and benefits of timely tax filing.",
//       image:
//         "https://img.freepik.com/free-photo/person-filling-tax-form_1262-3090.jpg?w=1060&t=st=1709045797~exp=1709046397~hmac=fa0832f7e9a91d75085ed0264fbb2937d2320797f7cb8a8571027a979d542ca8&auto=format&fit=crop&w=315&h=220",
//       // date: "Sept 5, 2024",
//     },
//   ];

//   // Blog post data for main page
//   const blogPosts = [
//     {
//       title: "Tax Filing Tips for Individuals and Businesses",
//       date: "September 1, 2024",
//       content:
//         "Filing taxes can be daunting. Here are some helpful tips to ease the process...",
//       link: "#",
//     },
//     {
//       title: "Top 5 Financial Mistakes to Avoid",
//       date: "August 25, 2024",
//       content:
//         "Avoid these common financial pitfalls that can derail your financial goals...",
//       link: "#",
//     },
//     {
//       title: "A Guide to Financial Independence",
//       date: "August 20, 2024",
//       content:
//         "Learn the steps you need to take to achieve financial independence...",
//       link: "#",
//     },
//   ];

//   return (
//     <div>
//       <header
//         className={`relative text-center mb-12 w-full h-60 sm:h-80 md:h-96 flex flex-col justify-center items-center transition-opacity duration-1000 ${
//           isLoaded ? "opacity-100" : "opacity-0"
//         }`}
//         style={{
//           backgroundImage: `url(${img3})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <h1
//           className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
//           data-aos="fade-up"
//         >
//           ShareTax Blog
//         </h1>
//         <p
//           className="relative z-10 mt-2 text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200"
//           data-aos="fade-up"
//           data-aos-delay="200"
//         >
//           Your trusted source for tax and financial advice.
//         </p>
//       </header>
//       <div className="bg-gradient-to-r from-blue-600 to-green-400 via-yellow-300 py-14">
//         <div className="container mx-auto px-6">
//           <h2 className="text-5xl font-extrabold text-white text-center mb-20">
//             Discover Our Latest Articles
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogs.map((blog, index) => (
//               <div
//                 key={index}
//                 className="relative group hover:bg-gradient-to-b from-blue-500 to-purple-600 rounded-xl overflow-hidden transition-all duration-700"
//                 data-aos="fade-up"
//               >
//                 <img
//                   className="w-full h-64 object-cover group-hover:opacity-30 transition-opacity duration-700"
//                   src={blog.image}
//                   alt={blog.title}
//                 />
//                 <div className="absolute inset-0 p-8 opacity-0 group-hover:opacity-100 flex flex-col justify-between transition-all duration-700">
//                   <h3 className="text-3xl font-bold text-white mb-6">
//                     {blog.title}
//                   </h3>
//                   <p className="text-white mb-8">{blog.description}</p>
//                   <p className="text-gray-300">{blog.date}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 bg-gray-100">
//         {/* <header
//           className={`relative text-center mb-12 w-full h-60 sm:h-80 md:h-96 flex flex-col justify-center items-center transition-opacity duration-1000 ${
//             isLoaded ? "opacity-100" : "opacity-0"
//           }`}
//           style={{
//             backgroundImage: `url(${img3})`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           <div className="absolute inset-0 bg-black opacity-50"></div>
//           <h1
//             className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
//             data-aos="fade-up"
//           >
//             ShareTax Blog
//           </h1>
//           <p
//             className="relative z-10 mt-2 text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200"
//             data-aos="fade-up"
//             data-aos-delay="200"
//           >
//             Your trusted source for tax and financial advice.
//           </p>
//         </header> */}

//         {/* Main Content */}
//         <div className="flex flex-wrap justify-between w-full max-w-6xl">
//           {/* Blog Posts */}
//           <div className="w-full md:w-3/4 lg:pr-8 mb-6">
//             {blogPosts.map((post, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-4 sm:p-6 mb-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//                 data-aos="fade-up"
//               >
//                 <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-blue-600">
//                   {post.title}
//                 </h2>
//                 <p className="text-gray-500 mb-4 text-xs sm:text-sm">
//                   {post.date}
//                 </p>
//                 <p className="text-gray-700 mb-4 text-sm sm:text-base">
//                   {post.content}
//                 </p>
//                 <a
//                   href={post.link}
//                   className="text-blue-500 hover:text-blue-700 font-semibold inline-flex items-center transition duration-200"
//                 >
//                   Read More
//                   <svg
//                     className="ml-2 w-4 h-4"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M13 7l5 5-5 5M6 12h12"
//                     />
//                   </svg>
//                 </a>
//               </div>
//             ))}
//           </div>

//           {/* Sidebar */}
//           <aside className="w-full md:w-1/4">
//             {/* Categories Section */}
//             <div
//               className="bg-white p-4 sm:p-6 mb-6 rounded-lg shadow-lg"
//               data-aos="fade-left"
//             >
//               <h3 className="text-lg sm:text-xl font-bold mb-4 text-blue-600">
//                 Categories
//               </h3>
//               <ul className="list-disc list-inside space-y-2">
//                 {[
//                   "Tax Tips",
//                   "Financial Planning",
//                   "Business Advice",
//                   "Legal Insights",
//                 ].map((category, index) => (
//                   <li
//                     key={index}
//                     className="text-gray-700 hover:text-blue-500 cursor-pointer transition duration-200"
//                   >
//                     {category}
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             {/* Recent Posts Section */}
//             <div
//               className="bg-white p-4 sm:p-6 rounded-lg shadow-lg"
//               data-aos="fade-left"
//               data-aos-delay="200"
//             >
//               <h3 className="text-lg sm:text-xl font-bold mb-4 text-blue-600">
//                 Recent Posts
//               </h3>
//               <ul className="space-y-4">
//                 {[
//                   {
//                     title: "Maximize Your Tax Deductions: A Complete Guide",
//                     date: "September 15, 2024",
//                     summary:
//                       "Learn how to identify and maximize your tax deductions for the current financial year.",
//                     link: "#",
//                   },
//                   {
//                     title: "Essential Financial Planning Strategies for 2024",
//                     date: "September 10, 2024",
//                     summary:
//                       "Explore effective strategies to secure your financial future in 2024.",
//                     link: "#",
//                   },
//                   {
//                     title:
//                       "Understanding GST and Its Impact on Small Businesses",
//                     date: "September 5, 2024",
//                     summary:
//                       "A comprehensive overview of GST and how it affects small business owners.",
//                     link: "#",
//                   },
//                 ].map((post, index) => (
//                   <li key={index} className="border-b pb-4">
//                     <h4 className="font-semibold text-blue-600 hover:text-blue-700 cursor-pointer transition duration-200">
//                       {post.title}
//                     </h4>
//                     <p className="text-gray-500 text-xs sm:text-sm">
//                       {post.date}
//                     </p>
//                     <p className="text-gray-700 text-xs sm:text-sm">
//                       {post.summary}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;

























// import React, { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import img3 from "../../public/img3.png";

// const Blog = () => {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
//     setIsLoaded(true);
//     document.body.style.overflowX = "hidden"; // Fix for page shaking
//   }, []);

//   const blogs = [
//     {
//       title: "Maximizing Your Tax Deductions",
//       description:
//         "Learn how to effectively utilize deductions to minimize your tax liability.",
//       image:
//         "https://img.freepik.com/premium-photo/modern-office-workspace-with-calculator_23-2150282060.jpg?auto=format&fit=crop&w=315&h=220",
//     },
//     {
//       title: "Understanding Tax Credits: A Guide",
//       description:
//         "Explore the essential tax credits available to individuals and businesses.",
//       image:
//         "https://img.freepik.com/free-photo/two-young-business-people-working-with-document_144627-16689.jpg?w=1060&t=st=1709041994~exp=1709042594~hmac=67d37791d13209db401bb22aa8eacdc19489091eb9c26f6ce39255bcab23d5f2&auto=format&fit=crop&w=315&h=220",
//     },
//     {
//       title: "The Importance of Filing Taxes on Time",
//       description:
//         "Understand the implications and benefits of timely tax filing.",
//       image:
//         "https://img.freepik.com/free-photo/person-filling-tax-form_1262-3090.jpg?w=1060&t=st=1709045797~exp=1709046397~hmac=fa0832f7e9a91d75085ed0264fbb2937d2320797f7cb8a8571027a979d542ca8&auto=format&fit=crop&w=315&h=220",
//     },
//   ];

//   const blogPosts = [
//     {
//       title: "Tax Filing Tips for Individuals and Businesses",
//       date: "September 1, 2024",
//       content:
//         "Filing taxes can be daunting. Here are some helpful tips to ease the process...",
//       link: "#",
//     },
//     {
//       title: "Top 5 Financial Mistakes to Avoid",
//       date: "August 25, 2024",
//       content:
//         "Avoid these common financial pitfalls that can derail your financial goals...",
//       link: "#",
//     },
//     {
//       title: "A Guide to Financial Independence",
//       date: "August 20, 2024",
//       content:
//         "Learn the steps you need to take to achieve financial independence...",
//       link: "#",
//     },
//   ];

//   return (
//     <div>
//       <header
//         className={`relative text-center mb-12 w-full h-60 sm:h-80 md:h-96 flex flex-col justify-center items-center transition-opacity duration-1000 ${
//           isLoaded ? "opacity-100" : "opacity-0"
//         }`}
//         style={{
//           backgroundImage: `url(${img3})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <h1
//           className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
//           data-aos="fade-up"
//         >
//           ShareTax Blog
//         </h1>
//         <p
//           className="relative z-10 mt-2 text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200"
//           data-aos="fade-up"
//           data-aos-delay="200"
//         >
//           Your trusted source for tax and financial advice.
//         </p>
//       </header>

//       <div className="bg-gradient-to-r from-blue-600 to-green-400 via-yellow-300 py-14">
//         <div className="container mx-auto px-6">
//           <h2 className="text-5xl font-extrabold text-white text-center mb-20">
//             Discover Our Latest Articles
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogs.map((blog, index) => (
//               <div
//                 key={index}
//                 className="relative group hover:bg-gradient-to-b from-blue-500 to-purple-600 rounded-xl overflow-hidden transition-all duration-700"
//                 data-aos="fade-up"
//               >
//                 <img
//                   className="w-full h-64 object-cover group-hover:opacity-30 transition-opacity duration-700"
//                   src={blog.image}
//                   alt={blog.title}
//                 />
//                 <div className="absolute inset-0 p-8 opacity-0 group-hover:opacity-100 flex flex-col justify-between transition-all duration-700">
//                   <h3 className="text-3xl font-bold text-white mb-6">
//                     {blog.title}
//                   </h3>
//                   <p className="text-white mb-8">{blog.description}</p>
//                   <p className="text-gray-300">{blog.date}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 bg-gray-100">
//         <div className="flex flex-wrap justify-between w-full max-w-6xl">
//           <div className="w-full md:w-3/4 lg:pr-8 mb-6">
//             {blogPosts.map((post, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-4 sm:p-6 mb-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//                 data-aos="fade-up"
//               >
//                 <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-blue-600">
//                   {post.title}
//                 </h2>
//                 <p className="text-gray-500 mb-4 text-xs sm:text-sm">
//                   {post.date}
//                 </p>
//                 <p className="text-gray-700 mb-4 text-sm sm:text-base">
//                   {post.content}
//                 </p>
//                 <a
//                   href={post.link}
//                   className="text-blue-500 hover:text-blue-700 font-semibold inline-flex items-center transition duration-200"
//                 >
//                   Read More
//                   <svg
//                     className="ml-2 w-4 h-4"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M13 7l5 5-5 5M6 12h12"
//                     />
//                   </svg>
//                 </a>
//               </div>
//             ))}
//           </div>

//           <aside className="w-full md:w-1/4">
//             <div
//               className="bg-white p-4 sm:p-6 mb-6 rounded-lg shadow-lg"
//               data-aos="fade-left"
//             >
//               <h3 className="text-lg sm:text-xl font-bold mb-4 text-blue-600">
//                 Categories
//               </h3>
//               <ul className="list-disc list-inside space-y-2">
//                 {["Tax Tips", "Financial Planning", "Business Advice", "Legal Insights"].map(
//                   (category, index) => (
//                     <li
//                       key={index}
//                       className="text-gray-700 hover:text-blue-500 cursor-pointer transition duration-200"
//                     >
//                       {category}
//                     </li>
//                   )
//                 )}
//               </ul>
//             </div>

//             <div
//               className="bg-white p-4 sm:p-6 rounded-lg shadow-lg"
//               data-aos="fade-left"
//               data-aos-delay="200"
//             >
//               <h3 className="text-lg sm:text-xl font-bold mb-4 text-blue-600">
//                 Recent Posts
//               </h3>
//               <ul className="space-y-4">
//                 {[
//                   {
//                     title: "Maximize Your Tax Deductions: A Complete Guide",
//                     date: "September 15, 2024",
//                     summary:
//                       "Learn how to identify and maximize your tax deductions for the current financial year.",
//                     link: "#",
//                   },
//                   {
//                     title: "Essential Financial Planning Strategies for 2024",
//                     date: "September 10, 2024",
//                     summary:
//                       "Explore effective strategies to secure your financial future in 2024.",
//                     link: "#",
//                   },
//                   {
//                     title: "Understanding GST and Its Impact on Small Businesses",
//                     date: "September 5, 2024",
//                     summary:
//                       "A comprehensive overview of GST and how it affects small business owners.",
//                     link: "#",
//                   },
//                 ].map((post, index) => (
//                   <li key={index} className="border-b pb-4">
//                     <a
//                       href={post.link}
//                       className="text-blue-600 hover:text-blue-800 font-semibold"
//                     >
//                       {post.title}
//                     </a>
//                     <p className="text-gray-500 text-xs sm:text-sm mt-1">
//                       {post.date}
//                     </p>
//                     <p className="text-gray-700 text-xs sm:text-sm mt-1">
//                       {post.summary}
//                     </p>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </aside>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Blog;























import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import img3 from "../../public/img3.png";
import Blogtwo from '../Components/Blogtwo';

const Blog = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: false });
    setIsLoaded(true);
    document.body.style.overflowX = "hidden"; // Fix for page shaking
  }, []);

  const blogs = [
    {
      title: "Maximizing Your Tax Deductions",
      description:
        "Learn how to effectively utilize deductions to minimize your tax liability.",
      image:
        "https://img.freepik.com/premium-photo/modern-office-workspace-with-calculator_23-2150282060.jpg?auto=format&fit=crop&w=315&h=220",
    },
    {
      title: "Understanding Tax Credits: A Guide",
      description:
        "Explore the essential tax credits available to individuals and businesses.",
      image:
        "https://img.freepik.com/free-photo/two-young-business-people-working-with-document_144627-16689.jpg?w=1060&t=st=1709041994~exp=1709042594~hmac=67d37791d13209db401bb22aa8eacdc19489091eb9c26f6ce39255bcab23d5f2&auto=format&fit=crop&w=315&h=220",
    },
    {
      title: "The Importance of Filing Taxes on Time",
      description:
        "Understand the implications and benefits of timely tax filing.",
      image:
        "https://img.freepik.com/free-photo/person-filling-tax-form_1262-3090.jpg?w=1060&t=st=1709045797~exp=1709046397~hmac=fa0832f7e9a91d75085ed0264fbb2937d2320797f7cb8a8571027a979d542ca8&auto=format&fit=crop&w=315&h=220",
    },
  ];

  return (
    <div>
      <header
        className={`relative text-center mb-6 w-full h-60 sm:h-80 md:h-96 flex flex-col justify-center items-center transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1
          className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
          data-aos="fade-up"
        >
          ShareTax Blog
        </h1>
        <p
          className="relative z-10 mt-2 text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-200"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Your trusted source for tax and financial advice.
        </p>
      </header>

      <div className="bg-gradient-to-r from-blue-600 to-green-400 via-yellow-300 py-14">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-white text-center mb-20">
            Discover Our Latest Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="relative group hover:bg-gradient-to-b from-blue-500 to-purple-600 rounded-xl overflow-hidden transition-all duration-700"
                data-aos="fade-up"
              >
                <img
                  className="w-full h-64 object-cover group-hover:opacity-30 transition-opacity duration-700"
                  src={blog.image}
                  alt={blog.title}
                />
                <div className="absolute inset-0 p-8 opacity-0 group-hover:opacity-100 flex flex-col justify-between transition-all duration-700">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {blog.title}
                  </h3>
                  <p className="text-white mb-8">{blog.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

   {/* <Blogtwo /> */}
    </div>
  );
};

export default Blog;
