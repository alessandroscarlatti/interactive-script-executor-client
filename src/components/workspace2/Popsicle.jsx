// this file wil need to wrap the contents of the popsicle
import React from 'react'

require("./popsicle.scss");

const st = {
    popsicle: {
        border: "2px solid rgb(200, 200, 200)",
        boxSizing: "border-box",
        borderRadius: "2px 2px 2px 2px",
        // boxShadow: "0px 0px 2px 2px rgb(242, 242, 242)",
        padding: 0,
    },

    popsicleWithVarsOpen: {
        borderRadius: "2px 2px 0px 2px",
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
        boxShadow: "0px 6px 11px -4px rgb(242, 242, 242) inset",
        borderRadius: "0px 0px 10px 0px",
        padding: 10,
        color: "rgb(200, 200, 200)",
        marginLeft: 70,
    },

    toolbar: {
        borderRight: "2px solid rgb(200, 200, 200)",
        boxShadow: "0px 6px 9px -8px rgb(242, 242, 242) inset",
        borderRadius: "10px 0px 0px 0px",
        borderTop: "none",
        padding: 10,
        marginLeft: 70,
        boxSizing: "border-box",
        backgroundColor: "rgba(12, 12, 64, 0.63)",
    },
};

export default class Popsicle extends React.Component {

    constructor(props) {
        super(props);

        this.bindings()

        this.tProps = {};

        this.translateProps(props);
        this.state = {
            varsOpen: false,
        };
    }

    bindings() {
        this.translateProps = this.translateProps.bind(this);

        this.PopsicleStick = PopsicleStick.bind(this);
        this.PopsicleVars = SimpleVars.bind(this);
        this.Toolbar = Toolbar.bind(this);
        this.DefaultStick = DefaultStick.bind(this);

        this.toggleOpenVars = this.toggleOpenVars.bind(this)
    }

    translateProps(props) {
        this.tProps.icon = props.icon != null ? props.icon : <SimpleIcon />;
        this.tProps.stick = props.stick != null ? props.stick : <this.DefaultStick />;
    }

    componentWillReceiveProps(props) {
        this.props = props;
        this.translateProps(props);
    }

    toggleOpenVars(e) {
        e.stopPropagation();

        this.setState({
            varsOpen: !this.state.varsOpen,
        })
    }

    render() {
        return (
            <div>
                <this.PopsicleStick />

                {
                    !this.state.varsOpen ?
                        null :
                        <span>
                            <this.Toolbar />
                            <this.PopsicleVars />
                        </span>
                }

            </div>
        )
    }
}

const PopsicleStick = function() {
    return (
        <div style={this.state.varsOpen ? {...st.popsicle, ...st.popsicleWithVarsOpen} : st.popsicle} className="popsicle">
            <div style={st.iconWrapper} className="icon">
                <div style={st.icon}>{this.tProps.icon}</div>
            </div>
            <div style={st.stickWrapper} onClick={this.toggleOpenVars} className="stick">
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

const DefaultStick = function() {
    return (
        <div style={st.defaultStick}>[Default Div]</div>
    )
};