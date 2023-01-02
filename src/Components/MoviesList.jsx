import React from "react";
import {
  Card,
  Col,
  Row,
  Rate,
  Space,
  Modal,
  Button,
  Select,
  Typography,
  Form,
  Input,
  message,
} from "antd";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";

const { Meta } = Card;
//Default movie data
const data = [
  {
    MovieId: 1,
    MovieName: "Avatar 2",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX1000_.jpg",
    Description: "Director James Cameron movie",
    Rating: 3,
  },
  {
    MovieId: 2,
    MovieName: "Top Gun: Maverick",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg",
    Description: "Tom Cruise's movie",
    Rating: "4",
  },
  {
    MovieId: 3,
    MovieName: "Black Panther: Wakanda Forever",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg",
    Description: "Marvel movie",
    Rating: 3.8,
  },
  {
    MovieId: 4,
    MovieName: "The Batman",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg",
    Description: "Matt Reeves DC movie",
    Rating: 4.8,
  },
];
const MoviesList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(false);
  const [sort, setSort] = useState("asc");
  const onAddRatingClick = (movie) => {
    setIsModalOpen(true);
    setSelectedMovie(movie);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  //Sort
  const getSort = () => {
    const sorted = [...data];
    sorted.sort((a, b) => {
      if (sort === "asc") {
        return a.Rating > b.Rating ? 1 : a.Rating === b.Rating ? 0 : -1;
      } else {
        return a.Rating < b.Rating ? 1 : a.Rating === b.Rating ? 0 : -1;
      }
    });
    return sorted;
  };
  const submit = () => {
    message.success("Your review has been submitted. Thank you!");
  };
  return (
    <>
      <div className="sort">
        <Typography.Text>Sort by </Typography.Text>
        <Select
          onChange={(value) => {
            setSort(value);
          }}
          defaultValue={"asc"}
          options={[
            { label: "Rating: Low to High", value: "asc" },
            { label: "Rating: High to Low", value: "desc" },
          ]}
        ></Select>
      </div>
      <Row gutter={16}>
        {getSort(data).map((item, index) => (
          <>
            <Col sm={12} xs={24} md={8} lg={8} key={index}>
              <Card
                key={item.MovieId}
                hoverable
                cover={
                  <img alt={`Poster of ${item.MovieName}`} src={item.Poster} />
                }
                extra={
                  <Button
                    onClick={() => {
                      onAddRatingClick(item);
                    }}
                    type="link"
                  >
                    Add Rating
                  </Button>
                }
              >
                <Meta
                  title={
                    <Space>
                      <span>{item.MovieName}</span>{" "}
                      <Rate
                        allowHalf
                        defaultValue={Number(item.Rating)}
                        disabled
                      />
                    </Space>
                  }
                  description={item.Description}
                />
              </Card>
            </Col>
          </>
        ))}
      </Row>
      <Modal
        title={selectedMovie.MovieName}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
      >
        <Form className="reviewForm" onFinish={submit}>
          <Form.Item
            label="Your name"
            name={"name"}
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input placeholder="(Max. 50 characters)" maxLength={50} />
          </Form.Item>
          <Form.Item
            label="Your rating"
            name={"userRating"}
            rules={[{ required: true, message: "Rating required" }]}
          >
            <Rate allowHalf defaultValue={0} />
          </Form.Item>
          <Form.Item label="Your review" name={"userReview"}>
            <TextArea placeholder="(Max. 500 characters)" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
};
export default MoviesList;
