import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { createStudent, getStudent, updateStudent } from "../api/studentsApi";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const schema = yup
  .object({
    firstName: yup.string().required().max(50),
    lastName: yup.string().required().max(50),
    email: yup.string().email().required(),
    phoneNumber: yup.string().required(),
    department: yup.string().required(),
    year: yup.number().required().min(1).max(4),
    gpa: yup.number().required().min(0).max(4),
  })
  .required();

export default function StudentForm({ editMode = false }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(Boolean(editMode));

  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      department: "",
      year: 1,
      gpa: 0.0,
      isActive: true,
    },
  });

  useEffect(() => {
    if (!editMode) return;

    const controller = new AbortController();
    const signal = controller.signal;

    (async () => {
      try {
        // fetch student
        const res = await getStudent(id, { signal }); // if your getStudent supports passing signal, otherwise ignore
        const s = res.data;

        // set form values
        setValue("firstName", s.firstName);
        setValue("lastName", s.lastName);
        setValue("email", s.email);
        setValue("phoneNumber", s.phoneNumber);
        setValue("department", s.department);
        setValue("year", s.year);
        setValue("gpa", s.gpa);
        setValue("isActive", s.isActive);
      } catch (err) {
        if (err.name === "CanceledError" || err.name === "AbortError") return;
        setError(
          err.response?.data?.message || err.message || "Failed to load student"
        );
      } finally {
        setLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, [editMode, id, setValue]);

  const onSubmit = async (data) => {
    setError(null);
    try {
      if (editMode) {
        await updateStudent(id, data);
        navigate("/");
      } else {
        await createStudent(data);
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Save failed");
    }
  };

  if (loading) return <Loading />;

  return (
    <div>
      <h2>{editMode ? "Edit Student" : "Add Student"}</h2>
      {error && <ErrorMessage message={error} />}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First name</label>
          <input {...register("firstName")} />
          {errors.firstName && (
            <div style={{ color: "red" }}>{errors.firstName.message}</div>
          )}
        </div>
        <div>
          <label>Last name</label>
          <input {...register("lastName")} />
          {errors.lastName && (
            <div style={{ color: "red" }}>{errors.lastName.message}</div>
          )}
        </div>
        <div>
          <label>Email</label>
          <input {...register("email")} />
          {errors.email && (
            <div style={{ color: "red" }}>{errors.email.message}</div>
          )}
        </div>
        <div>
          <label>Phone</label>
          <input {...register("phoneNumber")} />
          {errors.phoneNumber && (
            <div style={{ color: "red" }}>{errors.phoneNumber.message}</div>
          )}
        </div>
        <div>
          <label>Department</label>
          <input {...register("department")} />
          {errors.department && (
            <div style={{ color: "red" }}>{errors.department.message}</div>
          )}
        </div>
        <div>
          <label>Year</label>
          <input type="number" {...register("year")} />
          {errors.year && (
            <div style={{ color: "red" }}>{errors.year.message}</div>
          )}
        </div>
        <div>
          <label>GPA</label>
          <input type="number" step="0.01" {...register("gpa")} />
          {errors.gpa && (
            <div style={{ color: "red" }}>{errors.gpa.message}</div>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save"}
        </button>
      </form>
    </div>
  );
}
