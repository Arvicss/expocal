import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableRow
} from "@/components/ui/table";
import { DataContext } from "@/context/DataContext";
import { MathJax } from "better-react-mathjax";
import { Info } from "lucide-react";
import { useContext } from "react";
import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "../ui/hover-card";

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
                      <HoverCard>
                        <HoverCardTrigger className="text-center">
                          <Info />
                        </HoverCardTrigger>
                        <HoverCardContent className="w-100">
                          <MathJax>{expression.formulaUsed}</MathJax>
                        </HoverCardContent>
                      </HoverCard>
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
                    <HoverCard>
                      <HoverCardTrigger className="text-center">
                        <Info />
                      </HoverCardTrigger>
                      <HoverCardContent className="w-100">
                        <MathJax>{`\\({Multiplication} \\ {Count: } \\ ${solution?.multiplicationCount} \\)`}</MathJax>
                      </HoverCardContent>
                    </HoverCard>
                  }
                </TableCell>
              </TableRow>
            </TableFooter>
          </>
        ) : null}

        {solution === null ? (
          <TableRow>
            <TableCell className="text-center border" colSpan={3}>
              <MathJax>{`\\({Enter} \\ {a} \\ {exponential} \\ {expression} \\ {to} \\ {solve...} \\)`}</MathJax>
            </TableCell>
          </TableRow>
        ) : null}
      </Table>
    </div>
  );
};
