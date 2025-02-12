import React from "react";
import { Link } from "react-router";
import type { Question } from "~/types/types";

export default function GameExplanation({
  question,
  decreaseIndex,
  increaseIndex,
}: {
  question: Question;
  decreaseIndex: () => void;
  increaseIndex: () => void;
}) {
  return (
    <div className="grid min-h-screen transform place-items-center">
      <div className="w-full max-w-screen-lg">
        <div className="rounded bg-blue-200 p-4">
          <p className="mb-4 min-h-[150px] rounded bg-white p-4 text-gray-900">
            {question.content}
          </p>
          <ul className="grid gap-4">
            {question.choices.map((choice) => (
              <li
                key={choice.id}
                className="rounded bg-white p-4 text-gray-900"
              >
                <p>{choice.content}</p>
                <p>{choice.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto mt-4 grid w-fit grid-cols-3 items-center gap-2">
          <button onClick={decreaseIndex} className="px-3 py-1 text-gray-900">
            &lt;
          </button>
          <span className="text-center text-gray-900">{question.id}</span>
          <button onClick={increaseIndex} className="px-3 py-1 text-gray-900">
            &gt;
          </button>
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
