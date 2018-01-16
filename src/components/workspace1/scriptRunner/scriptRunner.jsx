import React from 'react'
import ScriptEditor from './scriptEditor/scriptEditor'
require('./scriptRunner.scss')

export default class ScriptRunner extends React.Component {
    render() {
        return (
            <span>
                <TitleBar title="Script Runner" />
                <ScriptEditor />
            </span>
        )
    }
}

class TitleBar extends React.Component {
    render() {
        return (
            <div className="iseTitleBar titleBarActive paneDragHandle">{this.props.title}</div>
        )
    }
}