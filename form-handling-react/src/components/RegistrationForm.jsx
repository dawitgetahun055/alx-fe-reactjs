import { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Initialize error object
    const validationErrors = {};

    // Basic validation checks
    if (!username) {
      validationErrors.username = "Username is required";
    }
    if (!email) {
      validationErrors.email = "Email is required";
    }
    if (!password) {
      validationErrors.password = "Password is required";
    }

    // If there are validation errors, update the errors state
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // If no errors, proceed with form submission (e.g., mock API call)
    console.log({ username, email, password });

    // Reset errors if submission is successful
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && (
          <div style={{ color: "red" }}>{errors.username}</div>
        )}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && (
          <div style={{ color: "red" }}>{errors.password}</div>
        )}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
