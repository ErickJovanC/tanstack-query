import { useRandom } from "./hooks/useRandom"
import './App.css'

function App() {
  const {randomQuery: rq} = useRandom()

  return (
    <>
      <h1>Hello World!</h1>
      {rq.isLoading ? <h1>Cargando ...</h1> : <h1>Número: {rq.data}</h1>}
      <div>{JSON.stringify(rq.error)}</div>

      {/* El botón ejecuta la función refetch para hacer una nueva petición */}
      <button onClick={() => rq.refetch()}>Nuevo número</button>
    </>
  )
}

export default App