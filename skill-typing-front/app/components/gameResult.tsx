import React from "react";

export default function GameResult({
  score,
  onShowExplanation,
}: {
  score: number;
  onShowExplanation: () => void;
}) {
  return (
    <div className="grid min-h-screen -translate-y-32 transform place-items-center">
      <div className="w-full max-w-screen-lg">
        <p className="text-center text-2xl text-gray-900">
          最終スコア : {score}点
        </p>
        <button
          onClick={onShowExplanation}
          className="mx-auto mt-6 block w-40 rounded-full bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-500"
        >
          用語解説
        </button>
      </div>
    </div>
  );
}
