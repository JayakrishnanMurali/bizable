import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { api } from "@/utils/api";
import { useRouter } from "next/navigation";
import * as React from "react";

interface PostCreateButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export function PostCreateButton({
  className,
  ...props
}: PostCreateButtonProps) {
  const router = useRouter();
  const createNewPostApi = api.post.createNewPost.useMutation();

  const isLoading = createNewPostApi.isLoading;

  async function onClick() {
    createNewPostApi.mutate(undefined, {
      onSuccess: (res) => {
        if (res) {
          // await router.refresh();
          router.push(`${routes.newPost}${res.id}`);
        }
      },
      onError: () => {
        return toast({
          title: "Something went wrong.",
          description: "Your post was not created. Please try again.",
          variant: "destructive",
        });
      },
    });
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        buttonVariants(),
        {
          "cursor-not-allowed opacity-60": isLoading,
        },
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        </>
      ) : (
        <>
          <Icons.add className="mr-2 h-4 w-4" />
        </>
      )}
      Write
    </button>
  );
}
