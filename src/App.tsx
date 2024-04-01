import { Calculator } from "@/components/calculator/Calculator";
import { NavBar } from "@/components/home/NavBar";
import { Solution } from "./components/calculator/Solution";
import DataProvider from "./context/DataContext";
import { MathJaxContext } from "better-react-mathjax"

function App() {
  return (
    <div className="flex flex-col h-screen w-screen overflow-x-hidden">
      <NavBar />
      <div className="flex-1 flex justify-center">
        <div className="w-90 sm:w-1/3 h-1/2  my-20 ">
          <DataProvider>
            <MathJaxContext>
              <Solution />
            </MathJaxContext>
            <Calculator 
              className='border rounded-none'
            />
          </DataProvider>
        </div>
      </div>
    </div>
  );
}

export default App;