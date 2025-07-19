import { Suspense } from "react"
import Nav from "./component/Nav"
import MainRoutes from "./routes/MainRoutes"
import Loading from "./component/Loading"

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <Nav />
        <MainRoutes />

      </Suspense>
    </>
  )
}

export default App
