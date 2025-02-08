import React from "react";
import { Link } from "react-router";

export default function Explanation() {
  return (
    <div className="grid min-h-screen transform place-items-center">
      <div className="w-full max-w-screen-lg">
        <div className="rounded bg-blue-200 p-4">
          <p className="mb-4 min-h-[150px] rounded bg-white p-4 text-gray-900">
            問題文
          </p>
          <ul className="grid gap-4">
            <li className="rounded bg-white p-4 text-gray-900">
              <p>選択肢1</p>
              <p>単語の意味解説</p>
            </li>
            <li className="rounded bg-white p-4 text-gray-900">
              <p>選択肢2</p>
              <p>単語の意味解説</p>
            </li>
            <li className="rounded bg-white p-4 text-gray-900">
              <p>選択肢3</p>
              <p>単語の意味解説</p>
            </li>
            <li className="rounded bg-white p-4 text-gray-900">
              <p>選択肢4</p>
              <p>単語の意味解説</p>
            </li>
          </ul>
        </div>
        <div className="mx-auto mt-4 grid w-fit grid-cols-3 items-center gap-2">
          <button className="px-3 py-1 text-gray-900">&lt;</button>
          <span className="text-center text-gray-900">5</span>
          <button className="px-3 py-1 text-gray-900">&gt;</button>
        </div>
        <Link
          to="/top-page"
          className="mx-auto mt-6 block w-40 rounded-full bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-500"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}
