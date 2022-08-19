import productsSlice from '@/features/products.slice';
import { Products } from '@/models/products';
import { useRouter } from 'next/router';
import React from 'react'
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';

interface Props { }

const add = () => {
  const router = useRouter();
  const { themSp, data, error } = productsSlice();
  const { register, handleSubmit, formState: { errors } } = useForm<Products>();
  const onSubmit = (data: Products) => {
    mutate(themSp(data))
    router.push("/products")
    alert("thêm thành công")
  }

  return <div>
    <div className='container'>
      <h2>Add Products</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" {...register("name", { required: true })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          {errors.name && <span>Không bỏ trống</span>}
        </div>

        <div className="mb-3">
          <label className="form-label">Img</label>
          <input type="text" {...register("img", { required: true })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          {errors.img && <span>Không bỏ trống</span>}
        </div>

        <div className="mb-3">
          <label className="form-label">price</label>
          <input type="number" {...register("price", { required: true })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          {errors.price && <span>Không bỏ trống</span>}
        </div>

        <div className="mb-3">
          <label className="form-label">Desc</label>
          <input type="text" {...register("description", { required: true })} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          {errors.description && <span>Không bỏ trống</span>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
}

export default add