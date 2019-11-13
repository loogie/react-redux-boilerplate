import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
//import action from './action';

export default (history) => combineReducers({
    router: connectRouter(history)
    //add other reducers here
    //,action
});

//eg reducer file

/* action.js

export const ACTION_INIT = "action/INIT";
export const ACTION_UPDATE = "action/UPDATE";
export const ACTION_END = "action/END";

const initState = {
    action:false
};

export default (state = initialState, action)=>{
    switch(action.type){
        case ACTION_INIT:
            return {
                ...state
            }
        case ACTION_UPDATE:
            return {
                ...state,
                update: action.update
            }
        case ACTION_END:
            return {
                ...state,
                action:true
            }
        defaut:
            return state;
    }
}

export const initialize = () => {
    return dispatch => {
        dispatch({
            type:ACTION_INIT
        });
    }
}

// IN COMPONENT
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {initialize} from '../modules/action';

// call this.props.initialize() somewhere

const mapStateToProps = state =>{
    return {
        action: state.action
    }
}

const mapDispatchToProps = dispatch =>bindActionCreators({
    initialize
}, 
dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Action);
*/