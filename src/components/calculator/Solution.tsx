import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableRow,
} from "@/components/ui/table";
import { DataContext } from "@/context/DataContext";
import { MathJax } from "better-react-mathjax";
import { Info } from "lucide-react";
import { useContext } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export const Solution = () => {
  const { solution } = useContext(DataContext);

  return (
    <div className="border">
      <Table>
        {solution !== null ? (
          <>
            <TableBody>
              {solution?.expressions.map((expression, index) => (
                <TableRow key={index}>
                  <TableCell className="text-center border" width="1">
                    <MathJax>{`\\({Step: } \\ ${index + 1} \\)`}</MathJax>
                  </TableCell>
                  <TableCell className="text-left border">
                    <MathJax>{expression.expression}</MathJax>
                  </TableCell>
                  <TableCell className="text-center border" width={10}>
                    {
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger>
                            <Info />
                          </TooltipTrigger>
                          <TooltipContent>
                            <MathJax>{expression.formulaUsed}</MathJax>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    }
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell className="text-center border">
                  <MathJax>{`\\({Answer:} \\)`}</MathJax>
                </TableCell>
                <TableCell className="text-left">
                  <MathJax>{solution?.answer}</MathJax>
                </TableCell>
                <TableCell className="text-center border" width={10}>
                  {
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Info />
                        </TooltipTrigger>
                        <TooltipContent>
                          <MathJax>{`\\({Multiplication} \\ {Count: } \\ ${solution?.multiplicationCount} \\)`}</MathJax>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  }
                </TableCell>
              </TableRow>
            </TableFooter>
          </>
        ) : null}

        {solution === null ? (
          <TableBody>
            <TableRow>
              <TableCell className="text-center border" colSpan={3}>
                <MathJax>{`\\({Enter} \\ {a} \\ {exponential} \\ {expression} \\ {to} \\ {solve...} \\)`}</MathJax>
              </TableCell>
            </TableRow>
          </TableBody>
        ) : null}
      </Table>
    </div>
  );
};
