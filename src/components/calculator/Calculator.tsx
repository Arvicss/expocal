import { DataContext } from "@/context/DataContext";
import { getExponentiation } from "@/functions/exponentiation";
import { calculatorKey } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { useContext, useEffect, useRef } from "react";
import { ChevronUp, Delete, Dot, Equal } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";

type calculatorProps = {
	className?: string;
}

export const Calculator = ({ className } : calculatorProps) => {
	const { setSolution } = useContext(DataContext)
	const inputRef = useRef<HTMLInputElement>(null);

  const addInput = (value: string) => {
    if (value === "^" && inputRef.current!.value.includes("^")) 
      return (inputRef.current!.value)
    
    return (inputRef.current!.value += value);
  };

  const removeInput = () => {
    setSolution!(null);
    return (inputRef.current!.value = inputRef.current!.value.slice(0, -1));
  };

  const clearInput = () => {
    setSolution!(null);
    return (inputRef.current!.value = "");
  };

  const calculate = () => {
    if (inputRef.current?.value === "" || !inputRef.current!.value.includes("^")) return;
    const equation = inputRef.current?.value.split('^');
		if (!equation?.at(0) || !equation?.at(1)) return;
		setSolution!(getExponentiation(parseInt(equation?.at(0) ?? ''), parseInt(equation?.at(1) ?? '')));
  }

  useEffect(() => {
		const keyDownHandler = (event: KeyboardEvent) => {
			if (calculatorKey.includes(event.key)) {
				event.preventDefault();
				if (event.key === "Backspace") {
					removeInput();
				} else if (event.key === "Escape") {
					clearInput();
				} else if (event.key === "Enter") {
					calculate();
				} else {
					addInput(event.key);
				}
			}
		};

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  });

  return (
		<Card className={cn(className)}>
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
				<Button className="col-span-1 text-xl" onClick={clearInput}>
				AC
				</Button>
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
				<div className="col-span-1" />
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
				<Button className="col-span-1" onClick={() => calculate()}>
					<Equal />
				</Button>
			</CardContent>
		</Card>
  );
}