import Image from 'next/image';
import Menu from './components/menu';
import Button from './components/button';
import About from './components/about';

export default function Home() {
    return (
        // HOME
        <div>
            <div className=" flex justify-between bg-[url('/img/bg.jpg')] h-[650px] bg-no-repeat bg-cover rounded-b-[50px]">
                <div className="font-bold text-white pt-36 w-[50%] pl-12 translate-x-6">
                    <p className="font-black text-4xl text-text">
                        "Get ready to fall in love, one slice at a time—because at <span className='text-white'>Saucy Sal’s</span>,
                        every pizza is a masterpiece made just for you!"
                    </p>
                    <p className='font-normal pt-5 pb-12 text-wrap pl-4'>
                        At Saucy Sal's, we believe that every great pizza starts with the perfect
                        crust, fresh ingredients, and a whole lot of love. Whether you're craving a
                        classic margherita, a hearty meat lover's slice, or something with a modern
                        twist, we’ve got you covered.
                    </p>
                <Button name='Order Now' />
                </div>
                <div className='transition translate-y-6'>
                    <Image src={'/img/Pizza.png'} width={400} height={400} alt="Pizza"></Image>
                </div>
            </div>
            <Menu />
            <About />
        </div>
    );
}
