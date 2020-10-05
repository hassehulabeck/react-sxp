import React from "react";

const Playarea = (props) => {
    if (props.numberofsets == null) {
        return (
            <form onSubmit={props.klick}>
                <label>Antal set?</label>
                <input
                    type="text"
                    name="numberofsets"
                    value={props.numberofsets}
                />
                <input type="submit" value="Starta match" />
            </form>
        );
    } else {
        return <h1>Här spelar vi</h1>;
    }
};

export default Playarea;
