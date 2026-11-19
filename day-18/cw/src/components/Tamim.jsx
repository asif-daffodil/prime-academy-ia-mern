import { useEffect, useState } from "react";

const Tamim = () => {
    const [user, setUser] = useState()

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => setUser(data))
    }, [])


    return (
        <div>
            {user.map((u, i) => (
                <div key={i}>
                    {u.name}
                </div>
            ))}
        </div>
    );
};

export default Tamim;