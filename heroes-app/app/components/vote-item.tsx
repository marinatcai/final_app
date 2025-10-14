/* eslint-disable @next/next/no-img-element */
interface VoteItemProps {
    title:string;
    image:string
}

export default function VoteItem({title, image}: VoteItemProps) {

    return (
        <>
        <div className="flex flex-col justify-items items-center">
            <img className="h-32 w-32 p-3" src={image} alt="Image_of_hero">
            </img>
            <label className="text-center text-2xl text-white font-outline-2 alfa-slab p-1">{title}</label>
            <input name="hero" type="radio" className="h-5 w-5 cursor-pointer rounded-full" id={title}></input>
        </div>
        </>
    );
}