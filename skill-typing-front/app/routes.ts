import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("components/layout.tsx", [
    route("", "./routes/topPage.tsx"),
    route("/game", "./routes/game.tsx"),
    route("/create", "./routes/createQ.tsx"),
    route("/edit", "./routes/editQ.tsx"),
    route("/management", "./routes/management.tsx"),
  ]),
] satisfies RouteConfig;
