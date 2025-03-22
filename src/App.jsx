import Spreadsheet from './components/Spreadsheet';
import FileUploader from './components/FileUploader';

function App() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Excel-Like Spreadsheet</h1>
      <FileUploader />
      <Spreadsheet />
    </div>
  );
}

export default App;
