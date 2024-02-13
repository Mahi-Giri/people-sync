import appStore from "./Utils/appStore";
import Main from "./components/Main";
import { Provider } from "react-redux";

function App() {
    return (
        <Provider store={appStore}>
            <Main />
        </Provider>
    );
}

export default App;
