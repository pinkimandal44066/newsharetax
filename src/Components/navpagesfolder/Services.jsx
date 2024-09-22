// import React from "react";
// import { NavLink } from "react-router-dom";
// import img3 from "../../../public/img3.png";
// const ServicesOverview = () => {
//   return (
//     <>
//       <img src={img3} alt="" />

//       <div className="bg-blue-600 p-6 md:p-8 mb-10">
//         <div className="container mx-auto">
//           <h1 className="text-5xl font-bold text-white mb-12 text-center">
//             Our Comprehensive Services
//           </h1>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//             {/* Accounting Services */}
//             {/* <NavLink to='/accounting' > */}
//             <div className="text-center">
//               <button className="text-xl font-semibold text-gray-800 py-2 px-6 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition-all">
//                 Accounting Services
//               </button>

//               <img
//                 src="https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1411.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid"
//                 alt="Tax Preparation"
//                 className="rounded-lg shadow-md w-full object-cover mb-4 mt-4 md:w-11/12 lg:w-11/12 mx-auto"
//               />

//               {/* <h2 className="text-3xl font-bold text-black mb-4">Accounting Services</h2> */}
//               <p className="text-xl text-white">
//                 We offer tailored accounting services, including financial
//                 statement preparation, bookkeeping, and strategic tax planning
//                 to meet your business needs. Our audit support ensures accuracy
//                 and facilitates a smooth audit process.
//               </p>
//             </div>
//             {/* </NavLink> */}

//             {/* Tax Planning & Preparation */}
//             {/* <NavLink to='/Taxplanning'> */}
//             <div className="text-center">
//               <button className="text-xl font-semibold text-gray-800 py-2 px-6 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition-all">
//                 Tax Planning & Preparation for Trading
//               </button>
//               <img
//                 src="https://img.freepik.com/free-photo/businessmen-hands-white-table-with-documents-drafts_176420-351.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid"
//                 alt="Tax Planning & Preparation"
//                 className="rounded-lg shadow-md w-full object-cover mt-4 mb-4 md:w-11/12 lg:w-11/12 mx-auto"
//               />

//               {/* <h2 className="text-3xl font-bold text-black mb-4">Tax Planning & Preparation for Trading</h2> */}
//               <p className="text-xl text-white">
//                 Our Tax Planning & Preparation services are tailored for traders
//                 and investors, ensuring you effectively manage your tax
//                 obligations related to trading activities. We help you navigate
//                 the complexities of tax laws specific to trading, so you can
//                 focus on maximizing your investments.
//               </p>
//             </div>
//             {/* </NavLink> */}

//             {/* Auditing */}
//             {/* <NavLink to='/Auditing'> */}
//             <div className="text-center">
//               <button className="text-xl font-semibold text-gray-800 py-2 px-6 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition-all">
//                 {/* Auditing */}
//                 aaaaaaaaaaa
//               </button>
//               <img
//                 src="https://img.freepik.com/free-photo/paperwork_1098-18063.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid"
//                 alt="Auditing"
//                 className="rounded-lg shadow-md w-full object-cover mt-4 mb-4 md:w-11/12 lg:w-11/12 mx-auto"
//               />

//               {/* <h2 className="text-3xl font-bold text-black mb-4">Auditing</h2> */}
//               <p className="text-xl text-white">
//                 Our auditing and assurance services provide independent
//                 evaluations of financial statements to ensure accuracy and
//                 compliance. We help identify risks and improve operational
//                 efficiency for better business decision-making.
//               </p>
//             </div>
//             {/* </NavLink> */}

//             {/* Consulting */}
//             <div className="text-center">
//               <button className="text-xl font-semibold text-gray-800 py-2 px-6 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition-all">
//                 Consulting
//               </button>
//               <img
//                 src="https://img.freepik.com/free-photo/businessmen-elegant-suits-business-meeting-discussing-new-project-office_181624-47022.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid"
//                 alt="Consulting"
//                 className="rounded-lg shadow-md w-full object-cover  mt-4 mb-4 md:w-11/12 lg:w-11/12 mx-auto"
//               />

//               {/* <h2 className="text-3xl font-bold text-black mb-4">Consulting</h2> */}
//               <p className="text-xl text-white">
//                 Our consulting services provide expert guidance in financial
//                 planning, tax strategy, and compliance to help businesses
//                 optimize their operations. We work closely with clients to
//                 identify opportunities for growth and enhance overall
//                 performance.
//               </p>
//             </div>

//             {/* GST Registration & Compliance */}
//             <div className="text-center">
//               <button className="text-xl font-semibold text-gray-800 py-2 px-6 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition-all">
//                 GST Registration & Compliance
//               </button>
//               <img
//                 src="https://img.freepik.com/free-photo/tax-credits-claim-return-deduction-refund-concept_53876-132748.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid"
//                 alt="GST Registration & Compliance"
//                 className="rounded-lg shadow-md w-full object-cover mt-4 mb-4 md:w-11/12 lg:w-11/12 mx-auto"
//               />

//               {/* <h2 className="text-3xl font-bold text-black mb-4">GST Registration & Compliance</h2> */}
//               <p className="text-xl text-white">
//                 We offer comprehensive GST registration and compliance services
//                 to ensure your business meets all regulatory requirements. Our
//                 experts guide you through the complexities of GST laws to
//                 minimize risks and maximize efficiency.
//               </p>
//             </div>

