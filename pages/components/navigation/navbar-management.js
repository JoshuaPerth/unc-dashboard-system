import { AiFillHome, AiFillFilePdf } from 'react-icons/ai';
import { MdOutlineDashboard } from 'react-icons/md';
import Image from 'next/image';
import SideBarIcon from '../sidebar';
import logout from './logout';
import { getAuth } from 'firebase/auth';
import { useRouter } from 'next/router';

const NavMang = () => {
  const auth = getAuth();
  const router = useRouter();

  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('user logged in: ', user.email);
    } else {
      console.log('user logged out');
    }
  });

  function goToReports() {
    router.push('/accounts/management/reports');
  }
  function goToHome() {
    router.push('/accounts/management');
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
        <SideBarIcon
          href="/accounts/management/reports"
          icon={<AiFillFilePdf size="30" />}
          text="Reports 📁"
        />
      </button>
      <button onClick={Logout}>
        <a className="inline-block absolute bottom-5 right-0 left-0 text-xs text-center">
          Logout
        </a>
      </button>
    </div>
  );
};

export default NavMang;
