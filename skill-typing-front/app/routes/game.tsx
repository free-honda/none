import React from "react";
import { Link } from "react-router";
import type { Route } from "../+types/root";

export async function clientLoader() {
  const response = await fetch("/api/game/questions");

  const questions = await response.json();

  return questions;
}

export default function Game({ loaderData }: Route.ComponentProps) {
  console.log(loaderData);

  return (
    <div className="grid min-h-screen transform place-items-center">
      <div className="w-full max-w-screen-lg">
        <h1 className="mb-4 text-center text-2xl text-gray-900">◯◯問目</h1>
        <div className="rounded bg-blue-200 p-4">
          <p className="mb-4 min-h-[300px] rounded bg-white p-4 text-gray-900">
            問題文
          </p>
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
        <input
          type="text"
          name="answer"
          placeholder="答えをここに入力してください"
          className="mx-auto mt-8 block w-1/2 rounded border border-blue-300 bg-white p-2 text-center text-gray-900"
        />
        <Link
          to="/result"
          className="mx-auto mt-6 block w-40 rounded-full bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-500"
        >
          ゲーム終了
        </Link>
      </div>
    </div>
  );
}
