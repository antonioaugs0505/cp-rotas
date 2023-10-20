import Image from "next/image";
import Link from "next/link";

export default function Bone() {
  return (
    
        
        <div>
            <p>Complete seu visual com nossos bonés modernos. Além de adicionar estilo, nossos bonés oferecem proteção contra o sol. Escolha entre uma variedade de designs e cores para combinar com seu estilo pessoal. Esteja na moda e protegido com nossos bonés.</p>
            <figure>
              <Image src="/img/bone.jpg" alt="Bone" width={307} height={320}/>
            </figure>
            <p> <Link href="/">Voltar...</Link> </p>
            
        </div>
    
  )
}