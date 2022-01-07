import React, { useEffect, useState } from "react";
import "./Header.css";

function Header() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState({});

  useEffect(() => {
    const fetchData = async () =>
      await fetch("https://type.fit/api/quotes")
        .then((res) => res.json())
        .then((data) => {
          const randomnumber =
            Math.floor(Math.random() * (data.length - 1)) + 1;
          setQuote(data[randomnumber]);
        })
        .then((data) => {});
    fetchData();
  }, []);

  return (
    <div className="header">
      <div className="header__left">
        <img
          className="header__logo"
          src="https://cdn-icons-png.flaticon.com/512/3472/3472580.png"
          alt=""
        />
        <h1 className="header__logo">To Do </h1>
      </div>
      <div className="header__quote">
        <p className="header__quote--text">{quote.text}</p>
        <p className="header__quote--author">{quote.author}</p>
      </div>
    </div>
  );
}

export default Header;
