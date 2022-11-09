import { AiFillHome, AiFillFilePdf } from 'react-icons/ai';
import SideBarIcon from '../sidebar';
import Image from 'next/image';

const NavDean = () => {
  return (
    <div className="fixed top-0 h-screen w-16 m-0 flex flex-col bg-true-red text-white shadow-lg">
      <Image src="/unc-dbs-logo.png" width={60} height={60} />
      <SideBarIcon icon={<AiFillHome size="30" />} text="Home 🏠" />
      <SideBarIcon icon={<AiFillFilePdf size="30" />} text="Reports 📁" />
      <span className="inline-block absolute bottom-5 right-0 left-0 text-xs text-center">
        Logout
      </span>
    </div>
  );
};

export default NavDean;
