import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
    route("", "./routes/home.tsx", [
        route("welcome", "./welcome/welcome.tsx")
    ])
] satisfies RouteConfig;
