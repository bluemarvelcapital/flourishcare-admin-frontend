"use client";
import { Button, Modal } from "antd";
import React, { useState } from "react";
import { ServiceForm } from "./ServiceForm";

export const EditService = () => {
  const [open, setOpen] = useState(false);

  return (
      <>
          <p
              className="text-primary cursor-pointer"
              onClick={() => setOpen(true)}
          >
              Edit
          </p>
          <Modal
              width={"700px"}
              title={
                  <div>
                      <h2 className="text-2xl font-normal">Edit Service</h2>
                      <p className="font-normal text-[#ACACAC] mt-1">
                          Edit the details below to make changes to the service.
                      </p>
                  </div>
              }
              open={open}
              onOk={() => setOpen(false)}
              onCancel={() => setOpen(false)}
              closeIcon={<></>}
              footer={null}
          >
              <ServiceForm onCancel={() => setOpen(false)} />
          </Modal>
      </>
  );
};
