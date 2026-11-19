import { useEffect, useState } from "react";

const Sakib = () => {
    const [num, setNum] = useState(0)

    useEffect(() => {
        console.log(num);
    }, [num])

    const handleIncrement = () => {
        setNum(num + 1)
    }

    const habdleDcrement = () => {
        setNum(num - 1)
    }

    return (
        <div className="flex gap-2 items-center">
            <button onClick={handleIncrement} className="border rounded w-6 h-6">+</button>
            {num}
            <button onClick={habdleDcrement} className="border rounded w-6 h-6">-</button>
        </div>
    );
};

export default Sakib;