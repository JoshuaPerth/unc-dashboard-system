import { AiFillHome, AiFillFilePdf } from 'react-icons/ai';
import { MdOutlineDashboard } from 'react-icons/md';
import Image from 'next/image';
import SideBarIcon from '../sidebar';

const NavMang = () => {
  return (
    <div className="fixed top-0 h-screen w-16 m-0 flex flex-col bg-true-red text-white shadow-lg">
      <Image src="/unc-dbs-logo.png" width={115} height={115} />
      <SideBarIcon icon={<AiFillHome size="30" />} text="Home 🏠" />
      <SideBarIcon icon={<MdOutlineDashboard size="30" />} text="Create 🚩" />
      <SideBarIcon icon={<AiFillFilePdf size="30" />} text="Reports 📁" />
      <span className="inline-block absolute bottom-5 right-0 left-0 text-xs text-center">
        Logout
      </span>
    </div>
  );
};

export default NavMang;
