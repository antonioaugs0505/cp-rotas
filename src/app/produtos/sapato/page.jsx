import Image from "next/image";
import Link from "next/link";
import page from "../../../../public/css/page.css"

export default function Sapato() {
  return (
    
        
        <div className="page">
            <h1>Tênis</h1>
            <h3>Dê um passo à frente com nossos sapatos elegantes e confortáveis. Feitos com materiais de alta qualidade, nossos sapatos combinam estilo e durabilidade. Desde elegantes sapatos formais até opções casuais, temos o par perfeito para qualquer ocasião.</h3>
            
            <figure>
              <Image src="/img/tenis.jpg" alt="Sapato" width={307} height={320}/>
            </figure>

            <p> <Link href="/">Voltar...</Link> </p>
            
        </div>
    
  )
}