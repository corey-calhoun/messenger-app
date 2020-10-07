import { Card, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import './Message.css'

function Message(message, username) {
    // eslint-disable-next-line no-unused-vars
    const isUser = username === message.username;

    return (
        <div className={`message ${isUser && 'message-user'}`}>
            <Card className={isUser ? "message-userCard" : "message-guestCard"}>
                <CardContent>
                    <Typography
                     color="white"
                     variant="h5"
                     component="h2"
                    >
                     {message.username}: {message.text}   
                    </Typography>
                </CardContent>
            </Card>    
        </div>
            
    )
}

export default Message
