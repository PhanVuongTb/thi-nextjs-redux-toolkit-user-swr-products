import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import Link from 'next/link';

interface Props { }

const Navbar = () => {
  const { handleSubmit } = useForm();
  const router = useRouter();
  const onSubmit = () => {
    localStorage.clear();
    window.location.reload()
    router.push("/");
  }
  return <div className='container'>
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/"><a className="nav-link active" aria-current="page" >Home</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/products"><a className="nav-link active" aria-current="page" >products</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/signin"><a className="nav-link active" aria-current="page" >signin</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/signup"><a className="nav-link active" aria-current="page" >signup</a></Link>
            </li>
            <li className="nav-item">
              <Link href=""><button className="btn btn-primary" onClick={onSubmit}>Logout</button></Link>

            </li>
          </ul>
        </div>
      </div>
    </nav>

  </div>
}

export default Navbar