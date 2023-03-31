import { useContext, useState, FormEvent, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";
import axios from 'axios';
import { LoginInterface } from "../../interfaces/auth.interface";
import { loginUser } from "../../services/auth.service";

export const LoginPage = () => {
  
  const [user, setUser] = useState<LoginInterface>({
    email:'',
    password:''
  })
  
  const {login} = useContext(AuthContext);

  const navigate = useNavigate();
  const onHandleLogin = async(e:FormEvent<HTMLFormElement>)=>{
    try {
      e.preventDefault();
      const response = await loginUser(user);
      console.log(response.data.token);
    } catch (error) {
      console.log(error);
    }
    // login('Daniel Castro');
    // navigate('/',{
    //   replace: true
    // })
  }
  const onHandleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;
    setUser((prev)=>({...prev, [name]:value}))
  }

  return (
    <section className='container mt-5'>
      <h1 className="text-green-600">Login</h1>
      <form onSubmit={onHandleLogin}>
        <input type="email" name='email' value={user.email} onChange={onHandleChange}/>
        <input type="password" name="password" value={user.password} onChange={onHandleChange}/>
        <button type="submit">Iniciar sesión</button>
      </form>
    </section>
  )
}