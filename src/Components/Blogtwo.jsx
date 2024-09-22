// import React from "react";

// const BlogPosts = () => {
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
//     <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 bg-gray-100">
//       <div className="flex flex-wrap justify-between w-full max-w-6xl">
//         <div className="w-full md:w-3/4 lg:pr-8 mb-6">
//           {blogPosts.map((post, index) => (
//             <div
//               key={index}
//               className="bg-white p-4 sm:p-6 mb-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//               data-aos="fade-up"
//             >
//               <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-blue-600">
//                 {post.title}
//               </h2>
//               <p className="text-gray-500 mb-4 text-xs sm:text-sm">
//                 {post.date}
//               </p>
//               <p className="text-gray-700 mb-4 text-sm sm:text-base">
//                 {post.content}
//               </p>
//               <a
//                 href={post.link}
//                 className="text-blue-500 hover:text-blue-700 font-semibold inline-flex items-center transition duration-200"
//               >
//                 Read More
//                 <svg
//                   className="ml-2 w-4 h-4"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M13 7l5 5-5 5M6 12h12"
//                   />
//                 </svg>
//               </a>
//             </div>
//           ))}
//         </div>
//         <aside className="w-full md:w-1/4">
//           {/* Add any sidebar content here */}
//         </aside>
//       </div>
//     </div>
//   );
// };

// export default BlogPosts;







































import React from "react";

const Sidebar = () => {
  const blogPosts = [
    {
      title: "Tax Filing Tips for Individuals and Businesses",
      date: "September 1, 2024",
      content:
        "Filing taxes can be daunting. Here are some helpful tips to ease the process...",
      link: "#",
    },
    {
      title: "Top 5 Financial Mistakes to Avoid",
      date: "August 25, 2024",
      content:
        "Avoid these common financial pitfalls that can derail your financial goals...",
      link: "#",
    },
    {
      title: "A Guide to Financial Independence",
      date: "August 20, 2024",
      content:
        "Learn the steps you need to take to achieve financial independence...",
      link: "#",
    },
  ];

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 bg-gray-100 ">
      <div className="flex flex-wrap justify-between w-full max-w-6xl">
        <div className="w-full md:w-3/4 lg:pr-8 mb-6">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 mb-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-2 text-blue-600">
                {post.title}
              </h2>
              <p className="text-gray-500 mb-4 text-xs sm:text-sm">
                {post.date}
              </p>
              <p className="text-gray-700 mb-4 text-sm sm:text-base">
                {post.content}
              </p>
              <a
                href={post.link}
                className="text-blue-500 hover:text-blue-700 font-semibold inline-flex items-center transition duration-200"
              >
                Read More
                <svg
                  className="ml-2 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5-5 5M6 12h12"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        <aside className="w-full md:w-1/4">
          <div
            className="bg-white p-4 sm:p-6 mb-6 rounded-lg shadow-lg"
            data-aos="fade-left"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-blue-600">
              Categories
            </h3>
            <ul className="list-disc list-inside space-y-2">
              {["Tax Tips", "Financial Planning", "Business Advice", "Legal Insights"].map(
                (category, index) => (
                  <li
                    key={index}
                    className="text-gray-700 hover:text-blue-500 cursor-pointer transition duration-200"
                  >
                    {category}
                  </li>
                )
              )}
            </ul>
          </div>

          <div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-lg"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-blue-600">
              Recent Posts
            </h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Maximizing Your Tax Deductions",
                  date: "September 3, 2024",
                  summary: "Learn how to maximize deductions and save money.",
                  link: "#",
                },
                {
                  title: "Understanding GST for Small Businesses",
                  date: "September 5, 2024",
                  summary:
                    "A detailed guide to GST and how it affects small business owners.",
                  link: "#",
                },
              ].map((post, index) => (
                <li key={index}>
                  <a
                    href={post.link}
                    className="block text-blue-500 hover:text-blue-700 font-semibold transition duration-200"
                  >
                    {post.title}
                  </a>
                  <p className="text-gray-500 text-xs sm:text-sm">
                    {post.date}
                  </p>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {post.summary}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
