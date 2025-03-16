import { useRoutes } from "react-router-dom"
import { AuthRoutes } from "./AppRoutes"

const Routes = () => useRoutes([...AuthRoutes])

export default Routes
