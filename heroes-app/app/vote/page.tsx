"use client"

import VoteItem from "../components/vote-item";

export default function VotePage() {
    const items =[
      {name: "Magic", image:"poison.gif"},
      {name: "Poison", image:"poison.gif"},
      {name: "Health", image:"health-elexir.gif"},
    ]

    return (
        <>
            <h2>Vote.</h2>
                <div className="flex flex-col justify-items-center">   
                    <div className="bg-white h-100 w-150">
                        <h2>Which squad shall win?</h2>

                        <div className="grid grid-cols-3 gap-2 mb-10">
                            {items.map((item, index) => (
                                <VoteItem image={item.image} title={item.name} key={index} />
                            ))}
                        </div>
                    </div>
                </div>
        </>
    );
}