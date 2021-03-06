import { useState, useEffect } from "react";
import InstructorRoute from "../../../components/protectedRoute/InstructorRoute";
import InstructorNav from "../../../components/nav/InstructorNav";
import CourseCreateForm from "../../../components/form/CreateCourseForm";

const create = () => {
  const [values, setVaues] = useState({
    name: "",
    description: "",
    price: "3499",
    uploading: false,
    paid: true,
    loading: false,
    imagePreview: "",
    category: "development",
  });

  const handleChange = (e) => {
    setVaues({ ...values, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <InstructorRoute>
      <div className="container-fluid gap">
        <div className="row">
          <div className="col-md-2 text-center">
            <InstructorNav />
          </div>
          <div className="col-md-8 offset-md-1">
            <h2 className="text-center">Create Course</h2>
            <div className="underline"></div>
            <div className="pt-3 pb-3">
              <CourseCreateForm
                values={values}
                setVaues={setVaues}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                handleImage={handleImage}
              />
            </div>
          </div>
        </div>
      </div>
    </InstructorRoute>
  );
};

export default create;
