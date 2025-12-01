"use client";

import { useState, useEffect } from "react";

const COLORS = ["red", "blue", "green", "yellow", "purple"];

const colorClass: Record<string, string> = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
  purple: "bg-purple-500",
};

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

export default function GameBoard() {
  const [grid, setGrid] = useState<string[][]>([]);

  useEffect(() => {
    const newGrid = Array.from({ length: 5 }, () =>
      Array.from({ length: 5 }, () => randomColor())
    );
    setGrid(newGrid);
  }, []);

  const handleClick = (row: number, col: number) => {
    setGrid((prev) => {
      const newGrid = prev.map((r) => [...r]);
      newGrid[row][col] = randomColor();
      return newGrid;
    });
  };

  return (
    <div className="grid grid-cols-5 gap-1 mb-4">
      {grid.map((row, rIdx) =>
        row.map((color, cIdx) => (
          <div
            key={`${rIdx}-${cIdx}`}
            className={`w-12 h-12 rounded-md cursor-pointer ${colorClass[color]}`}
            onClick={() => handleClick(rIdx, cIdx)}
          />
        ))
      )}
    </div>
  );
}
