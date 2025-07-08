import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("games/Racing", "routes/games/Racing.tsx"),
] satisfies RouteConfig;
