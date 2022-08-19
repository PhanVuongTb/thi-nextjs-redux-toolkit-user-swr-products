import { Products } from "@/models/products";
import instance from "./instance";

export const them = (product: Products) => {
  const url = `/products`;
  return instance.post(url, product)
}

export const sua = (product: Products) => {
  const url = `/products/${product.id}`;
  return instance.put(url, product)
}

export const xoa = (id: any) => {
  const url = `/products/${id}`;
  return instance.delete(url)
}

export const read = (id: any) => {
  const url = `/products/${id}`;
  return instance.get(url)
}