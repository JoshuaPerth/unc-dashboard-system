import Layout from '../../components/Layout';
import { app } from '../../../firebaseConfig';

export default function managementHomepage() {
  return (
    <Layout navbarType={2}>
      <div className="ml-20 mt-5 h-full border-2 border-blue-500 bg-gray-100">
        <h1 className="font-bold text-5xl text-head-gray ">
          Welcome Management!
        </h1>
        <a className=" inline-block mt-2 text-2xl text-sub-gray">
          Here's what's happening.
        </a>
      </div>
    </Layout>
  );
}
