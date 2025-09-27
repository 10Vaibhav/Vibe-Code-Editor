import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const AddRepo = () => {
  return (
    <div
      className="group px-6 py-6 flex flex-row justify-between items-center border rounded-lg bg-muted cursor-pointer 
      transition-all duration-300 ease-in-out
      hover:bg-background hover:border-[#6c63ff] hover:scale-[1.02]
      shadow-[0_4px_16px_rgba(108,99,255,0.18),0_1.5px_7px_rgba(108,99,255,0.09)]
      hover:shadow-[0_12px_40px_rgba(108,99,255,0.23),0_2px_10px_rgba(108,99,255,0.13)]"
    >
      <div className="flex flex-row justify-center items-start gap-4">
        <Button
          variant={"outline"}
          className="flex justify-center items-center bg-white group-hover:bg-[#fff8f8] group-hover:border-[#6c63ff] group-hover:text-[#6c63ff] transition-colors duration-300"
          size={"icon"}
        >
          <ArrowDown
            size={30}
            className="transition-transform duration-300 group-hover:translate-y-1"
          />
        </Button>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold text-[#453dde]">
            Open Github Repository
          </h1>
          <p className="text-sm text-muted-foreground max-w-[220px]">
            Work with your repositories in our editor
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <Image
          src={"/github.svg"}
          alt="Open GitHub repository"
          width={150}
          height={150}
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default AddRepo;
