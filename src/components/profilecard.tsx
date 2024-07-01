// export const ProfileCard = () => {
//   return (
//     <>
//       <div className="bg-slate-900 shadow-md border w-80 h-80 p-4 rounded-lg hover:bg-slate-800">
//         <div></div>
//         <div className="">
//           <img
//             className="w-14 h-14 rounded-full"
//             src="https://media.licdn.com/dms/image/D4D03AQEHifMgC-2jCQ/profile-displayphoto-shrink_400_400/0/1718317875093?e=1725494400&v=beta&t=GP-vnXrGhHd4Kk6T2GKB2Js8G2FFxry-u_UyDkvTKHs"
//             alt="Rounded avatar"
//           ></img>

//           <h1>Rohit Goyal</h1>
//           <p className="py-2">
//             Full Stack Developer | MERN Stack Engineer | Creating Efficient and
//             High-Performance Web Applications
//           </p>
//           <p className="text-sm ">
//             Hexaware Technologies | Siliguri Institute of Technology
//           </p>
//           <button className="mt-4 w-fit border-2 rounded-full px-6 py-2">
//             View Profile
//           </button>
//         </div>
//       </div>

//       {/* <a
//         className="badge-base__link LI-simple-link"
//         href="https://in.linkedin.com/in/rohit-goyal-ba6b292a9?trk=profile-badge"
//       ></a> */}
//     </>
//   );
// };

import { GlareCard } from "./ui/glare-card";

export function ProfileCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
        <p className="font-bold text-white text-lg">LinkedIn</p>
        <p className="font-normal text-base text-neutral-200 mt-4">
          <img
            className="w-14 h-14 rounded-full opacity-100 "
            src="https://media.licdn.com/dms/image/D4D03AQEHifMgC-2jCQ/profile-displayphoto-shrink_400_400/0/1718317875093?e=1725494400&v=beta&t=GP-vnXrGhHd4Kk6T2GKB2Js8G2FFxry-u_UyDkvTKHs"
            alt="Rounded avatar"
          ></img>
          <h1>Rohit Goyal</h1>
          <p className="py-2">
            Full Stack Developer | MERN Stack Engineer | Creating Efficient and
            High-Performance Web Applications
          </p>
          <p className="text-sm ">
            Hexaware Technologies | Siliguri Institute of Technology
          </p>
          <button className="mt-4 w-fit border-2 rounded-full px-6 py-2">
            View Profile
          </button>
        </p>
      </GlareCard>
    </div>
  );
}
