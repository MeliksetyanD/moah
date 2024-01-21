export const getAll = async (limit) => {
  const response = await fetch(
    `https://fakestoreapi.com/products?limit=${limit}`
  )
    .then((res) => res.json())
    .then((json) => json)

  return response
}

export const getOne = async (id) => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    .then((res) => res.json())
    .then((json) => json)

  return response
}
export const getCategories = async () => {
  const response = await fetch(`https://api.escuelajs.co/api/v1/categories`)
    .then((res) => res.json())
    .then((json) => json)

  return response
}
export const getSingleCategoriesProducts = async (id = 1) => {
  console.log(id)
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${id}/products`
  )
    .then((res) => res.json())
    .then((json) => json)

  return response
}
export const getSingleCategoriesProduct = async (id) => {
  const response = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${id}`
  )
    .then((res) => res.json())
    .then((json) => json)

  return response
}
