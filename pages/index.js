import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <h1>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </h1>
    );
  }

  return <a href="/api/auth/login">Login</a>;
}
