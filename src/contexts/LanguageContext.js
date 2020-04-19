import React from 'react'

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
    state = { language: 'english'}

    onLanguageChanged = (language) => {
        this.setState({language})
    }

    render() {
        return (
            <Context.Provider value={{... this.state, onLanguageChanged: this.onLanguageChanged}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default Context