import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { ThrowGeneralError } from "@/utils/api-error";

export const postRouter = createTRPCRouter({
  createNewPost: protectedProcedure.mutation(async ({ ctx }) => {
    const userId = ctx.session.user.id;

    try {
      const post = await ctx.prisma.post.create({
        data: {
          authorId: userId,
          title: "Untitled Post",
        },
        select: {
          id: true,
        },
      });

      return post;
    } catch (error) {
      ThrowGeneralError(error);
    }
  }),
});
