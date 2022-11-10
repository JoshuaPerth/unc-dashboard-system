import { AiFillHome, AiFillFilePdf } from 'react-icons/ai';
import SideBarIcon from '../sidebar';
import Image from 'next/image';
import logout from './logout';
import { useRouter } from 'next/router';

const NavDean = () => {
  const router = useRouter();
  function goToReports() {
    router.push('/accounts/deans/reports');
  }
  function goToHome() {
    router.push('/accounts/deans');
  }
  function Logout() {
    logout();
    router.push('/');
  }
  return (
    <div className="fixed top-0 h-screen w-16 m-0 flex flex-col bg-true-red text-white shadow-lg">
      <Image src="/unc-dbs-logo.png" width={60} height={60} />

      <button onClick={goToHome}>
        <SideBarIcon icon={<AiFillHome size="30" />} text="Home 🏠" />
      </button>

      <button onClick={goToReports}>
        <SideBarIcon icon={<AiFillFilePdf size="30" />} text="Reports 📁" />
      </button>

      <button onClick={Logout}>
        <span className="inline-block absolute bottom-5 right-0 left-0 text-xs text-center">
          Logout
        </span>
      </button>
    </div>
  );
};

export default NavDean;
