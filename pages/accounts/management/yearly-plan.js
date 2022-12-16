import Layout from '../../components/Layout';
import { app } from '../../../firebaseConfig';

export default function yearly() {
  return (
    <Layout navbarType={2}>
      <div className="ml-20 mr-5 mt-5 h-full ">
        <h1 className="font-bold text-5xl text-head-gray ">Yearly Plan</h1>
        <a className=" inline-block mt-3 text-base text-sub-gray">
          An outlook to what the Academic Affairs should achieve.<br></br>
        </a>

        <div className="m-3 border-t"></div>

        <div className="grid place-items-center">
          <div className="container mx-auto">
            <details class="bg-white shadow rounded group mb-4 pb-2">
              <summary
                class="list-none flex flex-wrap items-center cursor-pointer
            focus-visible:outline-none focus-visible:ring focus-visible:ring-pink-500
            rounded group-open:rounded-b-none group-open:z-[1] relative
            "
              >
                <h3 class="flex flex-1 p-4 font-semibold text-lg">
                  2022 Year Plan
                </h3>
                <div class="flex w-10 items-center justify-center">
                  <div
                    class="border-8 border-transparent border-l-gray-600 ml-2
                group-open:rotate-90 transition-transform origin-left
                "
                  ></div>
                </div>
              </summary>

              <div className="mx-3 block">
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
            </details>
          </div>

          <div className="container mx-auto">
            <details class="bg-white shadow rounded group mb-4 pb-2">
              <summary
                class="list-none flex flex-wrap items-center cursor-pointer
            focus-visible:outline-none focus-visible:ring focus-visible:ring-pink-500
            rounded group-open:rounded-b-none group-open:z-[1] relative
            "
              >
                <h3 class="flex flex-1 p-4 font-semibold text-lg">
                  2023 Year Plan
                </h3>
                <div class="flex w-10 items-center justify-center">
                  <div
                    class="border-8 border-transparent border-l-gray-600 ml-2
                group-open:rotate-90 transition-transform origin-left
                "
                  ></div>
                </div>
              </summary>
              <div className="mx-3 block">
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
            </details>
          </div>

          <button
            type="button"
            class="mt-3 text-white bg-sub-gray transition ease-in-out 
            delay-100 hover:bg-head-gray focus:ring-4 focus:ring-blue-300 
            font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 
            dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Add Year Plan
          </button>
        </div>
      </div>
    </Layout>
  );
}
