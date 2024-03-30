import { ChevronUp, Delete, Dot, Equal } from "lucide-react";
import "./App.css";
import { MaxWidthWrapper } from "./components/ui/max-width-wrapper";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader } from "./components/ui/card";
import { useEffect, useRef } from "react";
import { calculatorKey } from "./lib/constant";
import { Input } from "./components/ui/input";

function App() {
  const inputRef = useRef<HTMLInputElement>(null);

  const addInput = (value: string) => {
    return (inputRef.current!.value += value);
  };

  const removeInput = () => {
    return (inputRef.current!.value = inputRef.current!.value.slice(0, -1));
  };

  const clearInput = () => {
    return (inputRef.current!.value = "");
  };

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (calculatorKey.includes(event.key)) {
        event.preventDefault();
        if (event.key === "Backspace") {
          removeInput();
        } else if (event.key === "Escape") {
          clearInput();
        } else if (event.key === "Enter") {
          console.log("Calculating...");
        } else {
          addInput(event.key);
        }
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  return (
    <>
      <header className="w-screen border-b mx-auto p-5">
        <div className="flex items-center justify-center">
          <h1 className="text-xl font-bold">Expocal</h1>
        </div>
      </header>
      <MaxWidthWrapper>
        <div className="grid md:grid-cols-2 grid-cols-1 pt-5 px-5">
          <Card className="col-span-1">
            <CardHeader className="">
              <Input placeholder="0" ref={inputRef} />
            </CardHeader>
            <CardContent className="grid grid-cols-4 gap-3 pt-5">
              <Button
                className="col-span-1 text-xl"
                onClick={() => addInput("7")}
              >
                7
              </Button>
              <Button
                className="col-span-1 text-xl"
                onClick={() => addInput("8")}
              >
                8
              </Button>
              <Button
                className="col-span-1 text-xl"
                onClick={() => addInput("9")}
              >
                9
              </Button>
              <Button className="col-span-1" onClick={removeInput}>
                <Delete />
              </Button>

              <Button
                className="col-span-1 text-xl"
                onClick={() => addInput("4")}
              >
                4
              </Button>
              <Button
                className="col-span-1 text-xl"
                onClick={() => addInput("5")}
              >
                5
              </Button>
              <Button
                className="col-span-1 text-xl"
                onClick={() => addInput("6")}
              >
                6
              </Button>
              <div className="col-span-1" />

              <Button
                className="col-span-1 text-xl"
                onClick={() => addInput("1")}
              >
                1
              </Button>
              <Button
                className="col-span-1 text-xl"
                onClick={() => addInput("2")}
              >
                2
              </Button>
              <Button
                className="col-span-1 text-xl"
                onClick={() => addInput("3")}
              >
                3
              </Button>
              <Button className="col-span-1 text-xl" onClick={clearInput}>
                AC
              </Button>

              <Button
                className="col-span-1 text-xl"
                onClick={() => addInput("0")}
              >
                0
              </Button>
              <Button className="col-span-1" onClick={() => addInput(".")}>
                <Dot />
              </Button>
              <Button className="col-span-1" onClick={() => addInput("^")}>
                <ChevronUp />
              </Button>
              <Button className="col-span-1">
                <Equal />
              </Button>
            </CardContent>
          </Card>
        </div>
      </MaxWidthWrapper>
    </>
  );
}

export default App;
