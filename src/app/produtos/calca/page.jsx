import Image from "next/image";
import Link from "next/link";

export default function Calca() {
  return (
    
        
        <div>
            <p>Descubra o conforto duradouro com nossas calças de alta qualidade. Com cortes modernos e tecidos resistentes, nossas calças são ideais para o dia a dia. Disponíveis em diversas cores e estilos, você pode criar looks versáteis para qualquer ocasião.</p>
            
            <figure>
              <Image src="/img/calca.jpg" alt="Calça" width={307} height={320}/>
            </figure>
            
            <p> <Link href="/">Voltar...</Link> </p>
            
        </div>
    
  )
}