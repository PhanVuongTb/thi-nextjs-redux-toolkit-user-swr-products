import productsSlice from '@/features/products.slice';
import { Products } from '@/models/products';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { mutate } from 'swr';
import { read } from '../../../api/products'

interface Props { }

const edit = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id)
  const { suaSp, data, error } = productsSlice();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<Products>();

  useEffect(() => {
    const getProducts = async () => {
      const product = await read(id);
      console.log(product)
      reset(product)
    }
    getProducts();
  }, [])

  const onSubmit = (data: Products) => {
    mutate(suaSp(data))
    router.push("/products")
    alert("sua thành công")
  }
  return <div>
    <div className='container'>
      <h2>Add Products</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" {...register("name", { required: true, minLength: 5 })} />
          {errors.name && <div className="form-text">Khong de trong, nhap tren 5 ky tu</div>}
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

export default edit