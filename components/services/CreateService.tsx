"use client";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { ServiceForm } from "./ServiceForm";

export const CreatePost = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        className="bg-secondary"
        size="large"
        type="primary"
        onClick={() => setOpen(true)}
      >
        + Create New Service
      </Button>
      <Modal
        width={"700px"}
        title={
          <div>
            <h2 className="text-2xl font-normal">Create Service</h2>
            <p className="font-normal text-[#ACACAC] mt-1">
              Fill the details below to create a new service
            </p>
          </div>
        }
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        closeIcon={<></>}
        footer={null}
      >
        <ServiceForm />
      </Modal>
    </>
  );
};
