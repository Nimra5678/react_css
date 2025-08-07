import { useState } from "react";
import { InputBox } from "./Components";
import useCurrencyConverter from "./Hooks/currency";
import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedamount, setConvertedamount] = useState(0);

  const currencyinfo = useCurrencyConverter(from); // ✅ 'from' is base currency
  const options = Object.keys(currencyinfo || {}); // ✅ safe against undefined

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedamount);
    setConvertedamount(amount);
  };

  const convert = () => {
    if (!currencyinfo[to]) return;
    setConvertedamount(amount * currencyinfo[to]); // ✅ using correct rate
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("https://images.pexels.com/photos/157520/pexels-photo-157520.jpeg")`,
      }}
    >
      <div className="w-full max-w-md mx-auto border border-grey-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <InputBox
            label="From"
            amount={amount}
            currencyOption={options}
            onAmountChange={(value) => setAmount(value)}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
          />

          <div className="relative w-full h-0.5 my-4">
            <button
              type="button"
              className="absolute left-1/2 transform -translate-x-1/2 border-white rounded-md bg-blue-600 text-white px-4 py-1"
              onClick={swap}
            >
              Swap
            </button>
          </div>

          <InputBox
            label="To"
            amount={convertedamount}
            currencyOption={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisabled
          />

          <button
            type="submit"
            className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Convert
          </button>
        </form>

        <p className="text-white text-center mt-4">
          {amount} {from.toUpperCase()} = {convertedamount.toFixed(2)}{" "}
          {to.toUpperCase()}
        </p>
      </div>
    </div>
  );
}

export default App;
