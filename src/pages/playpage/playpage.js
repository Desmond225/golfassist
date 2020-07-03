import React from 'react';
import FormInput from '../../components/form-input/formInput';
import "./playpage.scss"
import FormSelect from '../../components/form-select/formSelect';
class PlayPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playerName: '',
            courseName: ''
        }
    }

    handleForm = (event) => (
        event.preventDefault()
    )

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({[name]: value})
    }

    render() {
        const { playerName, courseName } = this.state;
        return (
            <div className="play-page" style={{marginTop: '100px'}}>
                <form onSubmit={this.handleForm}>
                <FormInput
                    type="text"
                    name="playerName"
                    value={playerName}
                    onChange={this.handleChange}
                    label="Player name"
                    required
                />

                <div>Select course</div>
                <select>
                    <option value="hogedijk">De Hoge Dijk</option>
                </select>
        
                <div>Select tee</div>
                <select>
                    <option value="white">White</option>
                    <option value="yellow">Yellow</option>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                </select>
        
                <div>Select loop</div>
                <select>
                    <option value="white">18 holes H/B</option>
                    <option value="white">Front 9 holes</option>
                    <option value="white">Back 9 holes</option>
                </select>
            <br />
                <input type="submit" value="Start round" />
                </form>
            </div>
            )
    }
}

export default PlayPage;