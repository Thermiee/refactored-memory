import { Outlet } from "react-router-dom"
import { AuthBg } from "../../assets"


const AuthLayout = () => {



  return (
    <div className="fixed grid w-screen  h-screen p-3 rounded-lg md:grid-cols-2">
      <div
        className="relative hidden rounded-tl-lg rounded-bl-lg md:flex md:items-center md:justify-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.74), rgba(0, 0, 0, 0.74)), url(${AuthBg}) `,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}

      >
        <div className="relative inset-0 max-w-xl text-white p-9">
          <h1 className="text-4xl font-bold leading-[55px]">
          Streamlining customer relationships for better engagement.
          </h1>
          <p className="text-base max-w-md pr-8 mt-3">
          data-driven decisions, enhance efficiency, and <br />
          drive long-term growth
          </p>
        </div>
      </div>
      <div className="flex flex-col p-9 justify-center place-self-center overflow-y-auto overflow-x-hidden">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
