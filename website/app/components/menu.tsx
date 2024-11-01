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

                <div className="flex w-[80%] mt-[4rem] mx-auto">
                    <PizzaCard
                        title="Chipotle"
                        image="/img/chipotle.png"
                        details="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        rating={5}
                        price="$20"
                    />
                    <PizzaCard
                        title="Ranch"
                        image="/img/ranch.png"
                        details="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        rating={4}
                        price="$13"
                    />
                    <PizzaCard
                        title="Pepperoni"
                        image="/img/peppronei.png"
                        details="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        rating={4}
                        price="$15"
                    />
                    <PizzaCard
                        title="Veggie Lover"
                        image="/img/veggie.png"
                        details="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        rating={2}
                        price="$7"
                    />
                    <PizzaCard
                        title="Chicken Tikka"
                        image="/img/chickentikka.png"
                        details="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                        rating={3}
                        price="$9.99"
                    />
                </div>
            </div>
        </div>
    );
}
