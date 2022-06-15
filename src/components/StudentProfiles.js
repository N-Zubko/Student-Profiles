import React, { useState } from "react";
import fetchData from "../helpers/fetchData";
import searchStudents from "../helpers/searchStudents";
import StudentCard from "./StudentCard";
import RiseLoader from "react-spinners/RiseLoader";

const StudentProfiles = () => {
  const { data, loading } = fetchData();
  const [nameSearch, setNameSearch] = useState("");
  const [tagSearch, setTagSearch] = useState("");

  const addTagData = (id, tagData) => {
    data[id - 1].tags = [...data[id - 1].tags, tagData];
  };

  return (
    <div className="container">
      {loading ? (
        <div className="loader">
          <RiseLoader color="silver" size={50} />
        </div>
      ) : (
        <>
          <section className="input-box">
            <div className="searchFields">
              <input
                type="search"
                placeholder="Search by name"
                onChange={(e) => setNameSearch(e.target.value)}
              />
              <input
                type="search"
                placeholder="Search by tag"
                onChange={(e) => setTagSearch(e.target.value)}
              />
            </div>
          </section>
          <section className="student-container">
            {data &&
              searchStudents(data, nameSearch, tagSearch).map((student) => {
                return (
                  <StudentCard
                    key={student.id}
                    id={student.id}
                    firstName={student.firstName}
                    lastName={student.lastName}
                    pic={student.pic}
                    email={student.email}
                    company={student.company}
                    skill={student.skill}
                    grades={student.grades}
                    tags={student.tags}
                    func={addTagData}
                  />
                );
              })}
          </section>
        </>
      )}
    </div>
  );
};

export default StudentProfiles;
