import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const ThrowGeneralError = (error: any) => {
  if (error instanceof Error) {
    throw new Error(error.message, {
      cause: error.cause,
    });
  } else if (error instanceof z.ZodError) {
    throw new Error(error.message, { cause: error.cause });
  } else {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: "Something went wrong",
      cause: "Unknown",
    });
  }
};
