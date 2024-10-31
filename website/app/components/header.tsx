import { Phone, ShoppingCart } from 'lucide-react';
import React from 'react';

export default function Header() {
    return (
        <div className="bg-[#2d1715] text-white pb-2 flex justify-center">
            <div className="container px-5 flex flex-wrap justify-between mt-2">
                <div className="font-mono text-text font-black text-2xl">
                    Saucy Sal's
                </div>
                <div>
                    <ul className="flex  gap-10 pt-2 list-none hover:cursor-pointer">
                        <li>
                            <a href="/"></a>Home
                        </li>
                        <li>
                            <a href="/"></a>About
                        </li>
                        <li>
                            <a href="/"></a>Menu
                        </li>
                        <li>
                            <a href="/"></a>Shop
                        </li>
                        <li>
                            <a href="/"></a>Blog
                        </li>
                    </ul>
                </div>
                <div className="flex gap-4">
                    <a href="tel" className="flex pt-2">
                        {' '}
                        <Phone className="size-6 pt-1" /> : +923002555032
                    </a>
                    <button className="border-2 p-2 rounded-full ">
                        <ShoppingCart />
                    </button>
                </div>
            </div>
        </div>
    );
}
