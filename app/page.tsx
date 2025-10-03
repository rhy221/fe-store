import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toggle } from "@/components/ui/toggle";
import { Car, Pencil, PersonStanding, Search, Star, ThumbsUp, UserPlus, UserRoundPlus } from "lucide-react";
import Image from "next/image";



export default function Home() {
  return (
    <div className="mx-8 my-4">
      {/* {filter} */}
      <div className="flex justify-between gap-2 mb-2">
        <Toggle variant={"outline"} className="flex-1">On Sale</Toggle>
        <Toggle variant={"outline"} className="flex-1">Free</Toggle>
        <Toggle variant={"outline"} className="flex-1">Auction</Toggle>
        <Popover>
          <PopoverTrigger asChild className="w-80">
            <Button variant={"outline"}>Price</Button>
          </PopoverTrigger>
          <PopoverContent className="">
            <div>
              fdf
            </div>
          </PopoverContent>
        </Popover>
        <Toggle variant={"outline"} className="flex-1">Sale</Toggle>
        <Toggle variant={"outline"} className="flex-1">Sale</Toggle>
        <Toggle variant={"outline"} className="flex-1">Sale</Toggle>
        <Toggle variant={"outline"} className="flex-1">Sale</Toggle>
        <Select>
          <SelectTrigger defaultValue="bestmatch" className="w-60">
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bestmatch">Best match</SelectItem>
            <SelectItem value="topselling">Top selling</SelectItem>
            <SelectItem value="neweast">Neweast</SelectItem>
            <SelectItem value="oldest">Oldeast</SelectItem>
            <SelectItem value="higherprice">Higher price</SelectItem>
            <SelectItem value="lowerprice">Lower price</SelectItem>
          </SelectContent>
        </Select>
        <Button variant={"outline"}>Reset</Button>

      </div>
      {/* {products} */}
      <div className="mb-4">
        <ModalListing modals={modals}/>
      </div>  

      <div>
         <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
      </div>
    </div>
  );
}

type Modal = {
  id: string;
  name: string;
  thumbUrl: string;
}

let modals: Modal[] = 
[
  {id: "f", name: "duckkkk", thumbUrl: "/pathetic.jpg"},
  {id: "f", name: "duckkkk", thumbUrl: "/pathetic.jpg"},
  {id: "f", name: "duckkkk", thumbUrl: "/pathetic.jpg"},
  {id: "f", name: "duckkkk", thumbUrl: "/pathetic.jpg"},
  {id: "f", name: "duckkkk", thumbUrl: "/pathetic.jpg"},
]


function Modal({name, thumbUrl}: Modal) {
  return (
      <Card className="w-full overflow-hidden py-0 ">
        <div className="flex flex-col">
          <div className="relative">
            <img src={thumbUrl} alt="Thumb" className="w-full h-60"/>
          </div>
          <div className="px-4 py-2">
            <h3>{name}</h3>
          </div>
        </div>
      </Card>    
  )
}

function ModalListing({modals}: {modals:Modal[]})
{
  return (
    <div className="grid grid-cols-4 grid-flow-row gap-4 w-full">
      {modals.map((m, index) => (
        <Modal key={index} {...m}/>
      ))}
    </div>
  )
}
