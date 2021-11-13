import React from 'react';
import Note from '../../component/Note';
import { Can } from "./style";
import Sticky from '../../component/Sticky'

const Canvas: React.FC = () => {
    return (
        <div>
            <Can>
              <Note />
              <Sticky/> 
             </Can>  
        </div>


    )
}

export default Canvas
