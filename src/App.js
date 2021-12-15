import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed'
import Login from './components/Login'


import './App.css'

const PROJECTID = process.env.REACT_APP_PROJECT_ID;
const App = () => {

    if(!localStorage.getItem('username')) return <Login />


    return (
        <ChatEngine
            height='100vh'
            projectID={PROJECTID}
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed  {...chatAppProps} />}
        />
    )
}

export default App;
