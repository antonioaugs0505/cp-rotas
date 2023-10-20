import Link from 'next/link';
import Image from "next/image";

const Page = () => {
  return (
    <div className='home'>
    <h1>Home</h1>
    <h3>Descubra a moda com estilo em nossa loja! Oferecemos roupas, calçados e acessórios elegantes que combinam com seu estilo pessoal. Qualidade e conforto se unem em nossa seleção. Seja na moda, visite-nos e encontre as últimas tendências que farão você se destacar.</h3>

<div className='produtos'>

   

    <Link className='link' href="/produtos/calca">
    <Image src="/img/icon/icon-calca.png" alt="calca" width={100} height={100}/> Calça
    </Link>

    <Link className='link' href="/produtos/camisa">
    <Image  src="/img/icon/icon-camisa.png" alt="calca" width={100} height={100}/> Camisa
    </Link>


    <Link className='link' href="/produtos/sapato">
    <Image src="/img/icon/icon-tenis.png" alt="camisa" width={100} height={100}/> Sapato
    </Link>

    <Link className='link' href="/produtos/bone">
    <Image src="/img/icon/icon-bone.png" alt="boné" width={100} height={100}/> Boné
    </Link>

    <Link className='link' href="/produtos/oculos">
    <Image src="/img/icon/icon-oculos.png" alt="oculos" width={100} height={100}/> Óculos
    </Link>
</div>

  </div>
);

};

export default Page;