import React from "react";

import axios from "axios";

export default function Form(props) {

    const [selection, setSelection] = React.useState("");
    const [comment, setComment] = React.useState("");
    const [response, setResponse] = React.useState("");

    function submit(idquestion, option, comment) {
        axios
            .post('http://localhost:8080/api/answers', {
                iduser: "63dd83b0f62b5a24e67cb17e",
                idquestion: idquestion,
                option: option,
                comment: comment
            })
            .then((response) => {
                setResponse(response.data);
                console.log(response.data);
            });
    }

    return (

        <fieldset className="px-16 py-6" >
            <p className="mb-8 font-bold text-xl text-gray-900" >¿Qué acción consideras que se debe tomar frente a este artículo?</p>
            <legend class="sr-only">Countries</legend>
            <div className="md:grid-cols-1 grid lg:grid-cols-2 gap-8">
                <div className="col-span-1">
                    <button class="flex w-full items-center mb-4 px-3 py-3 rounded-lg border focus:border-green-700 focus:bg-green-100 hover:bg-green-100 border-gray-400 bg-gray-50" onClick={() => setSelection("keep-article")}>
                        <input id="keep-article" type="radio" name="options" value="keep-article" class="w-4 h-4 checked:bg-green-600  border-gray-300 focus:ring-2  focus:ring-green-300" disabled checked={selection === "keep-article"} />
                        <label for="keep-article" class={`block ml-2 text-md text-start font-semibold ${selection === "keep-article" ? "text-green-700" : "text-gray-700"}`}>
                            Mantener el artículo tal como está
                        </label>
                    </button>

                    <button class="flex w-full items-center mb-4 px-3 py-3 rounded-lg border focus:border-yellow-600 focus:bg-yellow-100 hover:bg-yellow-100 border-gray-400 bg-gray-50" onClick={() => setSelection("modify-article")}>
                        <input id="modify-article" type="radio" name="options" value="modify-article" class="w-4 h-4 checked:bg-yellow-600  border-gray-300 focus:ring-2  focus:ring-green-300" disabled checked={selection === "modify-article"} />
                        <label for="modify-article" class={`block ml-2 text-md text-start font-semibold ${selection === "modify-article" ? "text-yellow-600" : "text-gray-700"}`}>
                            Modificar el artículo
                        </label>
                    </button>

                    <button class="flex w-full items-center mb-4 px-3 py-3 rounded-lg border focus:border-yellow-600 focus:bg-yellow-100 hover:bg-yellow-100 border-gray-400 bg-gray-50" onClick={() => setSelection("add-to-article")}>
                        <input id="add-to-article" type="radio" name="options" value="add-to-article" class="w-4 h-4 checked:bg-yellow-600  border-gray-300 focus:ring-2  focus:ring-green-300" disabled checked={selection === "add-to-article"} />
                        <label for="add-to-article" class={`block ml-2 text-md text-start font-semibold ${selection === "add-to-article" ? "text-yellow-600" : "text-gray-700"}`}>
                            Añadir sección o parágrafo al artículo
                        </label>
                    </button>
                    <button class="flex w-full items-center mb-4 px-3 py-3 rounded-lg border focus:border-red-600 focus:bg-red-100 hover:bg-red-100 border-gray-400 bg-gray-50 " onClick={() => setSelection("delete-article")}>
                        <input id="delete-article" type="radio" name="options" value="delete-article" class="w-4 h-4 checked:bg-red-600  border-gray-300 focus:ring-2  focus:ring-green-300" disabled checked={selection === "delete-article"} />
                        <label for="delete-article" class={`block ml-2 text-md text-start font-semibold ${selection === "delete-article" ? "text-red-600" : "text-gray-700"}`}>
                            Borrar el artículo
                        </label>
                    </button>
                </div>

                <div className="col-span-1">

                    <label for="message" class="block mb-2.5 text-md font-semibold text-start text-gray-900">
                        ¿Tienes algún comentario?
                    </label>
                    <textarea id="message" value={comment} onChange={e => setComment(e.target.value)} rows="4" class="block mb-1/2 p-2.5 w-full text-md text-start text-gray-900 bg-gray-50 rounded-lg border border-gray-400" placeholder="Escribe aquí..."></textarea>
                    <button type="button" onClick={() => submit(props.idquestion, selection, comment)} disabled={selection === ""} class={`${selection==="" ? "border-gray-300 bg-gray-300" : "border-blue-700 bg-blue-700 hover:bg-blue-800"} lg:col-span-1 mt-6 w-full text-white border focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-md px-5 py-3`}>Enviar respuestas</button>


                </div>


            </div>
        </fieldset>


    )


}