import ChatBody from "./ChatBody";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";

const ChatScreen = ({handleOnClick}) => {

    return (
        <div className="w-80 h-[30rem] bg-white text-center border-blue-900 border-2">
            <ChatHeader handleOnClick={handleOnClick} />
            <ChatBody />
            <ChatFooter />
        </div>
    )
}

export default ChatScreen;