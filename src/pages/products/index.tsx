import productsSlice from '@/features/products.slice'
import Link from 'next/link';
import React from 'react'

interface Props { }

const index = () => {
  const { data, xoaSp, mutate } = productsSlice();
  const onRemove = (id: any) => {
    const confirm = window.confirm("bạn có muốn xáo không ??")
    if (confirm) {
      mutate(xoaSp(id))
      alert("XÓA thành công !!")
    }
  }
  return <div className='container'>
    <div>
      <h2>List Products</h2>
      <Link href={`/products/add`}>
        <button>add</button>
      </Link>
      <table className="table">

        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">name</th>
            <th scope="col">img</th>
            <th scope="col">price</th>
            <th scope="col">desc</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td><img src={item.img} alt="" width="100px" /></td>
                <td>{item.price}</td>
                <td>{item.description}</td>
                <td>
                  <Link href={`/products/edit/${item.id}`}>
                    <button className="btn btn-success">Edit</button>
                  </Link>
                  <button className="btn btn-danger" onClick={() => onRemove(item.id)}>Remove</button>
                </td>
              </tr>
            )
          })}

        </tbody>
      </table>
    </div>
  </div>
}

export default index