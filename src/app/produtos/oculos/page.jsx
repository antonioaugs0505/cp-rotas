import Image from "next/image";
import Link from "next/link";

export default function Oculos() {
  return (
    
        
        <div>
            <p>Veja o mundo com estilo usando nossos óculos de sol premium. Oferecendo proteção UV de qualidade e designs elegantes, nossos óculos são a escolha perfeita para qualquer clima ensolarado. Eleve seu visual e proteja seus olhos com nossos óculos sofisticados."
            </p>
            <p> <Link href="/">Voltar...</Link> </p>
            <figure>
              <Image src="/img/oculos.jpg" alt="Oculos" width={307} height={320}/>
            </figure>
        </div>
    
  )
}