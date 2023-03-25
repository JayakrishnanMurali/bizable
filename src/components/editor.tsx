import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { routes } from "@/config/routes";
import { useMounted } from "@/hooks/use-mounted";
import { cn } from "@/lib/utils";
import { postPatchSchema } from "@/lib/validations/post";
import EditorJS from "@editorjs/editorjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { Post } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import { z } from "zod";

interface EditorProps {
  post: Pick<Post, "id" | "title" | "content" | "isPublished">;
}

type FormData = z.infer<typeof postPatchSchema>;

export const Editor = ({ post }: EditorProps) => {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(postPatchSchema),
  });

  const ref = useRef<EditorJS>();
  const router = useRouter();
  const isMounted = useMounted();

  const initializeEditor = useCallback(async () => {
    const EditorJS = (await import("@editorjs/editorjs")).default;
    const Header = (await import("@editorjs/header")).default;
    const Embed = (await import("@editorjs/embed")).default;
    const Table = (await import("@editorjs/table")).default;
    const List = (await import("@editorjs/list")).default;
    const Code = (await import("@editorjs/code")).default;
    const LinkTool = (await import("@editorjs/link")).default;
    const InlineCode = (await import("@editorjs/inline-code")).default;

    const body = postPatchSchema.parse(post);

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editor",
        onReady() {
          ref.current = editor;
        },
        placeholder: "Tell your story...",
        inlineToolbar: true,
        data: body.content,
        tools: {
          header: Header,
          linkTool: LinkTool,
          list: List,
          code: Code,
          inlineCode: InlineCode,
          table: Table,
          embed: Embed,
        },
      });
    }
  }, [post]);

  useEffect(() => {
    if (isMounted) {
      initializeEditor();

      return () => {
        ref.current?.destroy();
        ref.current = undefined;
      };
    }
  }, [isMounted, initializeEditor]);

  const onSubmit = () => {
    // publish api call
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full gap-10">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-10">
            <Link
              href={routes.home}
              replace
              className={cn(buttonVariants({ variant: "ghost" }))}
            >
              <>
                <Icons.chevronLeft className="mr-2 h-4 w-4" />
                Back
              </>
            </Link>
            <p className="text-sm text-theme-600">
              {post.isPublished ? "Published" : "Draft"}
            </p>
          </div>
          <button type="submit" className={cn(buttonVariants())}>
            {/* {isSaving && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )} */}
            <span>Publish</span>
          </button>
        </div>
        <div className="prose prose-zinc dark:prose-invert subpixel-antialiased mx-auto w-[800px]">
          <TextareaAutosize
            autoFocus
            id="title"
            defaultValue={post.title ?? ""}
            placeholder="Post title"
            className="w-full resize-none bg-transparent appearance-none overflow-hidden text-5xl font-bold focus:outline-none"
            {...register("title")}
          />
          <div id="editor" className="min-h-[500px]" />
          <p className="text-sm text-theme-500">
            Use{" "}
            <kbd className="rounded-md border bg-theme-100 dark:bg-theme-800 dark:border-theme-900 px-1 text-xs uppercase">
              Tab
            </kbd>{" "}
            to open the command menu.
          </p>
        </div>
      </div>
    </form>
  );
};