//             {/* Business Advisory Services */}
//             <div className="text-center">
//               <button className="text-xl font-semibold text-gray-800 py-2 px-6 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition-all">
//                 Business Advisory Services
//               </button>
//               <img
//                 src="https://img.freepik.com/free-photo/settlement-statement-form-financial-concept_53876-127792.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid"
//                 alt="Business Advisory Services"
//                 className="rounded-lg shadow-md w-full object-cover mt-4 mb-4 md:w-11/12 lg:w-11/12 mx-auto"
//               />

//               {/* <h2 className="text-3xl font-bold text-black mb-4">Business Advisory Services</h2> */}
//               <p className="text-xl text-white">
//                 Our Business Advisory Services provide strategic insights and
//                 practical solutions to help businesses grow and succeed. We work
//                 closely with you to understand your unique challenges and
//                 opportunities, delivering tailored advice that drives your
//                 business forward.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ServicesOverview;















import React from "react";
import { NavLink } from "react-router-dom";
import img3 from "../../../public/img3.png";

const ServicesOverview = () => {
  return (
    <>
      <img src={img3} alt="Overview Image" className="w-full h-auto mb-6" />

      <div className="bg-blue-600 p-6 md:p-8 mb-10 overflow-hidden">
        <div className="container mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Our Comprehensive Services
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* Accounting Services */}
            <div className="text-center">
              <button className="text-xl font-semibold text-gray-800 py-2 px-6 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition-all">
              Tax preparation, filing and compliances (Direct Taxes)
              </button>

              <img
                src="https://img.freepik.com/free-photo/businesspeople-working-finance-accounting-analyze-financi_74952-1411.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid"
                alt="Accounting Services"
                className="rounded-lg shadow-md w-full object-cover mb-4 mt-4 mx-auto"
              />

              <p className="text-lg md:text-xl text-white">
                We offer tailored accounting services, including financial statement preparation, bookkeeping, and strategic tax planning to meet your business needs.
              </p>
            </div>

      
            <div className="text-center">
              <button className="text-xl font-semibold text-gray-800 py-2 px-6 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition-all">
              GST registration, filing and compliances (Indirect Taxes)
              </button>

              <img
                src="https://img.freepik.com/free-photo/businessmen-hands-white-table-with-documents-drafts_176420-351.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid"
                alt="Tax Planning & Preparation"
                className="rounded-lg shadow-md w-full object-cover mt-4 mb-4 mx-auto"
              />

              <p className="text-lg md:text-xl text-white">
                Our services are tailored for traders and investors, helping you manage your tax obligations.
              </p>
            </div>

    
            <div className="text-center">
              <button className="text-xl font-semibold text-gray-800 py-2 px-6 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition-all">
              Accounting and Book Keeping
              </button>

              <img
                src="https://img.freepik.com/free-photo/paperwork_1098-18063.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid"
                alt="Auditing"
                className="rounded-lg shadow-md w-full object-cover mt-4 mb-4 mx-auto"
              />

              <p className="text-lg md:text-xl text-white">
                Our auditing and assurance services provide independent evaluations of financial statements to ensure accuracy.
              </p>
            </div>

            {/* Consulting */}
            <div className="text-center">
              <button className="text-xl font-semibold text-gray-800 py-2 px-6 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition-all">
              Incorporation of Companies and ROC compliances
              </button>

              <img
                src="https://img.freepik.com/free-photo/businessmen-elegant-suits-business-meeting-discussing-new-project-office_181624-47022.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid"
                alt="Consulting"
                className="rounded-lg shadow-md w-full object-cover mt-4 mb-4 mx-auto"
              />

              <p className="text-lg md:text-xl text-white">
                Our consulting services provide expert guidance in financial planning, tax strategy, and compliance.
              </p>
            </div>

            {/* GST Registration & Compliance */}
            <div className="text-center">
              <button className="text-xl font-semibold text-gray-800 py-2 px-6 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition-all">
                GST Registration & Compliance
              </button>

              <img
                src="https://img.freepik.com/free-photo/tax-credits-claim-return-deduction-refund-concept_53876-132748.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid"
                alt="GST Registration & Compliance"
                className="rounded-lg shadow-md w-full object-cover mt-4 mb-4 mx-auto"
              />

              <p className="text-lg md:text-xl text-white">
                We offer comprehensive GST registration and compliance services to ensure your business meets all regulatory requirements.
              </p>
            </div>

            {/* Business Advisory Services */}
            <div className="text-center">
              <button className="text-xl font-semibold text-gray-800 py-2 px-6 bg-white border border-gray-300 rounded-full shadow-sm hover:bg-gray-50 transition-all">
                Business Advisory Services
              </button>

              <img
                src="https://img.freepik.com/free-photo/settlement-statement-form-financial-concept_53876-127792.jpg?ga=GA1.2.2000051094.1716005427&semt=ais_hybrid"
                alt="Business Advisory Services"
                className="rounded-lg shadow-md w-full object-cover mt-4 mb-4 mx-auto"
              />

              <p className="text-lg md:text-xl text-white">
                We provide strategic insights and solutions to help businesses grow and succeed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesOverview;
