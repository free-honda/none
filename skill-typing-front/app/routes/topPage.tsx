import React from "react";
import { Link } from "react-router";

export default function TopPage() {
  return (
    <div className="grid min-h-screen -translate-y-32 transform place-items-center">
      <div className="grid max-w-screen-xl place-items-center gap-4 px-4">
        <button className="w-40 rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-500">
          モード選択
        </button>
        <Link
          to="/game"
          className="w-40 rounded-full bg-blue-600 px-4 py-2 text-center text-white hover:bg-blue-500"
        >
          ゲーム開始
        </Link>
        <p className="text-gray-900">最終スコア : ◯◯問</p>
      </div>
    </div>
  );
}
