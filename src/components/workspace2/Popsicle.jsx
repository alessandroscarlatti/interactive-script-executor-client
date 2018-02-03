// this file wil need to wrap the contents of the popsicle
import React from 'react'

require("./popsicle.scss");

const st = {
    popsicle: {
        border: "2px solid rgb(200, 200, 200)",
        boxSizing: "border-box",
        borderRadius: 2,
        boxShadow: "0px 0px 2px 2px rgb(242, 242, 242)",
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
    }
};

export default class Popsicle extends React.Component {

    constructor(props) {
        super(props);

        this.tProps = {};

        this.translateProps(props);

        this.translateProps = this.translateProps.bind(this)
    }

    translateProps(props) {
        this.tProps.icon = props.icon != null ? props.icon : <DefaultIcon />;
        this.tProps.stick = props.stick != null ? props.stick : <DefaultStick />;
    }

    componentWillReceiveProps(props) {
        this.props = props;
        this.translateProps(props);
    }

    render() {
        return (
            <div style={st.popsicle} className="popsicle">
                <div style={st.iconWrapper} className="icon">
                    <div style={st.icon}>{this.tProps.icon}</div>
                </div>
                <div style={st.stickWrapper} className="stick">
                    <div style={st.stick}>{this.tProps.stick}</div>
                </div>
            </div>
        )
    }
}

const DefaultIcon = () => (
  <img src="/images/question.png" style={st.defaultIcon} />
    //<span>asdf</span>
);

const DefaultStick = () => (
    <div style={st.defaultStick}>[Default Div]</div>
);