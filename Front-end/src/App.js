import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import login from './components/login';
import signup from './components/signup';
import Home from './components/Home';
import BookApp from './components/BookApp';
import Bookings from './components/Bookings';
import MedDes from './components/MedDes'
import AppRequest from './components/doctor/AppRequest';
import YourAppointments from './components/doctor/YourAppointments';
import DocHome from './components/doctor/DocHome';
import AdminHome from './components/admin/AdminHome';
import AdminEditDoc from './components/admin/AdminEditDoc';
import AdminAddDoc from './components/admin/AdminAddDoc';
import AddDescription from './components/doctor/AddDescription';
import UpdateProfile from './components/UpdateProfile';
import DocProfile from './components/doctor/DocProfile'
import AdminProfile from './components/admin/AdminProfile';


function App() {
  return (
      <Router>
          <Route path="/login" component={login} />
          <Route path="/signup" component={signup} />
          {/* User */}
          <Route path="/home" component={Home} />
          <Route path="/bookapp" component={BookApp} />
          <Route path="/bookings" component={Bookings} />
          <Route path="/description" component={MedDes} />
          <Route path="/updateProfile" component={UpdateProfile} />

          {/* Doctor */}

          <Route path="/doctor/home" component={DocHome} />
          <Route path="/doctor/appreq" component={AppRequest} />
          <Route path="/doctor/yourappointments" component={YourAppointments} />
          <Route path="/doctor/addDescription" component={AddDescription} />
          <Route path="/doctor/updateProfile" component={DocProfile} />

          {/* Admin */}
          <Route path="/admin/home" component={AdminHome} />
          <Route path="/admin/addDoctor" component={AdminAddDoc} />
          <Route path="/admin/editDoctor" component={AdminEditDoc} />
          <Route path="/admin/updateProfile" component={AdminProfile} />
      </Router>
  );
}

export default App;
