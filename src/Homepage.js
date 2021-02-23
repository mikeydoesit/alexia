const Homepage = (props) => {
    return (
        <div id="homepage">
            <div id="leftMain"></div>
            <div id="rightMain" onTransitionEnd={props.handleTransitionEnd} onClick={props.viewProductDetails}>
                <img alt='green melts' src={props.image} />
                <p id="mainDescription">{props.description}</p>
            </div>
        </div>
    )
}

export default Homepage