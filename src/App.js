import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'
import Login from './components/Login'


import './App.css'

const App = () => {

    if(!localStorage.getItem('username')) return <Login />


    return (
        <ChatEngine
            height='100vh'
            projectID='1028b5f5-9033-4300-ad6f-300f02295c88'
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed  {...chatAppProps} />}
        />
    )
}

export default App;
