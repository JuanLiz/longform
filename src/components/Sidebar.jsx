import React from "react";

import { Link } from "react-router-dom";


export default function Sidebar(props) {
  const chapters = [
    'Título I: De los Principios Generales',
    'Título II: Del Plan de Estudios y el Sistema Modular',
    'Título III: Del Gobierno de la Facultad',
    'Título IV: De los Centros y Comités Académicos'
  ];

  return (
    <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
      <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
        <ul class="space-y-2">
          <li>
            <Link to="home" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg  hover:bg-gray-100 ">
              <span class="font-semibold ml-3">Introducción</span>
            </Link>
          </li>
          {chapters.map(chapter => (
            <li>
              <button type="button" class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100  " aria-controls="dropdown-example" data-collapse-toggle={chapter}>
                <span class="flex-1 mx-3 text-left font-semibold" sidebar-toggle-item>{chapter}</span>
                <i class="fa-solid fa-chevron-down"></i>
              </button>
              <ul id={chapter} class="hidden py-2 space-y-2">
                {props.questions.filter((q) => q.chapter.includes(chapter)).map(question => (
                  <li>
                    <Link to={question.id} class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100  ">{question.title}</Link>
                  </li>
                ))}
              </ul>
            </li>

          ))}

        </ul>
      </div>
    </aside>
  );
}