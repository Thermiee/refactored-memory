import { useRoutes } from "react-router-dom"
import { AuthRoutes, HomeRoutes } from "./AppRoutes"

const Routes = () => useRoutes([...AuthRoutes, HomeRoutes])

export default Routes
