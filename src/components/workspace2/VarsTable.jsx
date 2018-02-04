import React from 'react'

require("./varsTable.scss");

const st = {
    table: {
        width: "100%",
        borderCollapse: "collapse",
    },

    row: {
        borderBottom: "1px dashed rgb(200, 200, 200)",
        padding: 2,
    },

    tableKey: {
        borderRight: "1px dashed rgb(200, 200, 200)",
        paddingLeft: 10,
    },

    tableValue: {
        padding: "0px 10px 0px 10px",
    },

    input: {
        border: "none",
        width: "100%",
    },
};

export default class VarsTable extends React.Component {
    constructor(props) {
        super(props);

        this.bindings()
        this.mapPropsToState()
    }

    bindings() {

    }

    componentWillReceiveProps(props) {
        this.props = props;
        this.mapPropsToState()
    }

    mapPropsToState() {
        let state = {
            vars: this.props.vars,
        };

        if (this.state == null) {
            this.state = state
            this.initializeVars();
        } else {
            this.setState(state)
        }
    }

    initializeVars() {
        if (this.props.vars() != null) this.props.onVarsInitialize(
            this.props.vars().reduce((acc, v) => {
                acc[v.name] = v.default;
                return acc;
            }, {}));
    }

    render() {

        // wrap each key/value
        let kVs = [];

        if (this.props.vars() != null) this.props.vars().forEach((v) => {
            let props = {...this.props, var: v};
            kVs.push(<VarRow key={v.name}  {...props} />)
        });

        if (kVs.length === 0) {
            kVs.push(<tr key={"noVars"}><td style={st.tableValue}>No Variables for this Component</td></tr>)
        }

        return (
            <table style={st.table}>
                <tbody>
                {kVs}
                </tbody>
            </table>
        )
    }
}

class VarRow extends React.Component {
    constructor(props) {
        super(props);
        this.bindings();

        this.state = {
            value: props.var.default
        }
    }

    bindings() {
        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this)
    }

    onChange(e) {
        this.setState({
            value: e.target.value,
        })
    }

    onBlur() {
        if (this.props.onVarChange != null) this.props.onVarChange(this.props.var.name, this.state.value)
    }

    render() {
        return (
            <tr style={st.row} className="varsTableRow">
                <td style={st.tableKey}>
                    {this.props.var.name}
                </td>
                <td style={st.tableValue}>
                    <input
                        style={st.input}
                        type="text"
                        value={this.state.value}
                        onChange={this.onChange}
                        onBlur={this.onBlur}/>
                </td>
            </tr>
        )
    }
}