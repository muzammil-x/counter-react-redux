import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./assets/components/Header";
import DisplayCount from "./assets/components/DisplayCount";
import Container from "./assets/components/Container";
import Controls from "./assets/components/Controls";
import { useSelector } from "react-redux";
import PrivacyMsg from "./assets/components/PrivacyMsg";

function App() {
  const privacy = useSelector((store) => store.privacy);

  return (
    <center className="px-4 py-5 my-5 text-center">
      <Container>
        <Header />
        <div className="col-lg-6 mx-auto">
          {privacy ? <PrivacyMsg /> : <DisplayCount />}

          <Controls />
        </div>
      </Container>
    </center>
  );
}

export default App;
