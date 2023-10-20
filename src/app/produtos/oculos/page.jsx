import Image from "next/image";
import Link from "next/link";
import page from "../../../../public/css/page.css"

export default function Oculos() {
  return (
    
        
        <div className="page">
          <h1>Óculos</h1>
            <h3>Veja o mundo com estilo usando nossos óculos de sol premium. Oferecendo proteção UV de qualidade e designs elegantes, nossos óculos são a escolha perfeita para qualquer clima ensolarado. Eleve seu visual e proteja seus olhos com nossos óculos sofisticados."
            </h3>

            <figure>
              <Image src="/img/oculos.jpg" alt="Oculos" width={307} height={320}/>
            </figure>
            <p> <Link href="/">Voltar...</Link> </p>
    
        </div>
    
  )
}