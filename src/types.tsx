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
  categories: string[];
  companies: string[];
  pagination: Pagination;
};
