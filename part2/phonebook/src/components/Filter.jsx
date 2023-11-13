const Filter = (props) => {
    return(
        <div>
            Filter by name: <input value={props.filter} onChange={props.handleFilterChange}/>
      </div>
    )
}

export default Filter