"use client"

import Link from "next/link";
import VoteItem from "../components/vote-item";

export default function VotePage() {
    const items =[
      {name: "Jusctice League", image:"justice_league.png"},
      {name: "Birds of Prey", image:"bird_of_prey.png"},
      {name: "Suicide Squad", image:"blade.png"},
    ]

    function vote() {
        // here i want to return the choice and show it in console log

         // here i want link to next page your info
        <Link href="/your-info" >
        </Link>
    }

// set Vote title to the left

    return (
        <>
            <div className="flex flex-col justify-items items-center mt-20">  
                <h2 className="p-3 text-5xl text-white font-outline-2 alfa-slab">Vote.</h2>
                <div className="bg-white h-80 w-200 rounded-2xl drop-shadow-black drop-shadow-2xl mb-10">
                    <h2 className="text-center p-6 text-3xl text-white font-outline-2 alfa-slab">Which squad shall win?</h2>
                    <div className="flex justify-evenly mx-10 mb-5">
                        {items.map((item, index) => (
                            <VoteItem image={item.image} title={item.name} key={index} />
                        ))}
                    </div>
                </div>
                <button className=" bg-[#F86C6F]  h-12 w-48 text-white text-3xl font-outline-2 alfa-slab cursor-pointer rounded-xl border-3 border-white"
                onClick={vote}>
                Continue
                </button>
            </div>
        </>
    );
}