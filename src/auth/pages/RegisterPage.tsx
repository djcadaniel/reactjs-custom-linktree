import { useState, FormEvent, ChangeEvent } from "react";
import { RegisterInterface } from "../../interfaces/auth.interface";
import { registerUser } from "../../services/auth.service";

export const RegisterPage = () => {

  const [user, setUser] = useState<RegisterInterface>({
    name:'',
    username: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const onHandleRegister = async(e:FormEvent<HTMLFormElement>) =>{
    try {
      e.preventDefault();
      const response = await registerUser(user)
      console.log(response.data.token);
    } catch (error) {
      console.log(error);
    }
  }

  const onHandleChange = (e:ChangeEvent<HTMLInputElement>)=>{
    const {name, value} = e.target;
    setUser((prev)=>({...prev, [name]:value}))
  }

  return (
    <section className='container mt-5'>
      <h1 className="text-green-600">Register</h1>
      <form onSubmit={onHandleRegister}>
        <input placeholder="name" type="text" name='name' value={user.name} onChange={onHandleChange}/>
        <input placeholder="username" type="text" name="username" value={user.username} onChange={onHandleChange}/>
        <input placeholder="email" type="email" name="email" value={user.email} onChange={onHandleChange}/>
        <input placeholder="password" type="password" name="password" value={user.password} onChange={onHandleChange}/>
        <input placeholder="confirmar password" type="password" name="passwordConfirm" value={user.passwordConfirm} onChange={onHandleChange}/>
        <button type="submit">Registrar</button>
      </form>
    </section>
  )
}