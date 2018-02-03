import React from 'react'
import Popsicle from "./Popsicle";

const st = {
    popsicles: {
        width: "50%",
        marginLeft: 100,
        marginTop: 100,
    }
};

export default class Workspace extends React.Component {
    render() {
        return (
            <div >
                Workspace 2
                <div style={st.popsicles}>
                    <Popsicle />
                </div>
            </div>
        )
    }
}