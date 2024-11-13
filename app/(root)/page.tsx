import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "John Doe",
      },
      _id: 1,
      description: " A platform for connecting entrepreneurs with investors",
      image:
        "https://images.unsplash.com/photo-1508175800969-525c72a047dd?q=80&w=1605&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Technology",
      title: "Startup Connect",
    },
  ];
  return (
    <div>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup <br /> Connecte with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit your ideas, vote on pitches, and Get Noticed in virual
          competition
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: startupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </div>
  );
}
