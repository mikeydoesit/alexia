const Scent = (props) => {
    return (
        <div onClick={props.handleClick}>{props.name}</div>
    )
}

export default Scent