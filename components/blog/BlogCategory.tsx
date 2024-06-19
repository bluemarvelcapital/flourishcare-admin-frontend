"use client";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { BlogCategoryForm } from "./BlogCategoryForm";

export const BlogCategory = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        className="bg-secondary"
        size="large"
        type="primary"
        onClick={() => setOpen(true)}
      >
        + Add Category
      </Button>
      <Modal
        width={"400px"}
        title={
          <div>
            <h2 className="text-2xl font-normal">Create Blog Category</h2>
            <p className="font-normal text-[#ACACAC] mt-1">
              Fill the details below to create a new blog category
            </p>
          </div>
        }
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        closeIcon={<></>}
        footer={null}
      >
        <BlogCategoryForm />
      </Modal>
    </>
  );
};
