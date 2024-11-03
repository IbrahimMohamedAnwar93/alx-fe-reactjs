import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';



function App() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
            <WelcomeMessage />
        </div>
    );
}

export default App;

