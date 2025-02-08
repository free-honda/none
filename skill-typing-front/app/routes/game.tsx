import React from "react";

export default function Game() {
  return (
    <div className="grid min-h-screen transform place-items-center">
      <div className="w-full max-w-screen-lg">
        <h1 className="mb-4 text-center text-2xl text-gray-900">◯◯問目</h1>
        <div className="rounded bg-blue-200 p-4">
          <p className="mb-4 min-h-[300px] rounded bg-white p-4 text-gray-900">
            問題文
          </p>
          <div>
            <ul className="grid grid-cols-2 gap-4">
              <li className="rounded bg-white p-4 text-center text-gray-900">
                選択肢1
              </li>
              <li className="rounded bg-white p-4 text-center text-gray-900">
                選択肢2
              </li>
              <li className="rounded bg-white p-4 text-center text-gray-900">
                選択肢3
              </li>
              <li className="rounded bg-white p-4 text-center text-gray-900">
                選択肢4
              </li>
            </ul>
          </div>
        </div>
        <input
          type="text"
          name="answer"
          placeholder="答えをここに入力してください"
          className="mx-auto mt-8 block w-1/2 rounded border border-blue-300 bg-white p-2 text-center text-gray-900"
        />
      </div>
    </div>
  );
}
