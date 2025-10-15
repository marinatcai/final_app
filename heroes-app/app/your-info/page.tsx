"use client"

import InfoItem from "../components/info-field";

export default function YourInfoPage() {

    const items =[
      {info: "Name"},
      {info: "E-Mail"},
    ]


return (
    <>
        <div className="flex flex-col justify-items items-center m-10">
            <h2 className="p-3 text-5xl text-white font-outline-2 alfa-slab m-10">Your info.</h2>
            <div className="bg-white h-80 w-200 rounded-3xl drop-shadow-black drop-shadow-2xl">
                <h2 className="text-4xl text-white font-outline-2 alfa-slab mt-8 ml-8">Your Squad: Justice League</h2>
                <div className="flex flex-col justify-items items-start mt-5">
                    {items.map((item, index) => (
                        <InfoItem label={item.info} key={index} />
                        ))}
                </div>
                <div className="flex ">
                    <input type="checkbox" className="h-8 w-8  border-black border-2 rounded-2xl ml-15 drop-shadow-gray-600 drop-shadow-sm"></input>
                    <label className="text-center text-base text-black alfa-slab p-2">I have read and understand the rules.</label>
                </div>
                
            </div> 
        </div>
    </>

);

}