import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";

export type Model = {
  id: string;
  name: string;
  thumbUrl: string;
  price: number;
  currency: string;
  tags?: string[];
}

export function Model({name, thumbUrl}: Model) {
  return (
      <Card className="w-full overflow-hidden py-0 ">
        <div className="flex flex-col">
            {/* infor */}
            <div className="relative w-full aspect-[16/12] group">
                {/* image */}
                <div className="absolute inset-0 z-0">
                    <Image src={thumbUrl} alt="Thumb" fill />
                </div>

                <div className="absolute inset-2 z-1">
                    {/* price */}
                    <div className="absolute top-0 right-0 flex">
                        <span className="rounded-md bg-white p-2 font-bold">$25.00</span>
                    </div>
                    {/* tags */}
                    <div className="absolute bottom-0 left-0">
                        {/*  */}
                    </div>
                </div>

                <div className="absolute inset-2 z-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 right-0 flex ">
                        <Button className="p-6">
                            <ShoppingCart className="size-6" />
                        </Button>
                    </div>
                </div>

            </div>  
            {/* name */}
            <div className="px-4 py-2">
                <h3>{name}</h3>
            </div>
        </div>
      </Card>    
  )
}