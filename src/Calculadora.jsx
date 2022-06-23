import { React, useState } from "react";
import "./styles.css";
import useTotal from "./hooks/useTotal.jsx";

export default function Calculadora() {
  let arrNums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const { calcu, totale, numer, setNumer, back } = useTotal();

  return (
    <div className="divcal">
      <div className="calcu">
        <span>{!numer ? "0" : numer}</span>
        <button type="button" onClick={() => setNumer("")}>
          AC
        </button>
        <button type="button" onClick={() => setNumer(numer.slice(1))}>
          C
        </button>
        <button type="button" onClick={() => calcu("+")}>
          +
        </button>
        <button type="button" onClick={() => calcu("-")}>
          -
        </button>
        <button type="button" onClick={() => calcu("/")}>
          /
        </button>
        <button type="button" onClick={() => calcu("*")}>
          *
        </button>
        <button type="button" onClick={() => calcu("%")}>
          %
        </button>
        {arrNums.map((item) => {
          return (
            <button key={item} onClick={() => calcu(...item)}>
              {item}
            </button>
          );
        })}

        <button id='total' type="button" onClick={() => totale(numer)}>
          =
        </button>
      </div>
    </div>
  );
}
