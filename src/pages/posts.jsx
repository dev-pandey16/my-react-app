import { useGetPostsQuery } from "../Redux/features/slices/apiSlice";

export const Posts = () => {
    const { data: posts, isLoading, error, isSuccess } = useGetPostsQuery();

    if (isLoading) return <p>Is Loading...</p>
    if (error) return <p>there is an error {error}</p>





    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Posts</h2>
            {posts.map((post) => (
                <div key={post.id} className="mb-4 p-4 border rounded shadow">
                    <h3 className="text-xl font-semibold">{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};