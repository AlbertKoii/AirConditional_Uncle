

import axios from 'axios';
import React, { useState, useEffect } from 'react';


interface UserFeedBackProps{
    id: string;
    UserName: string;
    Content: string;
    Date: number;
}

const UserFeedBack: React.FC<UserFeedBackProps> = () =>{

    const [Content , setContent] = useState<UserFeedBackProps[]>([])
    const [error, setError] = useState<string | null>(null);

    const fetchContents = async () =>{
        try {
            const  response = await axios.get<UserFeedBackProps[]>
        }catch(error){
            
        }
    }
    
    return(
        <div>
            <h1>Hello World !</h1>
        </div>
    );
};

export default UserFeedBack;