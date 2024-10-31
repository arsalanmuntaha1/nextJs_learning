import { ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
type Props = {
    title: string;
    image: string;
    reviews: string;
    price: string;
};
export default function PizzaCard({ title, image, reviews, price }: Props) {
    return (
        <div className="w-[200px] mx-auto bg-white p-3 rounded-lg">
            <div className="">
                <Image
                    src={image}
                    alt={title}
                    width={200}
                    height={200}
                    className="w-[100%] h-[100%] object-cover"
                ></Image>
            </div>
            <div className="">
                <h2 className="">Chipotly</h2>
                <div>Stars</div>
                <p className="text-ellipsis">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className='flex justify-between px-2'>
                <div className='text-green-600'>$9.99</div>
                <div>
                    <ShoppingBag />
                </div>
            </div>
        </div>
    );
}
