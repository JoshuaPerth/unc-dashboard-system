import { FaTasks } from 'react-icons/Fa';
import SideBarIcon from '../sidebar';
import Image from 'next/image';

const NavFS = () => {
  return (
    <div className="fixed top-0 h-screen w-16 m-0 flex flex-col bg-true-red text-white shadow-lg">
      <Image src="/unc-dbs-logo.png" width={60} height={60} />
      <SideBarIcon icon={<FaTasks size="30" />} text="Tasks ✅" />
      <span className="inline-block absolute bottom-5 right-0 left-0 text-xs text-center">
        Logout
      </span>
    </div>
  );
};

export default NavFS;
