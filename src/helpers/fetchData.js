import { useState, useEffect } from "react";

export default function useFetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = "https://api.hatchways.io/assessment/students";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let studentWithTags = [];
        data.students.map((student) => {
          student.tags = [];
          studentWithTags.push(student);
        });
        setData(studentWithTags);
      })
      .catch((error) => console.log(error.message))
      .finally(setLoading(false));
  }, []);

  return {
    data,
    loading,
  };
}
