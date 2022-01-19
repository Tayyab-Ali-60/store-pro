import styled from "styled-components";
import { mobile } from "../responsive";
import { useHistory } from "react-router";
import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`;


const Register = () => {
  const history = useHistory(); 
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  // Handling the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === '' || email === '' || password === '') {
      setError(true);
    } else {
      try {
        const res = await publicRequest.post("/auth/register", { username, email, password });
        console.log(res);
        setSubmitted(true);
        login(dispatch, { username, password });
        
      } catch (err) {
        console.log(err);
      }
      setError(false);
    }
  };

 
  
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input onChange={handleName} value={username} placeholder="username" />
          <Input onChange={handleEmail} value={email} placeholder="email" />
          <Input  onChange={handlePassword} value={password} placeholder="password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleSubmit}  type="submit">CREATE</Button>
          <Button onClick={()=>{history.push('/login')}} style={{cursor:'pointer', marginLeft:'135px'}} >LOGIN</Button>
        </Form>
        {/* Calling to the methods */}
        <div className="messages">
          {error && <Error>Something went wrong...</Error>}
        </div>
      </Wrapper>
    </Container>
  );
};

export default Register;
