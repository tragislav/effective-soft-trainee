import { IProduct } from '@types';
import { api } from '..';

export function getAllProducts() {
  return api.get<IProduct[], IProduct[]>('/products');
}

export function getProductById(id: string) {
  return api.get<IProduct, IProduct>(`/products/${id}`);
}

export function getCategories() {
  return api.get<string[], string[]>('/products/categories');
}

export function getProductsByCategory(category: string) {
  return api.get<IProduct[], IProduct[]>(`/products/category/${category}`);
}
