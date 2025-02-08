import React from "react";
import { Link } from "react-router";

export default function Result() {
  return (
    <div className="grid min-h-screen -translate-y-32 transform place-items-center">
      <div className="w-full max-w-screen-lg">
        <p className="text-center text-2xl text-gray-900">
          最終スコア : 〇〇点
        </p>
        <Link
          to="/explanation"
          className="mx-auto mt-6 block w-40 rounded-full bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-500"
        >
          用語解説
        </Link>
      </div>
    </div>
  );
}
