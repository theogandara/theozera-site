import { posts } from "@/mocks/blog";

export default function Page(
  props: Readonly<{
    params: { slug: string };
  }>
) {
  const post = posts.find((post) => post.id === props.params.slug);

  if (!post) {
    return <h1>Post não encontrado</h1>;
  }

  return (
    <main className="flex min-h-screen flex-col gap-4 px-8 pt-0">
      <h1 className="text-4xl font-bold text-center">{post?.title}</h1>
      <h2 className="text-2xl font-bold">{post?.description}</h2>
      <section className="grid grid-cols-1 gap-8 ">{post?.content}</section>
    </main>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: posts.map((post) => ({
      params: { slug: post.id },
    })),
    fallback: false,
  };
};
