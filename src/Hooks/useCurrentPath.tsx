import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const useCurrentPath = () => {
  const location = useLocation()
  const [currentPath, setCurrentPath] = useState<string[]>([])

  useEffect(() => {
    const pathSegments = location.pathname.split("/")
    setCurrentPath(pathSegments)
  }, [location])

  return currentPath
}

export default useCurrentPath
