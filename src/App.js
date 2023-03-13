import Header from "./components/Header";
import Form from "./components/Form";
import PreviewData from "./components/PreviewData";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Header />

      <section>
        {/* <!-- Input Data --> */}
        <Form />

        {/* <!-- Preview Data --> */}
        <PreviewData />
      </section>
    </Provider>
  );
}

export default App;
