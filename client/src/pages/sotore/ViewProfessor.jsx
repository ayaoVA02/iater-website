// import React from 'react'
// import useDeviceType from '../../hook/useDeviceType';
// import AnimatedContent from '../../components/ui/AnimatedContent';

// function ViewProfessor() {


//     const deviceType = useDeviceType();
//     const getContentWidth = () => {
//         if (deviceType === 'desktop') return 'desktopWidth';
//         if (deviceType === 'tablet') return 'templetWidth';
//         return 'mobileWidth'; // mobile
//     };
//     return (

//         <div className="flex justify-center desktopWidth mx-auto">
//             <div className={`flex justify-between items-start `}>
//                 <div className="w-1/3 pt-32 flex items-center gap-4">
//                     <img src="/icon/Solid/PNG/processor_.png" alt="" className="w-[100px] h-auto object-cover rounded-xl" />

//                     <h1 className="text-4xl font-bold text-[#105691]">Advisor</h1>
//                 </div>

//                 <div className="relative flex flex-col  ">



//                     {/* Background red box - set behind with lower z-index */}
//                     <div className="w-[200px] absolute h-[90%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#2e939a] z-0" />


//                     <div className="relative group inline-block w-full pt-32" id='baek'>


//                         {/* Image */}
//                         <img
//                             src="/professors/big/baek.png"
//                             alt="professor"
//                             className="w-full h-auto object-cover relative z-10"
//                         />

//                         {/* Arrow wrapper — make it respond to hover too */}
//                         <div className="absolute inset-0 flex items-center justify-start px-4 z-1 pointer-events-none group-hover:pointer-events-auto translate-y-12">
//                             <div
//                                 className="opacity-0 translate-x-0 group-hover:opacity-100 group-hover:-translate-x-24  transition-all duration-500 ease-in-out"
//                             >
//                                 <div className="pointer-events-auto">
//                                     <a href="/iater/people">

//                                         <img src="/icon/Solid/PNG/arrow_.png" alt="arrow back" className='w-24 h-24 object-cover' />

//                                     </a>
//                                 </div>
//                             </div>
//                         </div>


//                     </div>

//                     <div className="relative group inline-block w-full pt-32 mb-24" id='limjae'>






//                         <img
//                             src="/professors/big/lim jae.png"
//                             alt="professor"
//                             className="w-full h-auto object-cover relative z-10"
//                         />

//                         {/* Arrow wrapper — make it respond to hover too */}
//                         <div className="absolute inset-0 flex items-center justify-start px-4 z-1 pointer-events-none group-hover:pointer-events-auto translate-y-12">
//                             <div
//                                 className="opacity-0 translate-x-0 group-hover:opacity-100 group-hover:-translate-x-24  transition-all duration-500 ease-in-out"
//                             >
//                                 <div className="pointer-events-auto">
//                                     <a href="/iater/people">

//                                         <img src="/icon/Solid/PNG/arrow_.png" alt="arrow back" className='w-24 h-24 object-cover' />

//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                     <div className="relative group inline-block w-full pt-32 mb-24" id='oh'>






//                         <img
//                             src="/professors/big/oh.png"
//                             alt="professor"
//                             className="w-full h-auto object-cover relative z-10"
//                         />

//                         {/* Arrow wrapper — make it respond to hover too */}
//                         <div className="absolute inset-0 flex items-center justify-start px-4 z-1 pointer-events-none group-hover:pointer-events-auto translate-y-12">
//                             <div
//                                 className="opacity-0 translate-x-0 group-hover:opacity-100 group-hover:-translate-x-24  transition-all duration-500 ease-in-out"
//                             >
//                                 <div className="pointer-events-auto">
//                                     <a href="/iater/people">

//                                         <img src="/icon/Solid/PNG/arrow_.png" alt="arrow back" className='w-24 h-24 object-cover' />

//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                     <div className="relative group inline-block w-full pt-32 mb-24" id='ryu'>





//                         <img
//                             src="/professors/big/Ryu.png"
//                             alt="professor"
//                             className="w-full h-auto object-cover relative z-10"
//                         />

