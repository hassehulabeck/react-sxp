import React, { Fragment } from "react";

const Playarea = (props) => {
    if (props.numberofsets == null) {
        return (
            <>
                <h2>Välkommen till Sten-sax-påse</h2>
                <label>Välj antal set</label>
                <input
                    type="button"
                    name="numberofsets"
                    value={3}
                    onClick={props.klick}
                />
                <input
                    type="button"
                    name="numberofsets"
                    value={5}
                    onClick={props.klick}
                />
                <input
                    type="button"
                    name="numberofsets"
                    value={7}
                    onClick={props.klick}
                />
            </>
        );
    } else {
        return (
            <section className="triButtons">
                <button id={0} onClick={props.weaponclick}>
                    Sten
                </button>
                <button id={2} onClick={props.weaponclick}>
                    Sax
                </button>
                <button id={1} onClick={props.weaponclick}>
                    Påse
                </button>
            </section>
        );
    }
};

export default Playarea;
