"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const UseCasePoint = () => {
  const [UUCW_UAW, setUUCW_UAW] = useState<number>(0);
  const [TCF, setTCF] = useState<number>(0);
  const [ECF, setECF] = useState<number>(0);
  const [UCP, setUCP] = useState<string>("0.00");

  const handleChange = (value: number, setter: (value: number) => void) => {
    if (!isNaN(value)) {
      if (value < 0) value = 0;
      else setter(value);
    }
  };

  const handleReset = () => {
    setUUCW_UAW(0);
    setTCF(0);
    setECF(0);
    setUCP("0.00");
  };

  const calculateUCP = () => {
    setUCP((UUCW_UAW * TCF * ECF).toFixed(2));
  };

  return (
    <Card className="w-[500px]">
      <CardHeader>
        <CardTitle>Use Case Point</CardTitle>
        <CardDescription>
          Use Case Points (UCP) is a software estimation technique used to
          estimate the software size based on the user requirements.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center gap-4">
            <Label htmlFor="UUCW_UAW" className="basis-24 text-right">
              UUCW + UAW
            </Label>
            <Input
              id="UUCW_UAW"
              className="flex-1"
              value={UUCW_UAW}
              onChange={(e) =>
                handleChange(Number(e.target.value), setUUCW_UAW)
              }
              onClick={(e) => (e.target as HTMLInputElement).select()}
            />
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="TCF" className="basis-24 text-right">
              TCF
            </Label>
            <Input
              id="TCF"
              className="flex-1"
              value={TCF}
              onChange={(e) => handleChange(Number(e.target.value), setTCF)}
              onClick={(e) => (e.target as HTMLInputElement).select()}
            />
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="ECF" className="basis-24 text-right">
              ECF
            </Label>
            <Input
              id="ECF"
              className="flex-1"
              value={ECF}
              onChange={(e) => handleChange(Number(e.target.value), setECF)}
              onClick={(e) => (e.target as HTMLInputElement).select()}
            />
          </div>
          <div className="flex items-center gap-4">
            <Label htmlFor="UCP" className="basis-24 text-right">
              UCP
            </Label>
            <Label className="flex h-10 flex-1 items-center rounded-md border border-input px-3 py-2 text-sm">
              {UCP}
            </Label>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full justify-between">
          <Button variant={"outline"} asChild>
            <Link href="/">Back Home</Link>
          </Button>
          <div className="flex gap-4">
            <Button variant={"ghost"} onClick={handleReset}>
              Reset
            </Button>
            <Button onClick={calculateUCP}>Calculate UCP</Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UseCasePoint;
