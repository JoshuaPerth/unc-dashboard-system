import Layout from '../../components/Layout';

const facultyStaffHomepage = () => {
  return (
    <Layout navbarType={3}>
      <div className="ml-20 mt-5 h-full border-2 border-blue-500 bg-gray-100">
        <h1 className="font-bold text-5xl text-head-gray ">Welcome Faculty!</h1>
        <a className=" inline-block mt-2 text-2xl text-sub-gray">
          Here's what's happening.
        </a>
      </div>
    </Layout>
  );
};

export default facultyStaffHomepage;
