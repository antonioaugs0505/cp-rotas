import Link from 'next/link';

const Page = () => {
  return (
    <div>
    <h1>Home</h1>
    <h3>Seja bem-vindo à nossa loja, o seu destino para moda e estilo excepcionais! Na nossa loja, combinamos qualidade, elegância e versatilidade para oferecer a você uma experiência de compras excepcional. De camisas a calças, sapatos a bonés e óculos a acessórios, nossa seleção de produtos de alta qualidade é projetada para atender a todas as suas necessidades. Valorizamos a moda, o conforto e a satisfação do cliente. Com preços competitivos e atendimento excepcional, estamos comprometidos em tornar sua experiência de compra inesquecível. Visite-nos e descubra o que há de mais recente em estilo e elegância</h3>
    <Link href="/produtos/camisa">Camisa</Link>
    <Link href="/produtos/calca">Calça</Link>
    <Link href="/produtos/sapato">Sapato</Link>
    <Link href="/produtos/bone">Boné</Link>
    <Link href="/produtos/oculos">Óculos</Link>
  </div>
);

};

export default Page;