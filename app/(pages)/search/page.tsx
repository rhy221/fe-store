import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Model } from "./Model";
import { FilterBar } from "./FilterBar";

export default function Search() {
  return (
    <div className="mx-8 my-4">
      {/* {filter} */}
      <div className="mb-2">
        <FilterBar />
      </div>
      {/* {products} */}
      <div className="mb-4">
        <ModelsListing Models={models}/>
      </div>  
      {/* {Pagination} */}
      <div>
         <PagePagination />
      </div>
    </div>
  );
}


let models: Model[] = 
[
  {id: "f", name: "Dress", thumbUrl: "/clothes_ex1.jpg", price: 20.00, currency: "$"},
  {id: "f", name: "Dress", thumbUrl: "/clothes_ex1.jpg", price: 20.00, currency: "$"},
  {id: "f", name: "Dress", thumbUrl: "/clothes_ex1.jpg", price: 20.00, currency: "$"},
  {id: "f", name: "Dress", thumbUrl: "/clothes_ex1.jpg", price: 20.00, currency: "$"},
  {id: "f", name: "Dress", thumbUrl: "/clothes_ex1.jpg", price: 20.00, currency: "$"},
  {id: "f", name: "Dress", thumbUrl: "/clothes_ex1.jpg", price: 20.00, currency: "$"},
  {id: "f", name: "Dress", thumbUrl: "/clothes_ex1.jpg", price: 20.00, currency: "$"},
  {id: "f", name: "Dress", thumbUrl: "/clothes_ex1.jpg", price: 20.00, currency: "$"},
  {id: "f", name: "Dress", thumbUrl: "/clothes_ex1.jpg", price: 20.00, currency: "$"},
  {id: "f", name: "Dress", thumbUrl: "/clothes_ex1.jpg", price: 20.00, currency: "$"},
  {id: "f", name: "Dress", thumbUrl: "/clothes_ex1.jpg", price: 20.00, currency: "$"},
  
]

function ModelsListing({Models}: {Models:Model[]})
{
  return (
    <div className="grid grid-cols-4 grid-flow-row gap-4 w-full">
      {Models.map((m, index) => (
        <Model key={index} {...m}/>
      ))}
    </div>
  )
}

function PagePagination() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">2</PaginationLink>
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
  )
}