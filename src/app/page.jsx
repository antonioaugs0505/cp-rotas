import Image from 'next/image'
import styles from './page.module.css'
import Rodape from "@/components/Rodape/page.jsx"
import Cabecalho from "@/components/Cabecalho/page.jsx"

export default function Home() {
  return (
    <html lang="pt-br">
    <body>
      <Cabecalho/>
       
      <Rodape/>
    </body>
  </html>
  
  )
}
