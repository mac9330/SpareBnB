import React from "react"



class SpotIndex extends React.Component {
    componentDidMount() {
       this.props.fetchSpots
    }

    render() {
        debugger;
        return(
            <div>
                <ul>
                    {
                        this.props.spots.map(spot => (
                        <li key={spot.id}>{spot.name}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default SpotIndex;