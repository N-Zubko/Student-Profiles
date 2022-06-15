import React, { useState } from "react";
import { countAverage } from "../helpers/countAverage";
import { Collapse, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const StudentCard = (student) => {
  const [expandedView, setExpandedView] = useState(false);
  const [tags, setTags] = useState(student.tags);

  const addTag = (e) => {
    if (e.key === "Enter" && e.target.value.length > 0) {
      setTags([...tags, e.target.value]);
      student.func(student.id, e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div className="container-fluid card-item">
      <Row className="d-flex justify-content-center">
        <Col md={3}>
          <img
            src={student.pic}
            alt={`${student.firstName} ${student.lastName}`}
            className="align-self-start"
          />
        </Col>
        <Col className="text-info" md={6}>
          <h1 className="student-name">
            {student.firstName.toUpperCase()} {student.lastName.toUpperCase()}
          </h1>
          <p>Email: {student.email}</p>
          <p>Company: {student.company}</p>
          <p>Skill: {student.skill}</p>
          <p>Average: {countAverage(student.grades)}%</p>

          <Collapse in={expandedView}>
            <div className="grades-list">
              {student.grades.map((grade, index) => (
                <div key={index}>
                  <span>
                    Test {index + 1}: {grade}%
                  </span>
                </div>
              ))}
            </div>
          </Collapse>

          <div className="tag-container">
            <Row className="d-flex justify-content-start">
              {tags.map((tag, index) => {
                return (
                  <div key={index} className="tag">
                    {tag}
                  </div>
                );
              })}
            </Row>
            <input type="text" placeholder="Add a tag" onKeyDown={addTag} />
          </div>
        </Col>
        <Col xs={2}>
          <button
            onClick={() => {
              setExpandedView(!expandedView);
            }}
          >
            {expandedView ? "-" : "+"}
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default StudentCard;
