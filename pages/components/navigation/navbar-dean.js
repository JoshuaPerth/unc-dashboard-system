import { AiFillHome, AiFillFilePdf } from 'react-icons/ai';

const NavDean = () => {
  return (
    <div className="fixed top-0 h-screen w-16 m-0 flex flex-col bg-red-500 text-white shadow-lg">
      <SideBarIcon icon={<AiFillHome size="30" />} text="Home 🏠" />
      <SideBarIcon icon={<AiFillFilePdf size="30" />} text="Reports 📁" />
      <span className="inline-block absolute bottom-5 right-0 left-0 text-xs text-center">
        Logout
      </span>
    </div>
  );
};

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);

export default NavDean;
