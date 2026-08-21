import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("Olive")

  return (
    
    <>
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
    </div>

    <div className= "fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2">
        <button
        className="outline-none px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
        onClick={() => setcolor("Red")}>Red</button>

        <button className="outline-none px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        onClick={() => setcolor("Green")}
        >
          Green
        </button>

        <button className="outline-none px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={() => setcolor("Blue")}
        >
          Blue
        </button>

        <button className="outline-none px-4 py-2 bg-olive-500 text-white rounded-md hover:bg-olive-600"
        onClick={() => setcolor("Olive")}
        >
          Olive
        </button>

        <button className="outline-none px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
        onClick={() => setcolor("Gray")}
        >
          Gray
        </button>

        <button className="outline-none px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
        onClick={() => setcolor("Yellow")}
        >
          Yellow
        </button>

        <button className="outline-none px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
        onClick={() => setcolor("Pink")}
        >
          Pink
        </button>

        <button className="outline-none px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
        onClick={() => setcolor("Purple")}
        >
          Purple
        </button>

        <button className="outline-none px-4 py-2 bg-[#E6E6FA] text-black rounded-md hover:bg-[#D8D8F0]"
        onClick={() => setcolor("Lavender")}
        >
          Lavender
        </button>

        <button className="outline-none px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200"
        onClick={() => setcolor("White")}
        >
          White
        </button>

        <button className="outline-none px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
        onClick={() => setcolor("Black")}
        >
          Black
        </button>
      </div> 
    </div>
    </>
      
  )
}

export default App
