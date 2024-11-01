import Image from 'next/image';
import React from 'react';

function About() {
    return (
        <div className="flex pt-24 gap-8 justify-center text-center">
            <div className='w-1/2'>
                <h1>About Us</h1>
                <p>
                    Welcome to Saucy Sal’s Pizza Shop, where pizza isn’t just a meal—it’s an
                    experience! Founded by Sal, a passionate pizza-maker with a knack for blending
                    tradition and bold flavors, our shop brings the heart of Italian pizza-making
                    right into the neighborhood. At Saucy Sal’s, we believe in two things: great
                    pizza and even better company. Our pizzas are crafted from a secret family
                    recipe, with homemade sauces, fresh ingredients, and a touch of “saucy magic”
                    that keeps our customers coming back. From classic favorites to unique creations
                    like our “Pepperoni” and “Chipotly,” every pie is made with love, laughter, and
                    a lot of flavor. We’re more than just a pizza place—we’re a part of the
                    community. Join us every Friday night for our “Open Mic Pizza,” where local
                    talent and tasty pizza come together for a night of fun. Whether you’re here for
                    a quick slice or a family feast, Saucy Sal’s is where good friends and great
                    pizza meet. Come taste the magic for yourself. We can’t wait to serve you!
                </p>
            </div>
            <div className='w-1/2'>
                <Image src={'/img/about.webp'} width={400} height={300} />
            </div>
        </div>
    );
}

export default About;
