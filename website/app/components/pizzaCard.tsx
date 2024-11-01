import { ShoppingBag, Star } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
type Props = {
    title: string;
    details: string;
    image: string;
    rating: number;
    price: string;
};
export default function PizzaCard({ title, image, details, rating, price }: Props) {
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
                <h2 className="text-2xl font-bold text-center">{title}</h2>
                <div className="flex">
                    {Array.from({ length: 6 }, (_, i) => (
                        <Star
                            key={i}
                            fill={rating > i ? '#f59e0b' : 'transparent'}
                            color="#f59e0b"
                        />
                    ))}
                    {/* <Star fill="#f59e0b" color="" />
                    <Star fill="#f59e0b" color="" />
                    <Star fill="#f59e0b" color="" />
                    <Star fill="#f59e0b" color="" />
                    <Star fill="#f59e0b" color="" /> */}
                </div>
                <p className="text-ellipsis text-sm">{details}</p>
            </div>
            <div className="flex justify-between px-2 pt-5 pb-1">
                <div className="text-green-600">{price}</div>
                <div>
                    <ShoppingBag className="cursor-pointer hover:text-amber-600" />
                </div>
            </div>
        </div>
    );
}
