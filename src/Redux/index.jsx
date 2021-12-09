import { Provider } from "react-redux";
import store from "../app/store";
import Counter from "./components/Counter";

const Redux = () => {
    return(
        <div style={{backgroundColor: 'grey', overflowY:'hidden'}}>
            <Provider store={store}>
                <Counter/>
            </Provider>
        </div>
    )
}

export default Redux;