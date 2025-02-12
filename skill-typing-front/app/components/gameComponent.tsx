import React, { useState } from "react";
import type { Question } from "~/types/types";

export default function GameComponent({
  question,
  onAnswer,
  isLastQuestion,
}: {
  question: Question;
  onAnswer: (answer: string) => void;
  isLastQuestion: boolean;
}) {
  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAnswer(userAnswer);
    setUserAnswer("");
  };

  return (
    <div className="grid min-h-screen transform place-items-center">
      <div className="w-full max-w-screen-lg">
        <h1 className="mb-4 text-center text-2xl text-gray-900">
          {question.title}
        </h1>
        <div className="rounded bg-blue-200 p-4">
          <p className="mb-4 min-h-[300px] rounded bg-white p-4 text-gray-900">
            {question.content}
          </p>
          <ul className="grid grid-cols-2 gap-4">
            {question.choices.map((choice) => (
              <li
                key={choice.id}
                className="rounded bg-white p-4 text-center text-gray-900"
              >
                {choice.content}
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="answer"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="答えをここに入力してください"
            className="mx-auto mt-8 block w-1/2 rounded border border-blue-300 bg-white p-2 text-center text-gray-900"
          />
          <button
            type="submit"
            className="mx-auto mt-6 block w-40 rounded-full bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-500"
          >
            {isLastQuestion ? "ゲーム終了" : "次の問題"}
          </button>
        </form>
      </div>
    </div>
  );
}
