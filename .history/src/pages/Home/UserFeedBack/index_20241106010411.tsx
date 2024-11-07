

import axios, { isAxiosError } from 'axios';
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
            const  response = await axios.get<UserFeedBackProps[]>(
                'https://66f17f7d4153791915512998.mockapi.io/api/content/TestContent'
            );
            setContent(response.data);
        }catch(error){
            if (isAxiosError(error)){
                setError(error.message)
            }else{
                setError('An unknown error occurred');
            }
        }
    }
    
    return(
        <div>
            {
                error && <h1>{error}</h1>
            }
            <div>
                <ul>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default UserFeedBack;