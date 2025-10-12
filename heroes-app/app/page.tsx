"use client";

export default function Home() {
  return (
    <>
    <h2 className="text-center text-5xl text-white font-outline-2 p-5 m-10 alfa-slab">Heroes.</h2>
    <div className="text-left text-4xl text-white font-outline-2 p-5 m-10 alfa-slab border-2 rounded-[0px_50px_50px_50px] border-solid"> Your heroes.</div>
    <div className="text-right text-4xl text-white font-outline-2 p-5 m-10 alfa-slab border-2 rounded-[50px_0px_50px_50px] border-solid"> Your choice.</div>
    <div className="flex justify-between items-center">
      <div className=" bg-white rounded-[0px_20px_20px_0px] border-solid border-black border-2">
        <h2 className="text-6xl text-[#6192D3] p-3 m-5">Jusctice League.</h2>
        <p className="text-xl text-[#474747] p-5 m-5">The team of heroes consists of the strongest DC superheroes who only come together when there is a truly major threat to fight.</p>
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
    </>
  );
}