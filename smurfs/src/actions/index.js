//actions
import axios from 'axios';

export const GETTING_SMURFS = 'GETTING_SMURFS';
export const GOT_SMURFS = 'GOT_SMURFS';
export const ERROR = 'ERROR';

/*
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const getTheSmurfs = () => {
  return function(dispatch){
    dispatch({type: GETTING_SMURFS});
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      dispatch({type: GOT_SMURFS, payload: res})
    })
    .catch(err => {
        console.log('error')
        dispatch({type: ERROR, payload: err})
    })
  }
}

export const ADDING_SMURF = 'ADDING_SMURF';
export const ADDED_SMURF = 'ADDING_SMURF';
export const ADD_SMURF_FAILED = 'ADD_SMURF_FAILED';

export const addASmurf = (newSmurf) => {
  return function(dispatch){
    dispatch({type: ADDING_SMURF});
    axios.post(`http://localhost:3333/smurfs`, {
      name: newSmurf.name,
      age: newSmurf.age,
      height: newSmurf.height,
    }).then(res => {
      dispatch({type: ADDED_SMURF, payload: res});
      dispatch(getTheSmurfs());
    }).catch(err => {
      dispatch({type: ADD_SMURF_FAILED, payload: err})
    })
  }
}

export const EDITING_SMURF = 'EDITING_SMURF';
export const EDITED_SMURF = 'EDITED_SMURF';
export const EDIT_SMURF_FAILED = 'EDIT_SMURF_FAILED';

export const editSmurf = (changedSmurf) => {
  return function(dispatch){
    dispatch({type: EDITING_SMURF});
    axios.put(`http://localhost:3333/smurfs/${changedSmurf.id}`, {
      "name": changedSmurf.name,
      "age": changedSmurf.age,
      "height": changedSmurf.height,
    }).then(res => {
      dispatch({type: EDITED_SMURF, payload: res});
      dispatch(getTheSmurfs());
    }).catch(err => {
      dispatch({type: EDIT_SMURF_FAILED, payload: err})
    })
  }
}

export const SMACKING_SMURF = 'SMACKING_SMURF';
export const SMURF_SMACKED = 'SMURF_SMACKED';
export const SMURF_DUCKED = 'SMURF_DUCKED';

export const smackASmurf = (smurfToBeSmurfed) => {
  return function(dispatch){
    dispatch({type: SMACKING_SMURF});
    axios.delete(`http://localhost:3333/smurfs/${smurfToBeSmurfed}`, {
    }).then(res => {
      dispatch({type: SMURF_SMACKED, payload: res});
      dispatch(getTheSmurfs());
    }).catch(err => {
      dispatch({type: SMURF_DUCKED, payload: err})
    })
  }
}

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
