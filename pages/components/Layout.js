import NavDean from '../components/navigation/navbar-dean';
import NavMang from '../components/navigation/navbar-management';
import NavFS from '../components/navigation/navbar-faculty-staff';

const Layout = ({ children, navbarType }) => {
  return (
    <div>
      {navbarType == 1 && <NavDean />}
      {navbarType == 2 && <NavMang />}
      {navbarType == 3 && <NavFS />}
      {children}
    </div>
  );
};

export default Layout;
