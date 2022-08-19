import { Products } from '@/models/products';
import React from 'react';
import swr from "swr"
import { sua, them, xoa } from "../api/products"

type Props = {}

const productsSlice = (props: Props) => {
  const { mutate, data, error } = swr("/products")

  const themSp = async (item: Products) => {
    const product = await them(item);
    mutate([...data, product])
  }

  const suaSp = async (item: Products) => {
    const product = await sua(item);
    mutate([item => item.id === product.id ? product : item])
  }

  const xoaSp = async (item: Products) => {
    const product = await xoa(item);
    mutate([item => item.id !== product.id])
  }
  return { mutate, data, error, themSp, suaSp, xoaSp }
}

export default productsSlice