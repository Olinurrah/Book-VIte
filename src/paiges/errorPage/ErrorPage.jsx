
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.code}>404</h1>
      <h2 style={styles.title}>Page Not Found</h2>
      <p style={styles.text}>
        Oops! The page you are looking for doesn't exist or has been moved.
      </p>

      <Link to="/" style={styles.button}>
        Go Back Home
      </Link>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#667eea,#764ba2)",
    color: "#fff",
    textAlign: "center",
    fontFamily: "sans-serif"
  },
  code: {
    fontSize: "120px",
    margin: "0",
    fontWeight: "bold"
  },
  title: {
    fontSize: "32px",
    margin: "10px 0"
  },
  text: {
    fontSize: "18px",
    maxWidth: "400px",
    marginBottom: "30px"
  },
  button: {
    padding: "12px 24px",
    background: "#fff",
    color: "#333",
    textDecoration: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    transition: "0.3s"
  }
};

export default ErrorPage;