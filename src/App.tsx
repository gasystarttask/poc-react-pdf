import { PDFViewer } from "@react-pdf/renderer";
import { MyDocument } from "./DocExample";
import "./App.css";

function App() {
  return (
    <PDFViewer className="pdf-viewer">
      <MyDocument />
    </PDFViewer>
  );
}

export default App;
