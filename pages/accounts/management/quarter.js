import React, { useState } from 'react';
import { TagsInput } from 'react-tag-input-component';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { AiFillCloseSquare } from 'react-icons/ai';
import Layout from '../../components/Layout';
import { app, database } from '../../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export default function quarter() {
  const databaseRef = collection(database, 'priorities');
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [selected, setSelected] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [isFocused, setIsFocused] = useState(false);
  const departmentChoices = [
    'Computer Studies',
    'Engineering & Architecture',
    'Criminal Justice Education',
  ];

  const addData = () => {
    addDoc(databaseRef, {
      title: title,
      description: description,
      dueDate: startDate,
      progress: 0,
      departments: selected,
    })
      .then(() => {
        alert('Priority Sent!');
        setTitle('');
        setDesc('');
        setSelected([]);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <Layout navbarType={2}>
      <div className="ml-20 mr-5 mt-5 h-full ">
        <h1 className="font-bold text-5xl text-head-gray ">Quarter #</h1>
        <a className=" inline-block mt-3 text-base text-sub-gray">
          Priorities for Month start - month end<br></br>
        </a>
        <div className="m-3 border-t"></div>
        

        <div>
          <p className="font-semibold text-2xl">Priority #</p>
          <a className="text-sm inline-block text-sub-gray">
            (01/01/2022 - 01/01/2022)<br></br>
          </a>
          <p className="m-2">This is what the priority is all about.</p>
          <p
            href="#"
            className="text-sm text-sky-400/100 cursor-pointer transition delay-100 duration-300 ease-in-out hover:text-sky-600"
          >
            <u>add champions...</u>
          </p>
        </div>

        <div className="mt-3 flex gap-5">
          <button
            className="border-2 border-gray-600 rounded px-5 py-2 
            inline-block font-semibold transition ease-in-out delay-100 
            hover:bg-gray-600 hover:text-white duration-500"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Add Priority
          </button>
        </div>
        {showModal ? (
          <div
            id="overlay"
            className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center"
          >
            <div className="bg-white max-w-sm py-2 px-3 rounded shadow-xl">
              <div className="flex justify-between items-center">
                <h4 className="text-lg font-bold">Priority Form </h4>
                <AiFillCloseSquare
                  className="cursor-pointer"
                  onClick={() => setShowModal(false)}
                />
              </div>
              <div className="mt-2">
                <label>Title: </label>
                <input
                  className="border rounded"
                  type="text"
                  placeholder="Priority title"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                />
              </div>

              <div className="mt-2">
                <label>Description: </label>
                <input
                  className="border rounded"
                  type="text"
                  placeholder="Description"
                  value={description}
                  onChange={(event) => setDesc(event.target.value)}
                />
              </div>

              <div className="mt-3 flex gap-2">
                <label>Set Due Date: </label>
                <div className="border-2 rounded">
                  <DatePicker
                    selected={startDate}
                    value={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>

              <div>
                <div>
                  <h1 className="mt-3">Deparments: </h1>
                  <pre>{JSON.stringify(selected)}</pre>
                  <TagsInput
                    value={selected}
                    onChange={setSelected}
                    name="tags"
                    placeHolder="tags"
                    focus={() => setIsFocused(true)}
                  />
                </div>

                {isFocused && (
                  <div className="shadow-lg p-2">
                    {departmentChoices.map((suggestion, index) => {
                      return (
                        <div
                          key={index}
                          className="p-2 hover:bg-gray-200 cursor-pointer"
                        >
                          {suggestion}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="mt-3 flex justify-end space-x-3">
                <button
                  className="px-3 py-1 text-white bg-sky-400/100 rounded"
                  onClick={addData}
                >
                  Submit
                </button>
                <button
                  className="px-3 py-1 text-white bg-true-red rounded "
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </Layout>
  );
}
