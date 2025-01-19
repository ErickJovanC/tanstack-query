import { useQuery } from '@tanstack/react-query';

const getCryptoNumber = async (): Promise<number> => {
    const resp = await fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')
      .then((resp) => resp.json())
  
    return Number(resp)
}
  
export const useRandom = () => {
    const randomQuery = useQuery({
        queryKey: ['randomNumber'], // Key para guardar cache y eviar peticiones duplicadas
        queryFn: getCryptoNumber, // (params) => getCryptoNumber(params) // Función que se ejecuta para obtener los datos
        refetchOnWindowFocus: false // No se ejecuta la petición al enfocar la ventana
      })
      
  return {randomQuery}
}