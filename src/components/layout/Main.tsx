import { PropsWithChildren } from "react"

export const Main = ({children}: PropsWithChildren<any>) => {
  return <div className="bg-white  min-h-screen">
  {children}
  </div>
}