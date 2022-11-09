import Layout from '../../components/Layout';
import { app } from '../../../firebaseConfig';

export default function managementHomepage() {
  return (
    <Layout navbarType={2}>
      <div className="overflow-hidden ml-20 mr-5 mt-5 h-full">
        <div>
          <div className="grid grid-cols-2 gap-2 m-2">
            <div>
              <h1 className="font-bold text-5xl text-head-gray ">
                Welcome Management!
              </h1>
              <a className=" inline-block mt-2 text-2xl text-sub-gray">
                Here's what's happening.
              </a>

              <div className=" mt-5 border w-9/12 h-32 border-lines-color rounded-lg">
                <div className=" ml-5 mt-3 grid grid-cols-12 gap-2 ">
                  <div className="col-span-3">
                    <a className="text-sub-gray">Total Projects</a>
                    <br />
                    <a className="text-7xl font-bold text-head-gray">145</a>
                  </div>
                  <div className="w-1">
                    <div className="ml-5 border border-r-0 bg-lines-color h-24 border-lines-color inline-block mb-2" />
                  </div>
                  <div className="col-span-3">
                    <a className="text-sub-gray">Active Projects</a>
                    <br />
                    <a className="text-7xl font-bold text-head-gray">50</a>
                  </div>
                  <div className="w-1">
                    <div className="ml-5 border border-r-0 bg-lines-color h-24 border-lines-color inline-block mb-2" />
                  </div>
                  <div className="col-span-4">
                    <a className="text-sub-gray">Finished Projects</a>
                    <br />
                    <a className="text-7xl font-bold text-head-gray">95</a>
                  </div>
                </div>
              </div>
            </div>

            {/*The Tutorial Cards here */}
            <div class="w-full h-auto rounded-md shadow-lg text-center justify-center">
              <a className="inline-block mt-5 text-true-red text-2xl font-bold">
                How to use the System:
              </a>
              <div className="m-10">
                <p className="text-sub-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam id iaculis lacus. Duis vulputate diam non est rhoncus
                  venenatis vel et metus. Duis tincidunt libero eu fermentum
                  dictum.
                </p>
              </div>
            </div>
          </div>

          <div className=" ml-2 mr-2">
            <div class="flex flex-col">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden border border-lines-color rounded-lg">
                    <table class="min-w-full ">
                      <thead class="border-b bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            class="text-sm font-medium text-sub-gray px-6 py-4 text-left"
                          >
                            Project Title
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-sub-gray px-6 py-4 text-left"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-sub-gray px-6 py-4 text-left"
                          >
                            Due Date
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-sub-gray px-6 py-4 text-left"
                          >
                            Departments
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-sub-gray px-6 py-4 text-left"
                          >
                            Progress
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b">
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            Employment Rate
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            On going
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            November 27, 2022
                          </td>
                        </tr>
                        <tr class="bg-white border-b">
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            Employment Rate
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            Completed
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            November 27, 2022
                          </td>
                        </tr>
                        <tr class="bg-white border-b">
                          <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            Employment Rate
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            On going
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            November 27, 2022
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
