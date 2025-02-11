import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  route("", "./routes/home.tsx", [route("welcome", "./welcome/welcome.tsx")]),
  layout("components/layout.tsx", [
    route("/top-page", "./routes/topPage.tsx"),
    route("/game", "./routes/game.tsx"),
    route("/result", "./routes/result.tsx"),
    route("/explanation", "./routes/explanation.tsx"),
    route("/management", "./routes/management.tsx"),
  ]),
] satisfies RouteConfig;
