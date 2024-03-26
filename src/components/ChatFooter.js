import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const ChatFooter = () => {

    const [textValue, setTextValue] = useState('');

    library.add(faPaperPlane);

    const submit = () => {
        console.log(textValue);
        setTextValue('');
    }

    return (
        <div className="w-[99%] absolute bottom-[1.5px] flex mr-[3px] border-t-2 border-blue-900">
            <textarea rows={1} className="flex-1 focus:outline-none p-2 bg-scroll" value={textValue} onChange={(e) => setTextValue(e.target.value)} onKeyDown={(event) => (event.key === 'Enter' && submit())} />
            <button className="border-none px-1 text-xl" onClick={submit}><FontAwesomeIcon icon={faPaperPlane} beatFade /></button>
        </div>
    )
}

export default ChatFooter;