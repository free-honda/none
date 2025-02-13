import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("components/layout.tsx", [
    route("", "./routes/topPage.tsx"),
    route("/game", "./routes/game.tsx"),
  ]),
] satisfies RouteConfig;
