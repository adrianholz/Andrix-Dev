"use client";

import { useState, useEffect } from "react";
import "./Tooltip.css";

interface TooltipData {
  visible: boolean;
  content: string;
  top: number;
  left: number;
}

export default function Tooltip() {
  const [tooltipData, setTooltipData] = useState<TooltipData>({
    visible: false,
    content: "",
    top: 0,
    left: 0,
  });

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-value]");

    const handleEnter = (event: MouseEvent) => {
      const item = event.currentTarget as HTMLElement;
      const windowSize = window.innerWidth * 0.5;

      const background = item.dataset.background || "";
      const color = item.dataset.color || "";

      setTooltipData((prev) => ({
        ...prev,
        visible: true,
        content: item.dataset.value || "",
        top: event.pageY + 15,
        left: event.clientX < windowSize ? event.pageX + 15 : event.pageX - 105,
        background,
        color,
      }));
    };

    const handleMove = (event: MouseEvent) => {
      setTooltipData((prev) => ({
        ...prev,
        top: event.pageY + 15,
        left: event.pageX + 15,
      }));
    };

    const handleLeave = () => {
      setTooltipData((prev) => ({ ...prev, visible: false }));
    };

    elements.forEach((item) => {
      item.addEventListener("mouseenter", handleEnter);
      item.addEventListener("mousemove", handleMove);
      item.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      elements.forEach((item) => {
        item.removeEventListener("mouseenter", handleEnter);
        item.removeEventListener("mousemove", handleMove);
        item.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  return (
    tooltipData.visible && (
      <div
        className="tooltip"
        style={{
          top: tooltipData.top,
          left: tooltipData.left,
        }}
      >
        <p>{tooltipData.content}</p>
      </div>
    )
  );
}
