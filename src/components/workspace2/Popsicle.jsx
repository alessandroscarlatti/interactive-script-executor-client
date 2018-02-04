// this file wil need to wrap the contents of the popsicle
import React from 'react'

require("./popsicle.scss");

const st = {
    popsicle: {
        border: "2px solid rgb(200, 200, 200)",
        boxSizing: "border-box",
        borderRadius: 2,
        // boxShadow: "0px 0px 2px 2px rgb(242, 242, 242)",
        padding: 0,
    },

    iconWrapper: {
        display: "inline-block",
        verticalAlign: "top",
        width: 70,
        height: 70,
        padding: 10,
        borderRight: "2px solid rgb(200, 200, 200)",
        boxSizing: "border-box",
        overflow: "hidden",
        boxShadow: "0px 0px 2px 2px rgb(242, 242, 242) inset",
    },

    icon: {
        height: "100%",
        width: "100%",
    },

    stickWrapper: {
        display: "inline-block",
        width: "calc(100% - 70px)",
        verticalAlign: "top",
        boxShadow: "0px 0px 2px 2px rgb(242, 242, 242) inset",
    },

    stick: {
        display: "inline-block",
        verticalAlign: "top",
        margin: 0,
        height: 70,
        padding: 10,
        boxSizing: "border-box",
        overflow: "hidden",
    },

    defaultIcon: {
        height: "100%",
        width: "100%",
    },

    defaultStick: {
        display: "inline-block",
    },

    noVars: {
        border: "2px solid rgb(200, 200, 200)",
        borderTop: "none",
        padding: 10,
        color: "rgb(200, 200, 200)",
        marginLeft: 70,
    },

    toolbar: {
        border: "2px solid rgb(200, 200, 200)",
        borderTop: "none",
        padding: 10,
        marginLeft: 70,
    },
};

export default class Popsicle extends React.Component {

    constructor(props) {
        super(props);

        this.tProps = {};

        this.translateProps(props);

        this.translateProps = this.translateProps.bind(this);
        this.PopsicleStick = PopsicleStick.bind(this);
        this.PopsicleVars = SimpleVars.bind(this);
        this.Toolbar = Toolbar.bind(this);
    }

    translateProps(props) {
        this.tProps.icon = props.icon != null ? props.icon : <SimpleIcon />;
        this.tProps.stick = props.stick != null ? props.stick : <DefaultStick />;
    }

    componentWillReceiveProps(props) {
        this.props = props;
        this.translateProps(props);
    }

    render() {
        return (
            <div>
                <this.PopsicleStick />
                <this.Toolbar />
                <this.PopsicleVars />
            </div>
        )
    }
}

const PopsicleStick = function() {
    return (
        <div style={st.popsicle} className="popsicle">
            <div style={st.iconWrapper} className="icon">
                <div style={st.icon}>{this.tProps.icon}</div>
            </div>
            <div style={st.stickWrapper} className="stick">
                <div style={st.stick}>{this.tProps.stick}</div>
            </div>
        </div>)
};

const Toolbar = function () {
    return (
        <div style={st.toolbar}>
            [Toolbar...] [Toolbar...] [Toolbar...] [Toolbar...] [Toolbar...]
        </div>
    )
};

export const SimpleVars = function(props) {

    // wrap each key/value
    let kVs = [];

    if (props.vars != null) props.vars.forEach((v) => {
        kVs.push(
            <div key={v.name}>
                <div>
                    {v.name}
                </div>
                <div>
                    {v.default}
                </div>
            </div>)
    });

    if (kVs.length === 0) {
        kVs.push(
            <div key={"noVars"} style={st.noVars}>No Variables for this Component</div>
        )
    }

    return <div>{kVs}</div>
};

export const SimpleIcon = (props) => {
    return <img
        src={props.icon != null ? props.icon : "/images/question.png"}
        style={st.defaultIcon}/>
};

const DefaultStick = () => (
    <div style={st.defaultStick}>[Default Div]</div>
);