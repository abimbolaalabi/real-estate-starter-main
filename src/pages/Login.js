import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

// Loader component
const Loader = () => (
  <div className="loader" style={loaderStyle}>
    <div className="spinner" style={spinnerStyle}></div>
  </div>
);

// Inline styles for loader
const loaderStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

const spinnerStyle = {
  border: "6px solid #f3f3f3",
  borderRadius: "50%",
  borderTop: "6px solid #3498db",
  width: "40px",
  height: "40px",
  animation: "spin 1s linear infinite",
};

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Form validation with Formik & Yup
  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      setIsLoading(true); // Show loader on submit
      setTimeout(() => {
        // Simulating API call
        toast.success("Login successful! Redirecting to homepage...");
        setIsLoading(false); // Hide loader
        navigate("/"); // Redirect to homepage
      }, 2000);
    },
  });

  return (
    <div className="login-page" style={loginPageStyle}>
      <div className="login-container" style={formContainerStyle}>
        <h2 style={{ textAlign: "center" }}>Login</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              style={inputStyle}
            />
            {formik.errors.email && formik.touched.email && (
              <div style={errorStyle}>{formik.errors.email}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              style={inputStyle}
            />
            {formik.errors.password && formik.touched.password && (
              <div style={errorStyle}>{formik.errors.password}</div>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            style={buttonStyle(isLoading)}
          >
            {isLoading ? "Logging in..." : "Log In"}
          </button>
        </form>
      </div>

      {/* Toast notifications */}
      <ToastContainer />

      {/* Display loader when submitting */}
      {isLoading && <Loader />}
    </div>
  );
};

// Inline styles for the overall layout and form container
const loginPageStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  backgroundColor: "#f8f9fa",
};

const formContainerStyle = {
  backgroundColor: "#ffffff",
  padding: "30px",
  borderRadius: "8px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
  width: "400px", // Adjust width as needed
};

// Inline styles for the form elements
const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "10px 0",
  borderRadius: "4px",
  border: "1px solid #ccc",
};

const errorStyle = {
  color: "red",
  fontSize: "12px",
  marginTop: "5px",
};

const buttonStyle = (isLoading) => ({
  width: "100%",
  padding: "10px",
  backgroundColor: isLoading ? "#ddd" : "#3498db",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: isLoading ? "not-allowed" : "pointer",
});

export default Login;
