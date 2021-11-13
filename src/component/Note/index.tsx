import React, {useState} from 'react';
import { Contain, Input, Button } from '../Note/style'


const Note: React.FC = () => {
    const [noteText, setNoteText] = useState('');

    const addNote = (event: any) => {
        event.preventDefault();
        if (!noteText) {
            return;
        }
    }

    return (
        <Contain>
            
             <Input
             placeholder='Create a new note'
             onChange={e => setNoteText(e.target.value)}
             ></Input>
             <Button onClick={addNote}>Add Note</Button>
            
        </Contain>
    )
}

export default Note
