import { Link } from "react-router-dom"


export const AllRoutes = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/men">Men</Link>
      <Link to="/women">Women</Link>
      <Link to="/helmet">Helmet</Link>
      <Link to="/signup">Signup</Link>
    </div>
  )
}
