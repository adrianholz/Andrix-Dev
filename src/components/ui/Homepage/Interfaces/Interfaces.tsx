"use client";

import { useState } from "react";
import "./Interfaces.css";
import { boxes } from "../../../../data/home-data";

export default function Interfaces() {
  const [box, setBox] = useState(boxes[0]);

  return (
    <div className="interfaces">
      <div className="interface-boxes">
        {boxes.map((item, index) => (
          <div
            className={box.title === item.title ? "active" : ""}
            onClick={() => setBox(item)}
            key={index}
          >
            <p>{item.title}</p>
            <span>{index + 1}</span>
          </div>
        ))}
      </div>
      <div
        className={`interface-preview ${box.title.toLowerCase()}`}
        style={box.styles.preview}
      >
        <div className="preview-image" style={box.styles.previewImage}></div>
        <div className="preview-content" style={box.styles?.content}>
          <span style={box.styles.title}>This is a heading</span>
          <span>And this, a subheading.</span>
          <div className="separator"></div>
          <p>
            This is a text paragraph. You can insert information about your
            product or service here.
          </p>
          <a href="#" className="button" style={box.styles.button}>
            Call-to-action
          </a>
        </div>
      </div>
    </div>
  );
}
