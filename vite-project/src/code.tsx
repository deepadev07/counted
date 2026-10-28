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