import { Editor } from "@/components/editor";
import Meta from "@/components/meta";
import { routes } from "@/config/routes";
import { getPostForUser } from "@/server/api/validation/get-post-for-user";
import { getCurrentUserServer } from "@/server/api/validation/get-server-session";
import { Post } from "@prisma/client";
import { GetServerSideProps } from "next";

interface iPostEditor {
  post: Post;
}

const PostEditor = ({ post }: iPostEditor) => {
  return (
    <>
      <Meta description="Create new post or try editting already existing posts" />
      <div className="container mx-auto grid items-start gap-10 py-8">
        <Editor
          post={{
            id: post.id,
            title: post.title,
            content: post.content,
            isPublished: post.isPublished,
          }}
        />
      </div>
    </>
  );
};

export default PostEditor;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const user = await getCurrentUserServer(ctx);

  const postId = (ctx.params?.postId as string) ?? "";

  if (!user)
    return {
      redirect: {
        destination: routes.home,
        permanent: false,
      },
    };

  const post = await getPostForUser({ postId: postId, userId: user.id });

  if (!post)
    return {
      redirect: {
        destination: routes.notFound,
        permanent: false,
      },
    };

  return {
    props: { post },
  };
};
