import { authOptions } from "@/server/auth";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth/next";

export async function getSession(ctx: GetServerSidePropsContext) {
  return await getServerSession(ctx.req, ctx.res, authOptions);
}

export async function getCurrentUserServer(ctx: GetServerSidePropsContext) {
  const session = await getSession(ctx);

  return session?.user;
}
