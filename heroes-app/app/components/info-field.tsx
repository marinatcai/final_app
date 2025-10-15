interface InfoItemProps {
    label:string;
}

export default function InfoItem({label}: InfoItemProps) {

    return (
        <>
            <div className="grid grid-cols-5 gap-1 mb-3">
                <label className="text-center text-2xl text-white font-outline-2 alfa-slab p-2">{label}</label>
                <input name="name" type="textarea" className="h-11 w-125 border-2 border-solid border-black rounded-xl drop-shadow-black drop-shadow-1xl"></input>
            </div>
        </>
    );
}