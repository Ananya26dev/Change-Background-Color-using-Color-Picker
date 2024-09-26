import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ChromePicker } from "react-color";
const ColorPicker = () => {
  const [backGroundColor, setBackGroundColor] = useState("#fff");
  const handleBackgroundColorChange = (color) => {
    setBackGroundColor(color.hex);
  };
  return (
    <>
      <Container
        fluid
        style={{ backgroundColor: backGroundColor, height: "100vh" }}
      >
        <Row className="justify-content-center align-items-center vh-100">
          <Col xs={10} md={6} lg={4} className="text-center">
            <h1 className="text-center color-picker-heading">Color Picker</h1>
            <div className="color-picker-container">
              <ChromePicker
                color={backGroundColor}
                onChange={handleBackgroundColorChange}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ColorPicker;
