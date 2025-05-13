import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css"; // 👈 custom CSS

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Enter a valid email"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Simulated API response
      await new Promise((res) => setTimeout(res, 1000));

      const mockToken = "abc123.jwt.token";
      const mockUser = { name: "John Doe", email: data.email };

      localStorage.setItem("token", mockToken);
      localStorage.setItem("user", JSON.stringify(mockUser));

      toast.success("Login successful! 🚀");
      setSuccess(true);
      reset();

      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } catch (error) {
      toast.error("Something went wrong 😓");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="login-wrapper">
      <div className="login-form glassmorphism">
        <div className="text-center">
          <img
            src="./Images/valasys-logo.png"
            alt="Valasys Logo"
            className="logo mb-3"
          />
        </div>
        <h2 className="text-center mb-4 valasys-text">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mb-3">
            <label className="labels">Enter yout email address</label>
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              {...register("email")}
              placeholder="Enter email"
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          <div className="form-group mb-3">
            <label className="labels">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? "is-invalid" : ""}`}
              {...register("password")}
              placeholder="Enter password"
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading || success}
            className="btn btn-valasys w-100"
          >
            {loading ? (
              <>
                Signing in...{" "}
                <span className="spinner-border spinner-border-sm ms-2"></span>
              </>
            ) : success ? (
              "✅ Signed in"
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
