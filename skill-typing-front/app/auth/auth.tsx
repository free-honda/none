// App.js

import { useAuth } from "react-oidc-context";
import { Outlet, useLocation } from "react-router";
import type { Route } from "../+types/root";

  export function meta({}: Route.MetaArgs) {
    return [
      { title: "New React Router App" },
      { name: "description", content: "Welcome to React Router!" },
    ];
  }



function Auth() {
  const auth = useAuth();
  const location = useLocation();

  const signOutRedirect = () => {
    const clientId = import.meta.env.VITE_COGNITO_CLIENT_ID;
    const logoutUri = import.meta.env.VITE_COGNITO_LOGOUT_URI;
    const cognitoDomain = import.meta.env.VITE_COGNITO_DOMAIN;
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };


  if (auth.isLoading) {
    return <div>Loading...</div>;
  }

  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }

  console.log(auth.user)

  if (auth.isAuthenticated && location.pathname == "/") {
    return (
      <div>
        <pre> UserName: {auth.user["profile"]["cognito:username"]} </pre>
        <pre> Hello: {auth.user?.profile.email} </pre>
        <pre> ID Token: {auth.user?.id_token} </pre>
        <pre> Access Token: {auth.user?.access_token} </pre>
        <pre> Refresh Token: {auth.user?.refresh_token} </pre>
        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <Outlet/>
      </div>
    );
  }

  return (
    <div>
      <p>
        <button onClick={() => auth.signinRedirect()}>Sign in</button>
      </p>
      <p>
        <button onClick={() => signOutRedirect()}>Sign out</button>
      </p>
    </div>
  )
}
  
export default Auth;