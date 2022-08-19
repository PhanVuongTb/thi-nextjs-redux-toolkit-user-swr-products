import { useAppDispatch } from '@/app/hook';
import { dangKy } from '@/features/user.slice';
import { useRouter } from 'next/router';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Users } from './../models/user';

interface Props { }

const signup = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm<Users>();

  const onSubmit = (data: Users) => {
    dispatch(dangKy(data))
    router.push("/signin")
    alert("dang ky thanh cong")
  }
  return (
    <div className='container'>
      <h1>Dang ky</h1>
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
  )
}

export default signup