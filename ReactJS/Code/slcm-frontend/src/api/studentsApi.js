import api from "./apiClient";

export const getStudents = () => api.get("/students");
export const getStudent = (id) => api.get(`/students/${id}`);
export const createStudent = (payload) => api.post("/students", payload);
export const updateStudent = (id, payload) =>
  api.put(`/students/${id}`, payload);
export const deleteStudent = (id) => api.delete(`/students/${id}`);
export const getByDepartment = (department) =>
  api.get(`/students/department/${encodeURIComponent(department)}`);
export const getByYear = (year) => api.get(`/students/year/${year}`);
export const getGpaStatus = (id) => api.get(`/students/${id}/gpa`);
