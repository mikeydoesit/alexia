const Homepage = (props) => {
    return (
        <div id="homepage">
            <div id="leftMain"></div>
            <div id="rightMain" onTransitionEnd={props.handleTransitionEnd}><img alt='green melts' src="/breathemelts.jpg" onClick={props.viewProductDetails}/></div>
        </div>
    )
}

export default Homepage