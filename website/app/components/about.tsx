import Image from 'next/image';
import React from 'react';

function About() {
    return (
        <div className="pt-24 pb-24 ">
            <div className="bg-[#faf8f8] border-4 rounded-3xl py-8 px-5 m-20 flex flex-wrap justify-center gap-20 text-center">
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-bold text-text">About Us</h1>
                    <p className="pt-5 max-w-[600px]">
                        Welcome to Saucy Sal’s Pizza Shop, where pizza isn’t just a meal—it’s an
                        experience! Founded by Sal, a passionate pizza-maker with a knack for
                        blending tradition and bold flavors, our shop brings the heart of Italian
                        pizza-making right into the neighborhood. At Saucy Sal’s, we believe in two
                        things: great pizza and even better company. Our pizzas are crafted from a
                        secret family recipe, with homemade sauces, fresh ingredients, and a touch
                        of “saucy magic” that keeps our customers coming back. From classic
                        favorites to unique creations like our “Pepperoni” and “Chipotly,” every pie
                        is made with love, laughter, and a lot of flavor. We’re more than just a
                        pizza place—we’re a part of the community. Join us every Friday night for
                        our “Open Mic Pizza,” where local talent and tasty pizza come together for a
                        night of fun. Whether you’re here for a quick slice or a family feast, Saucy
                        Sal’s is where good friends and great pizza meet. Come taste the magic for
                        yourself. We can’t wait to serve you!
                    </p>
                </div>
                <div className=" flex justify-center">
                    <Image
                        src={'/img/about.webp'}
                        alt="about"
                        width={400}
                        height={300}
                        className="rounded-3xl"
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
