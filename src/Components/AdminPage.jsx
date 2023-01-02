import { Form, Input, Button, message, Upload, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useState } from "react";
function AdminPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const onAddMovieClick = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const submit = () => {
    message.success("Movie data has been uploaded");
  };
  return (
    <>
      <Button
        style={{ marginLeft: "80%" }}
        onClick={() => {
          onAddMovieClick();
        }}
      >
        Add Movies
      </Button>
      <div
        style={{
          display: "flex",
          justifyContent: "Center",
          alignItems: "Center",
        }}
      >
        <Modal
          title="Add a movie..."
          open={isModalOpen}
          onCancel={handleCancel}
          footer={false}
        >
          <Form className="adminForm" onFinish={submit}>
            <Form.Item
              label="Movie name"
              name={"movieName"}
              rules={[{ required: true, message: "This field is required" }]}
            >
              <Input placeholder="Movie name" />
            </Form.Item>
            <Form.Item
              label="Movie details"
              name={"details"}
              rules={[{ required: true, message: "This field is required" }]}
            >
              <TextArea placeholder="(Max. 500 characters)" />
            </Form.Item>
            <Form.Item
              label="Movie Poster ( jpg/png only )"
              name={"posterImage"}
            >
              <Upload.Dragger multiple accept=".png,.jpg">
                Drag image(s) here or <br />
                <Button>Click to upload</Button>
              </Upload.Dragger>
            </Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form>
        </Modal>
      </div>
    </>
  );
}
export default AdminPage;
