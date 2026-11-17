
const Header = ({ name, city }) => {
    const myStyle = {
        color: "red",
        fontStyle: "italic"
    }

    return (
        <div className="flex gap-4">
            Header component
            <p style={{color: "blue", backgroundColor: "yellow", width: "max-content"}} >{name}</p>
            <p style={myStyle}>{city}</p>
        </div>
    );
};

export default Header