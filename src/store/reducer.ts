
const initialState = {
    lastNoteCreated: null,
    totalNotes: 0,
    notes: [],
};

type Action = {
    type: string,
    payload?: string 

}


const reducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'ADD_NOTE': {
            const newState = { 
                notes: [...state.notes, action.payload],
                totalNotes: state.notes.length + 1,
                lastNoteCreated: new Date().toTimeString().slice(0, 8),
            };
            console.log('After ADD_NOTE: ', newState);
            return newState;
        }

        case 'DELETE_NOTE': {
            const newState = {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload.id),
                totalNotes: state.notes.length - 1,
            };
            console.log('After DELETE_NOTE: ', newState);
            return newState;
        }
    }
};


export default reducer