import { useParams } from "@tanstack/react-router";

export function UserDetailPage() {
  const { userId } = useParams({
    from: "/_authenticated/users/$userId",
  });

  return (
    <div>
      <h1>User Detail</h1>

      <p>User ID: {userId}</p>
    </div>
  );
}
