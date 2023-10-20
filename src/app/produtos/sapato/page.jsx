import Image from "next/image";
import Link from "next/link";

export default function Sapato() {
  return (
    
        
        <div>
            <p>Dê um passo à frente com nossos sapatos elegantes e confortáveis. Feitos com materiais de alta qualidade, nossos sapatos combinam estilo e durabilidade. Desde elegantes sapatos formais até opções casuais, temos o par perfeito para qualquer ocasião.</p>
            <p> <Link href="/">Voltar...</Link> </p>
            <figure>
              <Image src="/img/tenis.jpg" alt="Sapato" width={307} height={320}/>
            </figure>
        </div>
    
  )
}