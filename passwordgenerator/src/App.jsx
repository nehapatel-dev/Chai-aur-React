import { useState,useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  //useRef hook
  const passwordRef = useRef()

  const passwordGenerator = useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) {
      str += "0123456789"
    }
    if(charAllowed) {
      str += "!@#$%^&*()-+"

      for(let i=1; i<=length; i++){
        let char= Math.random() * str.length + 1;
        pass += str.charAt(char)
      }
      setPassword(pass)
    }

  },[length, numberAllowed, charAllowed, setPassword]) 

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(passwordRef.current.value)
    passwordRef.current?.select()
    
  },[password] );

  useEffect(() =>{passwordGenerator()}, [length, numberAllowed, charAllowed, passwordGenerator])



  return (
  <>
    <div className="min-h-screen bg-gray-900 flex justify-center items-start pt-20">
      
      <div className="w-full max-w-xl bg-gray-800 p-8 rounded-2xl shadow-2xl">
        
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Password Generator
        </h1>

        <div className="flex">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            placeholder="Your password"
            className="w-full px-4 py-3 rounded-l-lg outline-none text-gray-900 bg-white"
          />

          <button
          onClick={ copyPasswordToClipboard}
            className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-r-lg hover:bg-purple-700"
          >
            Copy
          </button>
        </div>

        <div className="flex items-center justify-between mt-6 text-white">

          <div className="flex items-center gap-2">
            <input type="range" 
            min={6} max={100} value={length} onChange={(e) => setLength(e.target.value)}/>
            <span>Length: {length}</span>
          </div>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {setNumberAllowed((prev) => !prev)}}
            />
            Numbers
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onChange={() => setCharAllowed(!charAllowed)}
            />
            Characters
          </label>

        </div>

      </div>

    </div>
  </>
)
}

export default App
