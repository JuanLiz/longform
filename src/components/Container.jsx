import React from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from 'react-router-dom';

import { Interweave } from "interweave";
import Form from "./Form";

const Container = (props) => {

    let questions = props.questions

    const [question, setQuestion] = React.useState({});
    const { idquestion } = useParams()

    let index = questions.map(question => question.id).indexOf(idquestion)

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

    return (
        <div class="pt-20 sm:ml-64">
            <nav aria-label="Page navigation example">
                <ul class="inline-flex items-center -space-x-px">
                    <li className={index<=0 ? 'invisible' : ''}>
                        <Link to={`/${questions[index-1]?.id}`} class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white  border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Previous</span>
                            <i class="fa-solid fa-chevron-left"></i>
                        </Link>
                    </li>
                    <li>
                        <span class="px-3 py-2 leading-tight text-gray-500 bg-white  border-gray-300 ">
                            {index+1}
                        </span>
                    </li>
                    {console.log(index)}
                    <li className={index===questions.length-1 ? 'invisible' : ''}>
                        <Link to={`/${questions[index+1]?.id}`} class="block px-3 py-2 leading-tight text-gray-500 bg-white  border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <span class="sr-only">Next</span>
                            <i class="fa-solid fa-chevron-right"></i>
                        </Link>
                    </li>
                </ul>
            </nav>

            <div class="px-16 py-4 text-gray-900 border-b">
                <h1 className="font-semibold text-2xl pb-4">{question.title}</h1>
                <div className="container leading-relaxed text-justify pb-4">
                    <Interweave style="white-space: pre" content={(question.content)} />

                </div>
            </div>
            <Form idquestion={idquestion} />
        </div>
    );
}

export default Container;