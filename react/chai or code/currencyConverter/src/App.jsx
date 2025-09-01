import React from "react";
import useCurrencyInfo from "./hooks/useCurrencyinfo.js";
import { Input } from "./components/index.js";
import { useState } from "react";

const App = () => {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const currencyKeys = currencyInfo ? Object.keys(currencyInfo) : [];

  const BackgroundImage =
    "https://static.vecteezy.com/system/resources/previews/009/840/518/non_2x/abstract-money-transfer-online-currency-on-background-modern-blue-concept-arrow-global-money-movement-currency-exchange-dollar-euro-yen-vector.jpg";

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amount={amount}
                currencyOptions={currencyKeys}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
                onAmountChange={(amount) => {
                  setAmount(amount);
                }}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={swap}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                amount={convertedAmount}
                currencyOptions={currencyKeys}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                onAmountChange={(val)=>setAmount(val)}
                amountDisable={true}
                label="To"
              />
            </div>
            <button
              onClick={convert}
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {`${from.toUpperCase()} to ${to.toUpperCase()}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
