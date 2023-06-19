import { useRouter, useSegments } from "expo-router";
import React, { useMemo } from "react";

export type UserType = {
  name: string;
  email: string;
  location: string;
  avatar: string;
  phone: string;
};

const AuthContext = React.createContext<{
  signIn: (e: UserType) => void;
  signOut: () => void;
  user: UserType | null;
} | null>(null);

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user: UserType | null) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";
    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.replace("/test");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.replace("/home");
    }
  }, [user, segments]);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setAuth] = React.useState<UserType | null>(null);

  useProtectedRoute(user);
  const value = useMemo(
    () => ({
      signIn: (e: UserType) => setAuth(e),
      signOut: () => setAuth(null),
      user,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
