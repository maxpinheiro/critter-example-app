import React from "react";

type HomeProps = {
    message: string;
}

const Home: React.FC<HomeProps> = ({ message }) => {
    return (
        <div>
            <p>{message}</p>
        </div>
    );
}

export default Home;
