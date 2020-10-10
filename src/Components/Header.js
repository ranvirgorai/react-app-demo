import React from 'react';


function Header(props){


    return <div>
        <div className="headerWrapper">
            <div>
        {props.isAddMode && <button onClick={props.onBackPress}>back</button>}
        </div>
            <label>ToDo</label>
            <button onClick={props.handleAdd}>{props.isAddMode?'Done':'Add'}</button>
        </div>
    </div>

}

export default Header