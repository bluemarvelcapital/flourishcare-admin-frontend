import { Modal, Button } from "antd";

const { confirm } = Modal;

function showConfirm() {
    confirm({
        title: "Are you sure you want to delete this service? This action cannot be undone.",
        content: "Delete Service",
        onOk() {
            return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log("Oops errors!"));
        },
        onCancel() {},
    });
}

export default showConfirm