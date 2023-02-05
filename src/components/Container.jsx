import React from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

import { Interweave } from "interweave";
import Form from "./Form";

const Container = (props) => {

    const [question, setQuestion] = React.useState({});
    const { idquestion } = useParams()


    // Get questions from API
    React.useEffect(() => {
        axios.get('http://localhost:8080/api/questions/' + idquestion)
            .then((response) => {
                setQuestion(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, [idquestion]);

    const navigate = useNavigate();
    return (
        <div class="pt-20 sm:ml-64">
            <div class="px-16 py-4 text-gray-900 border-b">
                <h1 className="font-semibold text-2xl pb-4">{question.title}</h1>
                <div className="container leading-relaxed text-justify pb-4">
                    <Interweave style="white-space: pre" content={(question.content)}/>
                    
                </div>
            </div>
            <Form idquestion={idquestion}/>
        </div>
    );
}

export default Container;