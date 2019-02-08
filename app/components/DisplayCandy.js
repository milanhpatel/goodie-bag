import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllCandy } from '../reducers/index';
import { get } from 'http';

class DisplayCandy extends Component {
    constructor(){
        super();
    }

    async componentDidMount() {
        await this.props.getAllCandy();
    }

    render() {
        const candiesToDisplay = this.props.candies;
        console.log('CANDIES ARE: ', candiesToDisplay)
        return (
                <div>
                    <nav>
                        Goodie Bag
                    </nav>
                <main>
                  <h1>What a nice bag of candies you have!</h1>
                    <div>
                        {candiesToDisplay.length > 0 ?
                            candiesToDisplay.map((candy) => (
                            <li key={candy.id}> {candy.name} </li>))
                        : null}
                    </div>
                </main>
                </div>
              )
    }
}

const mapStateToProps = (state) => ({
    candies: state.candies
})

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCandy: () => dispatch(getAllCandy())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCandy)