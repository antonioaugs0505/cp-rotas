import Image from "next/image";
import Link from "next/link";

export default function Camisa() {
  return (
    
        
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis deleniti suscipit laudantium perspiciatis, minus provident, laboriosam eius repudiandae incidunt itaque eum temporibus, illum tempore reprehenderit voluptate voluptates quas. Architecto, ea.</p>
            <p> <Link href="/">Voltar...</Link> </p>
            <figure>
              <Image src="/img/camisa.jpg" alt="Calça" width={307} height={320}/>
            </figure>
        </div>
    
  )
}