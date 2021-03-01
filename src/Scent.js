const Scent = (props) => {
    return (
        <div className="scent" onClick={props.handleClick}><img src={props.src}/></div>
    )
}

export default Scent