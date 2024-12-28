"use client";

import { useState } from "react";
import "./Filter.css";

type FilterProps = {
  file?: string;
  name: string;
  short?: string;
  onSelect?: (name: string) => void;
  onDeselect?: (name: string) => void;
};

export default function Filter({
  file,
  name,
  short,
  onSelect,
  onDeselect,
}: FilterProps) {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    setChecked(!checked);
    if (!checked) {
      onSelect?.(name);
    } else {
      onDeselect?.(name);
    }
  };

  if (file) {
    return (
      <label
        className={checked ? "filter checked" : "filter"}
        onClick={handleClick}
      >
        <img src={`/assets/img/svg/${file}.svg`} alt={`${name} Icon`} />
        <h3>{short}</h3>
      </label>
    );
  } else {
    return (
      <label
        className={checked ? "filter checked" : "filter"}
        onClick={handleClick}
      >
        <h3>{name}</h3>
      </label>
    );
  }
}
