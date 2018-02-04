import React from 'react'
import Popsicle, {SimpleIcon} from "./Popsicle";

const st = {
    popsicles: {
        width: "50%",
        marginLeft: 100,
        marginTop: 100,
    },

    popsicle: {
        marginBottom: 10,
    },
};

export default class Workspace extends React.Component {
    render() {
        return (
            <div >
                Workspace 2
                <div style={st.popsicles}>
                    <div style={st.popsicle}><Popsicle icon={<SimpleIcon icon="/images/rabbit-queue.png" />} /></div>
                    <div style={st.popsicle}><Popsicle /></div>
                    <div style={st.popsicle}><Popsicle /></div>
                </div>
            </div>
        )
    }
}