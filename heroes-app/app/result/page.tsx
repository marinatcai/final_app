"use client"

import ResultItem from "../components/result-item";

export default function ResultPage() {
    const items =[
      {name: "Justice League", image:"justice_league.png"},
      {name: "Birds of Prey", image:"bird_of_prey.png"},
      {name: "Suicide Squad", image:"blade.png"},
    ]
  return (
    <>
        <div className="flex flex-col justify-items items-center mt-20">  
            <h2 className="p-3 text-5xl text-white font-outline-2 alfa-slab">Result.</h2>
            <div className="bg-white h-200 w-200 rounded-2xl drop-shadow-black drop-shadow-2xl mb-10">
                <div className="flex justify-items justify-center mt-20">
                    <div className="flex justify-items">  
                    <div className="flex flex-col justify-around mr-3">
                        <h3 className="text-center text-black text-3xl alfa-slab ">40</h3>
                        <h3 className="text-center text-black text-3xl alfa-slab ">30</h3>
                        <h3 className="text-center text-black text-3xl alfa-slab ">20</h3>
                        <h3 className="text-center text-black text-3xl alfa-slab ">10</h3>
                    </div>
                    <div className="flex flex-col justify-around">
                        <div className="h-0.5 w-2 bg-black"></div>
                        <div className="h-0.5 w-2 bg-black"></div>
                        <div className="h-0.5 w-2 bg-black"></div>
                        <div className="h-0.5 w-2 bg-black"></div>
                    </div>
                    <div className="h-120 w-0.5 bg-black"></div> 
                    <div className="flex flex-col justify-around">
                        <div className="h-0.5 w-3 bg-black"></div>
                        <div className="h-0.5 w-3 bg-black"></div>
                        <div className="h-0.5 w-3 bg-black"></div>
                        <div className="h-0.5 w-3 bg-black"></div>
                    </div>
                </div> 
                    <div className="h-75 w-25 bg-[#6192D3] rounded-[10px_10px_0px_0px] ml-6 mr-28 mt-45">
                        <h3 className="text-center text-white text-2xl alfa-slab pt-5">30</h3>
                    </div>
                    <div className="h-90 w-25 bg-[#E85C6A] rounded-[10px_10px_0px_0px] mr-30 mt-30">
                        <h3 className="text-center text-white text-2xl alfa-slab pt-5">35</h3>
                    </div>
                    <div className="h-105 w-25 bg-[#BA67C5] rounded-[10px_10px_0px_0px] mr-20 mt-15">
                        <h3 className="text-center text-white text-2xl alfa-slab pt-5">39</h3>
                    </div>
                </div>
                <div className="h-0.5 w-150 bg-black ml-26.5 mb-10"></div>
                <div className="flex justify-evenly mx-10 mb-5">
                    {items.map((item, index) => (
                    <ResultItem image={item.image} title={item.name} key={index} />
                    ))}
                </div>
            </div>
        </div>
    </>

  );
}