/* eslint-disable @next/next/no-img-element */
"use client";

export default function Home() {
  return (
    <>
    <h2 className="text-center text-5xl text-white font-outline-2 p-5 m-10 alfa-slab">Heroes.</h2>
    <div className="text-left text-4xl text-white font-outline-2 p-5 m-10 alfa-slab border-2 rounded-[0px_50px_50px_50px] border-solid"> Your heroes.</div>
    <div className="text-right text-4xl text-white font-outline-2 p-5 m-10 alfa-slab border-2 rounded-[50px_0px_50px_50px] border-solid"> Your choice.</div>

    <div className=" bg-white rounded-2xl drop-shadow-black drop-shadow-xl m-20">
      <h2 className="text-center text-3xl text-black alfa-slab pt-5">Which squard schall win?</h2>
      <div className="flex justify-center items-center pb-5 m-5">
        <img className="h-32 w-32 p-2 mx-5"
          src="justice_league.png" 
          alt="Justice_league"></img>
        <img className="h-32 w-32 p-2 mx-5"
          src="bird_of_prey.png" 
          alt="bird_of_prey"></img>
        <img className="h-32 w-32 p-2 mx-5"
          src="blade.png" 
          alt="blade"></img>
      </div>
    </div>

    <div className="flex justify-between items-center my-15">
      <div className=" bg-white rounded-[0px_20px_20px_0px] border-solid border-black border-2">
        <h2 className="text-6xl text-[#6192D3] p-3 m-5">Jusctice League.</h2>
        <p className=" text-left text-xl text-[#474747] p-5 m-5 mr-25">The team of heroes consists of the strongest DC superheroes who only come together when there is a truly major threat to fight.</p>
      </div>
      <div className="h-1 w-20 bg-white"></div>
      <div className="flex justify-center">
        <div className="bg-white rounded-2xl h-42 w-42 mr-5">
          <img className="h-42 w-42 center p-3"
          src="justice_league.png" 
          alt="Justice_league"></img>
        </div>
      </div>
    </div>

    <div className="flex justify-between items-center my-15">
      <div className="flex justify-center">
        <div className="bg-white rounded-2xl h-42 w-42 ml-5">
          <img className="h-42 w-42 center p-3"
          src="bird_of_prey.png" 
          alt="bird_of_prey"></img>
        </div>
      </div>
      <div className="h-1 w-20 bg-white"></div>
      <div className=" bg-white rounded-[20px_0px_0px_20px] border-solid border-black border-2">
        <h2 className="text-right text-6xl text-[#E85C6A] p-3 m-5">Birds of Prey.</h2>
        <p className="text-right text-xl text-[#474747] p-5 m-5 ml-25">The all-female team appeared alongside Harley Quinn in Birds of Prey: The Emancipation of Harley Quinn. Teaming up with the Joker&apos;s crazy ex-girlfriend, the squad took on the villain Black Mask.</p>
      </div>
    </div>
    </>
  );
}