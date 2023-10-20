import Image from "next/image";
import Link from "next/link";
import page from "../../../../public/css/page.css"

export default function Camisa() {
  return (
    
        
        <div className="page">
          <h1>Camisa</h1>
            <h3>Apaixone-se pelo espírito vibrante da Portuguesa com nossa camiseta verde e vermelha. Mostre seu apoio ao time com este visual icônico. Com cores vibrantes e um design de qualidade, nossa camiseta é perfeita para qualquer torcedor apaixonado. Viva a paixão pelo futebol com estilo e elegância.</h3>
            
            <figure>
              <Image src="/img/camisa.jpg" alt="camisa" width={307} height={320}/>
            </figure>
            
            <p> <Link href="/">Voltar...</Link> </p>
            
        </div>
    
  )
}