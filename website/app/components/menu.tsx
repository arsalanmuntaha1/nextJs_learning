import React from 'react';
import Button from './button';
import PizzaCard from './pizzaCard';
import Image from 'next/image';

export default function Menu() {
    return (
        <div>
            <div className="pt-20">
                <h4 className="text-center text-text font-semibold">OUR MENU</h4>
                <h2 className="text-center pt-5 font-bold">DISCOVER OUR MENU</h2>
                <div className="flex justify-center gap-10 pt-7">
                    <Button name="Pizza" />
                    <Button name="Calzones" />
                    <Button name="Wraps" />
                    <Button name="Salads" />
                    <Button name="Drinks" />
                </div>

                <Image
                    src={'/img/recipe_card.png'}
                    alt={'title'}
                    width={248}
                    height={368}
                    className="w-[248px] h-[368px] object-cover"
                ></Image>

                <div className="w-[80%] mt-[4rem] mx-auto">
                    <PizzaCard title="Chipotle" image="/img/chipotle.png" reviews="6" price="$20" />
                </div>
            </div>
        </div>
    );
}
