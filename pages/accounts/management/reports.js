import Layout from '../../components/Layout';
import { app } from '../../../firebaseConfig';

export default function reports() {
  return (
    <Layout navbarType={2}>
      <div className="ml-20 mr-5 mt-5 h-full ">
        <h1 className="font-bold text-5xl text-head-gray ">Finished Reports</h1>
        <a className=" inline-block mt-3 text-base text-sub-gray">
          This is what has been achieved so far.
        </a>
      </div>

      <div class=" overflow-hidden mt-5 ml-20 mr-5 flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table class="min-w-full">
                <thead class="border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Project Title
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Date Finished
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Departments
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
