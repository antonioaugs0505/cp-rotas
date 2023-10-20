import Image from "next/image";
import Link from "next/link";
import page from "../../../../public/css/page.css"

export default function Bone() {
  return (
    
        <div className="page">
          <h1>Boné</h1>
            <h3>Complete seu visual com nossos bonés modernos. Além de adicionar estilo, nossos bonés oferecem proteção contra o sol. Escolha entre uma variedade de designs e cores para combinar com seu estilo pessoal. Esteja na moda e protegido com nossos bonés.</h3>
            <figure>
              <Image src="/img/bone.jpg" alt="Bone" width={307} height={320}/>
            </figure>
            <p> <Link href="/">Voltar...</Link> </p>
            
        </div>
    
  )
}