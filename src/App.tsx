import { useQuery } from '@tanstack/react-query'
import './App.css'

const getCryptoNumber = async (): Promise<number> => {
  const resp = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
    .then((resp) => resp.json())

    return Number(resp)
}

// Fucnión Pricipal
function App() {
  const {isLoading, data: number, error, refetch} = useQuery({
    queryKey: ['randomNumber'], // Key para guardar cache y eviar peticiones duplicadas
    queryFn: getCryptoNumber // (params) => getCryptoNumber(params) // Función que se ejecuta para obtener los datos
  })

  return (
    <>
      <h1>Hello World!</h1>
      {isLoading ? <h1>Cargando ...</h1> : <h1>Número: {number}</h1>}
      <div>{JSON.stringify(error)}</div>

      {/* El botón ejecuta la función refetch para hacer una nueva petición */}
      <button onClick={() => refetch()}>Nuevo número</button>
    </>
  )
}

export default App