import Image from "next/image";
import Link from "next/link";
import page from "../../../../public/css/page.css"

export default function Calca() {
  return (
    
        
        <div className="page">
          <h1>Calça</h1>
            <h3>Descubra o conforto duradouro com nossas calças de alta qualidade. Com cortes modernos e tecidos resistentes, nossas calças são ideais para o dia a dia. Disponíveis em diversas cores e estilos, você pode criar looks versáteis para qualquer ocasião.</h3>
            
            <figure>
              <Image src="/img/calca.jpg" alt="Calça" width={307} height={320}/>
            </figure>
            
            <p> <Link href="/">Voltar...</Link> </p>
            
        </div>
    
  )
}