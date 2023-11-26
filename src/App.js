import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import Routers from './Routers/Routers';
import store from 'store';

const toastifyContainerConfig = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: true,
  pauseOnHover: true,
  theme: 'light',
};

function App() {
  return (
    <Provider store={store}>
      <Routers />
      <ToastContainer {...toastifyContainerConfig} />
    </Provider>
  );
}

export default App;
