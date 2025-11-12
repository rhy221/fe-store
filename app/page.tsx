import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <div className="flex flex-col relative bg-background">
      {/* <div className="grid grid-cols-[2fr_1fr] w-full ">
        <div className="grid grid-cols-[4fr_1fr]">
          <div className="flex flex-col justify-around size-full text-4xl font-bruno-ace">
            <div className="self-start">
              <span >EFFORTLESS.</span>
            </div>
            <div className="self-center">
              <span>TIMELESS.</span>
            </div>
            <div className="self-end">
              <span>DIGITAL.</span>
            </div>
          </div>
          <div className="m-5">
            <Button className="text-2xl">GO DIGITAL</Button>
          </div>
        </div>
        <div>
          <img src="/background2.jpg" alt="bg" className="w-full h-auto" />
        </div>
      </div> */}

      <div className="sticky w-full">
        <NavBar />
      </div>

      <div className="relative w-full h-[100vh] overflow-hidden bg-[url('/home_bg3.png')] bg-no-repeat bg-cover bg-center ">
        
          <div className="absolute flex flex-col left-20 top-20 text-6xl font-bruno-ace z-1">
            <div className="self-start">
              <span >EFFORTLESS.</span>
            </div>
            <div className="self-center">
              <span>TIMELESS.</span>
            </div>
            <div className="self-end">
              <span className="italic">DIGITAL.</span>
            </div>
          </div>

          <Link href="/search">
            <div className="absolute left-20 bottom-20">
              <Button className="text-2xl px-20 py-2 font-montserrat">EXPLORE</Button>
            </div>
          </Link>

        <div className="absolute left-1/2 -translate-x-1/2">
          <Image src="/home_bg1.png" alt="bg" width={800} height={1000} className="w-[80vw] h-auto" />
        </div>
      </div>

      <div className="absolute flex flex-col w-[350px] right-64 top-48 font-montserrat  z-1">
            <p>
              <span className="font-bold">Step into a new realm of fashion</span>  with our collection of digital clothes, where imagination meets technology
            </p>
      </div>

      <div className="w-full">
        <Footer />
      </div>

      {/* <div className=" py-20 px-40">
        <div className="mb-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold">Explore Digital Fashion</h3>
            <p>Find the perfect one that fit your styles</p>
          </div>
        </div>
        
        <div>
          <ModalListing modals={modals}/>
        </div>
      </div> */}
    </div>
  );
}

// type Modal = {
//   id: string;
//   name: string;
//   thumbUrl: string;
// }

// let modals: Modal[] = 
// [
//   {id: "f", name: "duckkkk", thumbUrl: "/clothes_ex1.jpg"},
//   {id: "f", name: "duckkkk", thumbUrl: "/clothes_ex1.jpg"},
//   {id: "f", name: "duckkkk", thumbUrl: "/clothes_ex1.jpg"},
//   {id: "f", name: "duckkkk", thumbUrl: "/clothes_ex1.jpg"},
//   {id: "f", name: "duckkkk", thumbUrl: "/clothes_ex1.jpg"},
//   {id: "f", name: "duckkkk", thumbUrl: "/clothes_ex1.jpg"},
//   {id: "f", name: "duckkkk", thumbUrl: "/clothes_ex1.jpg"},
//   {id: "f", name: "duckkkk", thumbUrl: "/clothes_ex1.jpg"},
// ]


// function Modal({name, thumbUrl}: Modal) {
//   return (
//       <Card className="overflow-hidden py-0 ">
//         <div className="flex flex-col">
//           <div className="relative w-full h-40">
//             <Image src={thumbUrl} alt="Thumb" fill/>
//           </div>
//           <div className="px-4 py-2">
//             <h3>{name}</h3>
//           </div>
//         </div>
//       </Card>    
//   )
// }

// function ModalListing({modals}: {modals:Modal[]})
// {
//   return (
//     <div className="grid grid-cols-4 grid-flow-row gap-4 w-full">
//       {modals.map((m, index) => (
//         <Modal key={index} {...m}/>
//       ))}
//     </div>
//   )
// }
