import React from "react";

export default function TopPage() {
  return (
    <>
      <div className="mx-auto mt-8 grid max-w-screen-xl place-items-center gap-4 px-4">
        <button className="rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">
          モード選択
        </button>
        <button className="rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">
          ゲーム開始
        </button>
        <p className="text-gray-900">最終スコア : ◯◯問</p>
      </div>
    </>
  );
}
