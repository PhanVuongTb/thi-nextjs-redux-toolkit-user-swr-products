import { useRouter } from 'next/router'
import React from 'react'
import { useForm } from 'react-hook-form';
import { useAppDispatch } from './../app/hook';
import { dangNhap } from './../features/user.slice';

interface Props { }

const signin = () => {
  interface User {
    id?: number,
    email: string,
    password: string,
  };
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm<User>();

  const onSubmit = async (data: User) => {
    const { payload } = await dispatch(dangNhap(data));
    if (payload) {
      localStorage.setItem("users", JSON.stringify(payload));
      router.push("/")
      alert("dang nhap thanh cong")
    } else {
      alert("that bai")
    }
  }

  return <div className='container'>
    <h1>Dang nhap</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" {...register("email", { required: true })} className="form-control" />
        {errors.email && <div className="form-text">Khong de trong</div>}
      </div>
      <div className="mb-3">
        <label className="form-label">Password</label>
        <input type="password"  {...register("password", { required: true })} className="form-control" />
        {errors.password && <div className="form-text">Khong de trong</div>}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>

  </div>
}

export default signin