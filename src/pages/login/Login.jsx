import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useSearchContext } from "../../context/AuthContext";
import { useState } from "react";
import { Container, Formbox } from "./Login.styled";
const Login = () => {
  const [newUser, setNewUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { setUser } = useSearchContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(newUser);
    navigate(-1);
  };
  return (
    <Container>
      <Formbox onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Input1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            required
            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Input2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            required
            onChange={(e) =>
              setNewUser({ ...newUser, password: e.target.value })
            }
          />
        </Form.Group>
        <div className="text-center">
          <Button type="submit" variant="success px-5">
            Submit
          </Button>
        </div>
      </Formbox>
    </Container>
  );
};

export default Login;
