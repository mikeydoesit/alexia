const Homepage = (props) => {
    return (
        <div id="homepage">
            <div id="leftMain"></div>
            <div id="rightMain" onTransitionEnd={props.handleTransitionEnd}>
                <img alt='green melts' src={props.image} onClick={props.viewProductDetails}/>
                <p id="mainDescription">{props.description}</p>
            </div>
        </div>
    )
}

export default Homepage