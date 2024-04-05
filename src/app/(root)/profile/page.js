export default async function page() {
  const { user } = await getSession();
  return (
    user && (
      <div>
        <p>Profile Page</p>
      </div>
    )
  );
}
