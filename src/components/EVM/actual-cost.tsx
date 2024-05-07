// "use client";

// import { useState, useEffect, useContext } from "react";
// import { memo } from "react";

// import { Input } from "@/components/ui/input";
// import { contextEVM } from "@/components/EVM/home";

// const ActualCost = () => {
//   const { rows, columns, cumulativeActualCosts, setCumulativeActualCosts } =
//     useContext(contextEVM);
//   const [data, setData] = useState(
//     Array(rows)
//       .fill(0)
//       .map(() => Array(columns).fill(0)),
//   );
//   const [totals, setTotals] = useState<number[]>([]);
//   const cumulative = cumulativeActualCosts;
//   const setCumulative = setCumulativeActualCosts;

//   useEffect(() => {
//     const newTotals = Array.from({ length: columns }).map(
//       (_, i) =>
//         Array.from({ length: rows }).reduce(
//           (acc, _, j) => acc + data[j][i],
//           0,
//         ) as number,
//     );
//     setTotals(newTotals);

//     const newCumulativeActualCosts = Array.from({ length: columns }).map(
//       (_, i) => newTotals.slice(0, i + 1).reduce((acc, cost) => acc + cost, 0),
//     );
//     setCumulative(newCumulativeActualCosts);
//   }, [data, rows, columns]);

//   const handleChange = (row: number, col: number, value: number) => {
//     const newData = [...data];
//     newData[row][col] = value;
//     setData(newData);
//   };

//   console.log("ActualCost rendered");

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th></th>
//           {Array.from({ length: columns }).map((_, i) => (
//             <th key={i} className="min-w-24 p-2">
//               Week {i + 1}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {Array.from({ length: rows }).map((_, i) => (
//           <tr key={i}>
//             <td className="p-2 text-right font-bold">Activity {i + 1}</td>
//             {Array.from({ length: columns }).map((_, j) => (
//               <td key={j} className="p-2">
//                 <Input
//                   value={data[i][j]}
//                   className="text-center"
//                   onChange={(e) => handleChange(i, j, +e.target.value)}
//                 />
//               </td>
//             ))}
//           </tr>
//         ))}
//         <tr>
//           <td className="text-nowrap p-2 text-right font-bold">
//             Total Budgeted Cost
//           </td>
//           {totals.map((total, i) => (
//             <td key={i} className="text-center">
//               {total}
//             </td>
//           ))}
//         </tr>
//         <tr>
//           <td className="text-nowrap p-2 font-bold">
//             Cumulative Actual Cost (AC)
//           </td>
//           {cumulative.map((cumulativeItem, i) => (
//             <td key={i} className="text-center">
//               {cumulativeItem}
//             </td>
//           ))}
//         </tr>
//       </tbody>
//     </table>
//   );
// };

// export default memo(ActualCost);
