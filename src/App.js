import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import ChatScreen from './components/ChatScreen';

const AppLayoutComponent = () => {
    const [showChat, setShowChat] = useState(false);

    const handleOnClick = () => {
        setShowChat(!showChat);
    }

    return <div>
            {
                (showChat)
                    ? <ChatScreen handleOnClick={handleOnClick} />
                    : <span className='font-bold text-8xl cursor-pointer' onClick={handleOnClick}>🚀</span>
            }
        </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);