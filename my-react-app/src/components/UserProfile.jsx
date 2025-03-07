export default function UserProfile({ match }) {
  const { userId } = match.params;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Details for user ID: {userId}</p>
      {/* Additional user details can be fetched and displayed here */}
    </div>
  );
}