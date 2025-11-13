/* eslint-disable @next/next/no-img-element */
interface ResultItemProps {
    title:string;
    image:string
}

export default function VoteItem({title, image}: ResultItemProps) {

    return (
        <>
        <div className="flex flex-col justify-items items-center">
            <img className="h-32 w-32 p-3" src={image} alt="Image_of_hero">
            </img>
            <label className="text-center text-2xl text-white font-outline-2 alfa-slab p-1">{title}</label>
        </div>
        </>
    );
}