import React from "react"
import SpotInformation from "./spot_information"


class SpotShow extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchSpot(this.props.match.params.spotId)
    }




    render() {
        const {spot} = this.props;
        return(
            <div className="spot-show">
                <SpotInformation spot={spot}/>
                <SpotMap spot={spot} />

            </div>
        )
    }
}

export default SpotShow;