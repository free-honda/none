// App.js
import React from "react";
import { useAuth } from "react-oidc-context";
import { Outlet } from "react-router";

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

function isCustomProfile(
  profile: unknown,
): profile is { "cognito:username": string; email: string } {
  return (
    typeof profile === "object" &&
    profile !== null &&
    "cognito:username" in profile &&
    typeof (profile as Record<string, unknown>)["cognito:username"] ===
      "string" &&
    typeof (profile as Record<string, unknown>).email === "string"
  );
}

function Auth() {
  const auth = useAuth();
  // const location = useLocation();

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

  console.log(auth.user);

  if (auth.user?.profile && isCustomProfile(auth.user.profile)) {
    const username = auth.user.profile["cognito:username"];
    const email = auth.user.profile.email;

    return (
      <div>
        <pre> UserName: {username} </pre>
        <pre> Hello: {email} </pre>
        <pre> ID Token: {auth.user.id_token} </pre>
        <pre> Access Token: {auth.user.access_token} </pre>
        <pre> Refresh Token: {auth.user.refresh_token} </pre>
        <button onClick={() => auth.removeUser()}>Sign out</button>
      </div>
    );
  }

  if (auth.isAuthenticated) {
    return (
      <div>
        <Outlet />
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
  );
}

export default Auth;
