import React from "react";

type HomeProps = {
    message: string;
}

class Home extends React.Component<HomeProps> {
    render() {
        return (
            <div>
                <p>{this.props.message}</p>
            </div>
        );
    }
}

export default Home;
