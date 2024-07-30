export type Attributes = {
  title: string;
  company: string;
  description: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  category: string;
  image: string;
  price: string;
  shipping: boolean;
  colors: string[];
};

export type Product = {
  id: number;
  attributes: Attributes;
};

export type Pagination = {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
};

export type Meta = {
  categories?: string[];
  companies?: string[];
  pagination: Pagination;
};

export type Params = {
  search?: string;
  category?: string;
  company?: string;
  order?: string;
  price?: string;
  shipping?: string;
  page?: string;
};

export type OrderParams = {
  page?: string;
};

export type CartProduct = {
  amount: number;
  cartID: string;
  productID: number;
  image: string;
  title: string;
  price: string;
  company: string;
  pickedColor: string;
};

export type HigherProduct = {
  product: CartProduct;
};

export type CartState = {
  cartItems: CartProduct[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};

export type Themes = {
  winter: 'winter';
  dracula: 'dracula';
};
export type Theme = 'winter' | 'dracula';

export type UserInfo = {
  username: string | undefined;
  id?: number;
  email?: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: string;
  updatedAt?: string;
  token?: string;
};

export type User = {
  user: UserInfo | null;
  theme: Theme;
};

export type UserToken = {
  jwt: string;
  user: UserInfo;
};
