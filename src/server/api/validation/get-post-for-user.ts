import { prisma } from "@/server/db";

export const getPostForUser = async ({
  userId,
  postId,
}: {
  userId: string;
  postId: string;
}) => {
  const post = await prisma.post.findFirst({
    where: {
      id: postId,
      authorId: userId,
    },
    select: {
      id: true,
      content: true,
      title: true,
      isPublished: true,
    },
  });

  //   return serialize(post);
  return post;
};
