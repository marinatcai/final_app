interface VoteItemProps {
    title:string;
    image:string
}

export default function VoteItem({title, image}: VoteItemProps) {

    return (
        <>
        <div className="flex justify-center">
            <img src="" alt="">
            </img>
            <label></label>
            <input></input>
        </div>

        </>
    );
}