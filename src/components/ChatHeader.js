import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightAndDownLeftFromCenter, faXmark } from '@fortawesome/free-solid-svg-icons';

const ChatHeader = ({handleOnClick}) => {

    library.add(faUpRightAndDownLeftFromCenter, faXmark);

    return (
        <div className="h-7 w-full bg-blue-900 text-white flex justify-between">
            <span className="font-bold italic ml-2">O2 Chat Assistant</span>
            <div className='flex justify-between content-center -mt-1'>
                <FontAwesomeIcon className='m-auto' icon={faUpRightAndDownLeftFromCenter} />
                <span className="cursor-pointer ml-2 mr-1 text-2xl" onClick={handleOnClick}><FontAwesomeIcon icon={faXmark} /></span>
            </div>
        </div>
    )
}

export default ChatHeader;