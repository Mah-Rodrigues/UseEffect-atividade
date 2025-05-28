import { useState, useEffect } from "react"

export function App() {
  return (
    <>
    <Header />

    <main>
      <Exemplo1/>
      <Exemplo2/>
    </main>
    </>
  )
}

export function Exemplo1() {

    const [numero, setNumero] = useState(0) 

    useEffect(() => {
      alert("O número mudou!")
    }, [numero])

    return (
            <section>

                <h1>useEffect</h1>

                <div>
                    <h2>Número: {numero}</h2>
                    <button onClick={() => setNumero(numero + 1)}>Aumentar</button>
                </div>
            </section>
    )
}