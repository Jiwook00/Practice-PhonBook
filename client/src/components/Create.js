import React, { Component } from 'react';

class Create extends Component {
    state = {
        nameValue: '',
        numberValue: '',
    };

    handleNameChange = e => {
        this.setState({
            nameValue: e.target.value
        });
    };

    handleNumberChange = e => {
        this.setState({
            numberValue: e.target.value
        });
    };

    handleCreate = () => {
        const { nameValue, numberValue } = this.state;

        this.setState({
            nameValue: '',
            numberValue: ''
        })
    };

    render() {
        const { nameValue, numberValue } = this.state;
        const { handleNameChange, handleNumberChange, handleCreate } = this;

        return (
            <>
                <div>
                    <label> Name </label>
                    <input
                        type="text"
                        value={nameValue}
                        onChange={handleNameChange} />
                </div>
                <div>
                    <label> Number </label>
                    <input
                        type="text"
                        value={numberValue}
                        onChange={handleNumberChange} />
                </div>
                <button onClick={handleCreate}>Create</button>
            </>
        )
    }

}

export default Create