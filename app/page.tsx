import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";



export default function Home() {
  return (
    <div className="bg-background">
      <div className="grid grid-cols-[2fr_1fr] w-full bg-white">
        <div className="grid grid-cols-[4fr_1fr]">
          <div className="flex flex-col justify-around size-full text-9xl font-montserrat">
            <div className="self-start">
              <span >Effortless.</span>
            </div>
            <div className="self-center">
              <span>Timeless.</span>
            </div>
            <div className="self-end">
              <span>Digital.</span>
            </div>
          </div>
          <div className="m-5">
            <Button className="text-2xl">GO DIGITAL</Button>
          </div>
        </div>
        <div>
          <img src="/background2.jpg" alt="bg" className="w-full h-auto" />
        </div>
      </div>

      <div className="bg-white py-20 px-40">
        <div className="mb-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Explore Digital Fashion</h3>
            <p>Find the perfect one that fit your styles</p>
          </div>
        </div>
        
        <div>
          <ModalListing modals={modals}/>
        </div>
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
  {id: "f", name: "duckkkk", thumbUrl: "/clothes_ex1.jpg"},
  {id: "f", name: "duckkkk", thumbUrl: "/clothes_ex1.jpg"},
  {id: "f", name: "duckkkk", thumbUrl: "/clothes_ex1.jpg"},
  {id: "f", name: "duckkkk", thumbUrl: "/clothes_ex1.jpg"},
  {id: "f", name: "duckkkk", thumbUrl: "/clothes_ex1.jpg"},
  {id: "f", name: "duckkkk", thumbUrl: "/clothes_ex1.jpg"},
  {id: "f", name: "duckkkk", thumbUrl: "/clothes_ex1.jpg"},
  {id: "f", name: "duckkkk", thumbUrl: "/clothes_ex1.jpg"},
]


function Modal({name, thumbUrl}: Modal) {
  return (
      <Card className="overflow-hidden py-0 ">
        <div className="flex flex-col">
          <div className="relative w-full h-40">
            <Image src={thumbUrl} alt="Thumb" fill/>
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
