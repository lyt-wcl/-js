import React, {useContext} from 'react';
import {store} from "../store";

function ControlPanel() {
    const {state, dispatch} = useContext(store);

    return <div>
        <p>{state.count}</p>
        <button onClick={() => dispatch({type: 'increment'})}>add</button>
        <button onClick={() => dispatch({type: 'subcrement'})}>sub</button>
    </div>;
}

export default ControlPanel;