//                         {/* Arrow wrapper — make it respond to hover too */}
//                         <div className="absolute inset-0 flex items-center justify-start px-4 z-1 pointer-events-none group-hover:pointer-events-auto translate-y-12">
//                             <div
//                                 className="opacity-0 translate-x-0 group-hover:opacity-100 group-hover:-translate-x-24  transition-all duration-500 ease-in-out"
//                             >
//                                 <div className="pointer-events-auto">
//                                     <a href="/iater/people">

//                                         <img src="/icon/Solid/PNG/arrow_.png" alt="arrow back" className='w-24 h-24 object-cover' />

//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                     <div className="relative group inline-block w-full pt-32 mb-24" id='sangsik'>





//                         <img
//                             src="/professors/big/sangsik.png"
//                             alt="professor"
//                             className="w-full h-auto object-cover relative z-10"
//                         />

//                         {/* Arrow wrapper — make it respond to hover too */}
//                         <div className="absolute inset-0 flex items-center justify-start px-4 z-1 pointer-events-none group-hover:pointer-events-auto translate-y-12">

//                             <div
//                                 className="opacity-0 translate-x-0 group-hover:opacity-100 group-hover:-translate-x-24  transition-all duration-500 ease-in-out"
//                             >
//                                 <div className="pointer-events-auto">
//                                     <a href="/iater/people">

//                                         <img src="/icon/Solid/PNG/arrow_.png" alt="arrow back" className='w-24 h-24 object-cover' />

//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                     <div className="relative group inline-block w-full pt-32 mb-24" id='choi'>





//                         <img
//                             src="/professors/big/choi.png"
//                             alt="professor"
//                             className="w-full h-auto object-cover relative z-10"
//                         />

//                         {/* Arrow wrapper — make it respond to hover too */}
//                         <div className="absolute inset-0 flex items-center justify-start px-4 z-1 pointer-events-none group-hover:pointer-events-auto translate-y-12">
//                             <div
//                                 className="opacity-0 translate-x-0 group-hover:opacity-100 group-hover:-translate-x-24  transition-all duration-500 ease-in-out"
//                             >
//                                 <div className="pointer-events-auto">
//                                     <a href="/iater/people">

//                                         <img src="/icon/Solid/PNG/arrow_.png" alt="arrow back" className='w-24 h-24 object-cover' />

//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                     <div className="relative group inline-block w-full pt-32 mb-24" id='chomin'>





//                         <img
//                             src="/professors/big/Cho min.png"
//                             alt="professor"
//                             className="w-full h-auto object-cover relative z-10"
//                         />

//                         {/* Arrow wrapper — make it respond to hover too */}
//                         <div className="absolute inset-0 flex items-center justify-start px-4 z-1 pointer-events-none group-hover:pointer-events-auto translate-y-12">
//                             <div
//                                 className="opacity-0 translate-x-0 group-hover:opacity-100 group-hover:-translate-x-24  transition-all duration-500 ease-in-out"
//                             >
//                                 <div className="pointer-events-auto">
//                                     <a href="/iater/people">

//                                         <img src="/icon/Solid/PNG/arrow_.png" alt="arrow back" className='w-24 h-24 object-cover' />

//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                     <div className="relative group inline-block w-full pt-32 mb-24" id='kimjong'>





//                         <img
//                             src="/professors/big/kim jong.png"
//                             alt="professor"
//                             className="w-full h-auto object-cover relative z-10"
//                         />

//                         {/* Arrow wrapper — make it respond to hover too */}
//                         <div className="absolute inset-0 flex items-center justify-start px-4 z-1 pointer-events-none group-hover:pointer-events-auto translate-y-12">
//                             <div
//                                 className="opacity-0 translate-x-0 group-hover:opacity-100 group-hover:-translate-x-24  transition-all duration-500 ease-in-out"
//                             >
//                                 <div className="pointer-events-auto">
//                                     <a href="/iater/people">

//                                         <img src="/icon/Solid/PNG/arrow_.png" alt="arrow back" className='w-24 h-24 object-cover' />

//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//             </div>
//         </div>

//     )
// }

// export default ViewProfessor