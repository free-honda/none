import type { Route } from "./+types/home";
import  Auth  from "../auth/auth";

import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: "https://cognito-idp.ap-northeast-1.amazonaws.com/ap-northeast-1_BBs2wUFVb",
  client_id: "16thpun6fesvn6sp90jtou7kl5",
  redirect_uri: "http://localhost:5173",
  response_type: "code",
  scope: "email openid phone",
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return(
  <>
    <AuthProvider {...cognitoAuthConfig}>
      <Auth/>
    </AuthProvider>
  </>
  )
}
