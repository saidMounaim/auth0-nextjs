import { useUser } from "@auth0/nextjs-auth0";
import { Link } from "next/link";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <h1>
        Welcome {user.name}!{" "}
        <Link href="/api/auth/logout">
          <a>Logout</a>
        </Link>
      </h1>
    );
  }

  return (
    <Link href="/api/auth/login">
      <a>Logout</a>
    </Link>
  );
}
