import { EditorLayout } from "@/components/common/layouts/editor-layout";
import Meta from "@/components/meta";
import React from "react";

const PostEditor = () => {
  return (
    <>
      <Meta description="Create new post or try editting already existing posts" />
      <EditorLayout>Editor</EditorLayout>
    </>
  );
};

export default PostEditor;
