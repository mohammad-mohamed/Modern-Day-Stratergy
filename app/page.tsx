import { Navigation } from '../components/navbar';
import Image from 'next/image';

export default function Page() {
  return (
    <>
      <Navigation />
      <div className="relative w-full">
        {/* Add padding to make space for the navbar */}
        <main className="w-full pt-36"> {/* Increased padding to pt-36 for more space */}
          <div className="max-w-4xl mx-auto px-4">
            {/* <h1 className="text-4xl font-bold text-center">Welcome to nVission</h1>
            <p className="text-center mt-4">Your one-stop solution for innovation.</p>
            <p className="text-center mt-4">'</p> */}
          </div>
        </main>
        <div className="flex flex-col items-center justify-center text-center min-h-screen px-4 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="text-6xl md:text-8xl font-bold">
              <span className="block">HIGH</span>
              <span className="block">DIGITAL</span>
            </div>
            <div className="relative">
              <Image
                alt="Person working on a laptop"
                className="w-64 h-auto object-cover object-bottom"
                height={400}
                src="https://storage.googleapis.com/a1aa/image/QlF_IvUCVK9P9smVe08BR29_Vm1R6g6Ol9P8aRCIz1Y.jpg"
                width={300}
              />
            </div>
            <div className="text-6xl md:text-8xl font-bold">
              <span className="block">QUALITY</span>
              <span className="block">SERVICES</span>
            </div>
          </div>
          <p className="mt-8 text-lg md:text-xl max-w-2xl">
            Proudly a 5-star rated digital consultancy. With offices in South Africa and the Netherlands, we service clients globally.
          </p>
        </div>
      </div>
    </>
  );
}
