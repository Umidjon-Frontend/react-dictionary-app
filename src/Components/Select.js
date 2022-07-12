import React, { useState } from "react";

function Select({ setSelectCount }) {
    const [count, setCount] = useState(0);
    function selectCount(e) {
        setCount(e.target.value);
        setSelectCount(e.target.value);
    }
    return (
        <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
                Unit raqamini kiriting
            </span>
            <input
                type="number"
                value={count}
                onChange={selectCount}
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
            />
        </div>
    );
}

export default Select;
