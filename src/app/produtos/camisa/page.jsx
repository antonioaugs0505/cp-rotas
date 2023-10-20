import Image from "next/image";
import Link from "next/link";

export default function Camisa() {
  return (
    
        
        <div>
            <p>Eleve seu estilo com nossas camisas versáteis. Seja para o trabalho ou lazer, nossas camisas oferecem elegância e conforto. Escolha entre uma variedade de cores e estampas para combinar com seu estilo único. Faça uma declaração de moda com nossas camisas de alta qualidade.</p>
            <figure>
              <Image src="/img/camisa.jpg" alt="Camisa" width={307} height={320}/>
            </figure>
            
            <p> <Link href="/">Voltar...</Link> </p>
            
        </div>
    
  )
}