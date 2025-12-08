import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getStudent } from "../api/studentsApi";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

export default function StudentDetails() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getStudent(id)
      .then((res) => setStudent(res.data))
      .catch((err) => setError(err.response?.data?.message || err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!student) return <div>Not found</div>;

  return (
    <div>
      <h2>
        {student.firstName} {student.lastName}
      </h2>
      <p>Email: {student.email}</p>
      <p>Phone: {student.phoneNumber}</p>
      <p>Department: {student.department}</p>
      <p>Year: {student.year}</p>
      <p>GPA: {student.gpa}</p>
      <Link to={`/students/${id}/edit`}>Edit</Link>
    </div>
  );
}
