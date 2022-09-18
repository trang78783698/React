import Header from "./component/Header/Header.js";
import SideBar from "./component/SideBar/SideBar";
import HeaderContent from "./component/HeaderContent/HeaderContent.js";
import MainContent from "./component/MainContent/MainContent.js";
import './App.scss'
function App() {
  return (
    <div>
      <Header name = 'LTE' />
      <div className='container'>
        <SideBar />
        <div className='content'>
          <HeaderContent />
          <MainContent />
        </div>
      </div>
    </div>
  );
}
export default App;
