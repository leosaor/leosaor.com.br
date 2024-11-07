import Image from 'next/image';
import Link from 'next/link';
import './404.css';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-green-400 font-mono text-center px-4 relative">
            <Image 
                src="/img/mask.png"
                alt="Mr. Robot Mask"
                width={150}
                height={150}
                className="mask mb-8 mt-[-12rem] sm:mb-16 sm:mt-[-20rem]"
                priority
            />

            <h1 className="text-6xl font-bold text-red-600 mt-4 sm:text-8xl">404</h1>
            <p className="text-2xl mt-2 mb-4 typing-effect sm:text-3xl">
                Err0r 404: Page has been hacked.
            </p>

            <Link href="/" className="text-green-400 text-lg underline hover:text-red-500 transition-colors duration-300 mb-12 sm:mb-16">
                Voltar para a página inicial
            </Link>

            <p className="absolute bottom-4 text-lg text-red-500 fsociety-blink sm:text-xl">
                fsociety was here
            </p>
        </div>
    );
}
