import Link from 'next/link';

const Page = () => {
  return (
    <div>
    <h1>Página Principal</h1>
    <Link href="/produtos/camisa">Camisa</Link>
    <Link href="/produtos/calca">Calça</Link>
    <Link href="/produtos/sapato">Sapato</Link>
    <Link href="/produtos/bone">Boné</Link>
    <Link href="/produtos/oculos">Óculos</Link>
  </div>
);

};

export default Page;