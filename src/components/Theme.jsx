// 'use client'
// import {
//     FaSun,
//     FaMoon
//   } from "react-icons/fa";

// import { useTheme } from "next-themes"
// import { useEffect, useState } from "react";

// const Theme = () => {
//     const {resolvedTheme, setTheme} = useTheme();

//     const [mounted, setMounted] = useState(false);
//     useEffect(() => setMounted(true), [])

//     if (!mounted) {
//         return null;
//     }

//     // const handleClick = () => {
//     //     setActive(!active);
//     // };
//     return (
//         <div>
//             <div className="border-slate-400 rounded-lg border-2 flex items-center justify-center py-1 px-2 bg-gray-800">
//                 <button className="flex items-center justify-center gap-2" onClick={() => setTheme(resolvedTheme === 'dark' ? <><FaSun /> Light Mode</> : <><FaMoon /> Dark Mode</>)}>
//                     {resolvedTheme === 'dark' ? <><FaSun /> Light Mode</> : <><FaMoon /> Dark Mode</>}
//                     {/* {active ? <><FaMoon /> Dark Mode</> : <><FaSun /> Light Mode</>} */}
//                 </button>
//             </div>
//         </div>
//     )
// }

// export default Theme
