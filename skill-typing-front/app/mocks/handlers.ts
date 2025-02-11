import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/api/game/questions", () => {
    return HttpResponse.json({
      questions: [
        {
          id: 1,
          title: "問題タイトル1",
          content: "問題文1",
          category: {
            id: 1,
            title: "カテゴリー名1",
          },
          answer_id: 1,
          choices: [
            {
              id: 1,
              content: "選択肢1-1",
              description: "選択肢1の解説",
            },
            {
              id: 2,
              content: "選択肢1-2",
              description: "選択肢2の解説",
            },
            {
              id: 3,
              content: "選択肢1-3",
              description: "選択肢3の解説",
            },
            {
              id: 4,
              content: "選択肢1-4",
              description: "選択肢4の解説",
            },
          ],
        },
        {
          id: 2,
          title: "問題タイトル2",
          content: "問題文2",
          category: {
            id: 2,
            title: "カテゴリー名2",
          },
          answer_id: 2,
          choices: [
            {
              id: 1,
              content: "選択肢2-1",
              description: "選択肢1の解説",
            },
            {
              id: 2,
              content: "選択肢2-2",
              description: "選択肢2の解説",
            },
            {
              id: 3,
              content: "選択肢2-3",
              description: "選択肢3の解説",
            },
            {
              id: 4,
              content: "選択肢2-4",
              description: "選択肢4の解説",
            },
          ],
        },
        {
          id: 3,
          title: "問題タイトル3",
          content: "問題文3",
          category: {
            id: 3,
            title: "カテゴリー名3",
          },
          answer_id: 3,
          choices: [
            {
              id: 1,
              content: "選択肢3-1",
              description: "選択肢1の解説",
            },
            {
              id: 2,
              content: "選択肢3-2",
              description: "選択肢2の解説",
            },
            {
              id: 3,
              content: "選択肢3-3",
              description: "選択肢3の解説",
            },
            {
              id: 4,
              content: "選択肢3-4",
              description: "選択肢4の解説",
            },
          ],
        },
      ],
    });
  }),
];
