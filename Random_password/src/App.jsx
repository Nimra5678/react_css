import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numallowed, setnumallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numallowed) {
      str += "0123456789";
    }

    if (charallowed) {
      str += "!@#$%^&*()_+}{[]~-=";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numallowed, charallowed]);

  // passwordGenerator();

  useEffect(() => {
    passwordGenerator();
  }, [length, numallowed, charallowed, passwordGenerator]);

  return (
    <>
      <div className="h-screen">
        <div className="flex flex-wrap justify-center">
          <div className="flex flex-col flex-wrap bg-indigo-950 px-7 py-4 rounded-xl">
            <h1 className="text-white">Random password generator</h1>

            <div>
              <input
                type="text"
                value={password}
                readOnly
                className="mt-2 rounded-s-sm"
              />
              <button
                className="bg-blue-800 outline-none ps-1 text-white pe-1 rounded-e-sm"
                onClick={() => {
                  navigator.clipboard.writeText(password);
                }}
              >
                Copy
              </button>
            </div>

            <div className="m-2">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                onChange={(e) => {
                  setlength(e.target.value);
                }}
              />
              <label className="text-xs text-white">length: {length}</label>

              <div className="flex gap-3">
                <input
                  type="checkbox"
                  id="numberInput"
                  checked={numallowed}
                  onChange={() => {
                    setnumallowed((prev) => !prev);
                  }}
                />
                <label htmlFor="numberInput" className="text-xs text-white">
                  Numbers
                </label>

                <input
                  type="checkbox"
                  id="CharacterInput"
                  checked={charallowed}
                  onChange={() => {
                    setcharallowed((prev) => !prev);
                  }}
                />
                <label htmlFor="CharacterInput" className="text-xs text-white">
                  Characters
                </label>
              </div>
            </div>

            <button
              className="bg-green-600 text-white mt-2 rounded px-2 py-1"
              onClick={passwordGenerator}
            >
              Regenerate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
