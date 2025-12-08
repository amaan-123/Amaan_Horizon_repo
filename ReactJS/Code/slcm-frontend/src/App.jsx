import { Routes, Route, Link } from "react-router-dom";
import StudentsList from "./pages/StudentsList";
import StudentForm from "./pages/StudentForm";
import StudentDetails from "./pages/StudentDetails";

export default function App() {
  return (
    <div className="container">
      <header>
        <h1>SLCM - Frontend</h1>
        <nav>
          <Link to="/">Students</Link>
          {" | "}
          <Link to="/students/new">Add Student</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<StudentsList />} />
          <Route path="/students/new" element={<StudentForm />} />
          <Route path="/students/:id/edit" element={<StudentForm editMode />} />
          <Route path="/students/:id" element={<StudentDetails />} />
        </Routes>
      </main>
    </div>
  );
}
