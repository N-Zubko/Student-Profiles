export default function searchStudents(students, nameSearch, tagSearch) {
  const filteredStudents = students.filter((student) =>
    [
      student.firstName,
      student.lastName,
      `${student.firstName} ${student.lastName}`,
    ].some((text) => text.toLowerCase().includes(nameSearch.toLowerCase()))
  );

  if (tagSearch.length > 0) {
    const tagFilteredStudents = filteredStudents.filter((studen) =>
      studen.tags.some((text) =>
        text.toLowerCase().includes(tagSearch.toLowerCase())
      )
    );
    return tagFilteredStudents;
  } else {
    return filteredStudents;
  }
}
