

// import "./App.css";

// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">

//       <div className="bg-gray-900 text-white w-80 rounded-2xl text-center border border-purple-500 shadow-xl overflow-hidden">

//         {/* Samurai Background Image */}
//         <div
//           className="h-48 w-full bg-cover bg-center"
//           style={{
//             backgroundImage: "url('/samurai.jpg.avif')",
//           }}
//         >
//           <div className="h-full w-full bg-black/30 flex items-end justify-center pb-3">
//             <h1 className="text-2xl font-bold text-purple-300">
//               PRO GAMER
//             </h1>
//           </div>
//         </div>

//         <div className="p-6">

//           <p className="text-gray-400 mt-1">
//             Esports Player 🎮
//           </p>

//           <div className="bg-gray-800 rounded-lg p-3 mt-5">
//             <p>🏆 Rank: Diamond</p>
//             <hr className="my-3 border-gray-600" />

//             <p>🎯 Game: BGMI</p>
//             <hr className="my-3 border-gray-600" />

//             <p>⚡ Role: Assaulter</p>
//             <hr className="my-3 border-gray-600" />

//             <p>🔥 Level: Pro</p>
//           </div>

//           <button className="bg-purple-600 hover:bg-purple-700 px-6 py-2 rounded-lg mt-5 font-semibold">
//             Follow Me
//           </button>





//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;

// import {useState} from "react";

// export default function App() 

// { const [count, setCount] = useState(0)
//   return (
        
//     <div>App
//       <h1>  count number</h1>
//       <button onClick={() => setCount((count) => count - 1)}>count is {count}</button>
//     </div>
//   )



import  { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          React useEffect
        </h1>

        <p className="text-xl mb-6">
          Count: {count}
        </p>

        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Increase
        </button>
      </div>
    </div>
  );
}

export default App;


