import Layout from '../../components/Layout';
import React, { useState, useEffect } from 'react';
import { app, database } from '../../../firebaseConfig';
import { collection, addDoc, onSnapshot } from 'firebase/firestore';

export default function yearly() {
  const [numPlans, setNumPlans] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const databaseRef = collection(database, 'yearPlans');
  const [years, setYears] = useState([]);

  useEffect(() => {
    onSnapshot(databaseRef, (snapshot) => {
      const yearTitles = snapshot.docs.map((doc) => {
        const data = doc.data();
        return data['year-title'];
      });
      yearTitles.sort((a, b) => a - b); // sort year titles in descending order
      setYears(yearTitles);
      setNumPlans(yearTitles.length);
    });
  }, []);

  const handleAddPlan = async () => {
    try {
      // Get the last year title and increment it by 1
      const newYear =
        years.length > 0 ? Number(years[years.length - 1]) + 1 : 1;

      // Add the new year plan document to the collection
      const docRef = await addDoc(databaseRef, {
        'year-title': newYear,
      });

      // Update the years state with the new year at the end
      setYears([...years, newYear]);

      // Update the numPlans state with the new length of the years array
      setNumPlans(years.length + 1);

      // Hide the confirmation modal
      setShowConfirmation(false);
    } catch (error) {
      console.error('Error adding year plan:', error);
    }
  };

  const handleCancel = () => {
    setShowConfirmation(false); // hide modal on cancel
  };

  const handleShowConfirmation = () => {
    setShowConfirmation(true); // show modal on button click
  };

  const planContent = (
    <div className="mx-3 block text-gray-600 italic">
      <p class="m-2 cursor-pointer transition delay-100 duration-300 ease-in-out hover:text-true-red">
        Quarter 1
      </p>
      <div className="mx-3 border-t"></div>
      <p class="m-2  cursor-pointer transition delay-100 duration-300 ease-in-out hover:text-true-red">
        Quarter 2
      </p>
      <div className="mx-3 border-t"></div>
      <p class="m-2 cursor-pointer transition delay-100 duration-300 ease-in-out hover:text-true-red">
        Quarter 3
      </p>
      <div className="mx-3 border-t"></div>
      <p class="m-2 cursor-pointer transition delay-100 duration-300 ease-in-out hover:text-true-red">
        Quarter 4
      </p>
    </div>
  );

  const yearPlans = years.map((yearTitle, index) => (
    <div className="container mx-auto" key={index}>
      <details class="bg-white shadow rounded group mb-4 pb-2">
        <summary
          class="list-none flex flex-wrap items-center cursor-pointer
            focus-visible:outline-none focus-visible:ring focus-visible:ring-pink-500
            rounded group-open:rounded-b-none group-open:z-[1] relative
          "
        >
          <h3 class="flex flex-1 p-4 font-semibold text-lg">
            {yearTitle} Year Plan
          </h3>
          <div class="flex w-10 items-center justify-center">
            <div
              class="border-8 border-transparent border-l-gray-600 ml-2
                group-open:rotate-90 transition-transform origin-left
              "
            ></div>
          </div>
        </summary>
        {planContent}
      </details>
    </div>
  ));

  return (
    <Layout navbarType={2}>
      <div className="ml-20 mr-5 mt-5 h-full ">
        <h1 className="font-bold text-5xl text-head-gray ">Agenda</h1>
        <a className=" inline-block mt-3 text-base text-sub-gray">
          An outlook to what the Academic Affairs should achieve.<br></br>
        </a>

        <div className="m-3 border-t"></div>

        <div className="grid place-items-center">
          {years.map((year, index) => (
            <div className="container mx-auto" key={year}>
              <details className="bg-white shadow rounded group mb-4 pb-2">
                <summary
                  className="list-none flex flex-wrap items-center cursor-pointer
                    focus-visible:outline-none focus-visible:ring focus-visible:ring-pink-500
                    rounded group-open:rounded-b-none group-open:z-[1] relative
                  "
                >
                  <h3 className="flex flex-1 p-4 font-semibold text-lg">
                    {year} Year Plan
                  </h3>
                  <div className="flex w-10 items-center justify-center">
                    <div
                      className="border-8 border-transparent border-l-gray-600 ml-2
                        group-open:rotate-90 transition-transform origin-left
                      "
                    ></div>
                  </div>
                </summary>
                {planContent}
              </details>
            </div>
          ))}
          <button
            type="button"
            onClick={handleShowConfirmation}
            className="mt-3 text-white bg-sub-gray transition ease-in-out 
              delay-100 hover:bg-head-gray focus:ring-4 focus:ring-blue-300 
              font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 
              dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add Year Plan
          </button>
          {showConfirmation && (
            <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center">
              <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
              <div className="bg-white rounded-lg p-4 z-10">
                <p className="mb-4">
                  Are you sure you want to add a year plan?
                </p>
                <div className="flex justify-center items-center">
                  <button
                    type="button"
                    onClick={handleAddPlan}
                    className="bg-green-500 text-white rounded-lg px-4 py-2 mr-2"
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="bg-red-500 text-white rounded-lg px-4 py-2"
                  >
                    No
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
