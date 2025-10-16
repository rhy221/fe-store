import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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

export function Model({name, thumbUrl, price, currency}: Model) {
  return (
      <Card className="w-full overflow-hidden pt-0 gap-2">
        <CardContent className="px-0">
             <div className="relative w-full aspect-square group">
                {/* image */}
                <div className="absolute inset-0 z-0">
                    <Image src={thumbUrl} alt="Thumb" fill />
                </div>
                
                <div className="absolute inset-2 z-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 right-0 flex ">
                        <Button className="p-6">
                            <ShoppingCart className="size-6" />
                        </Button>
                    </div>
                </div> 

            </div>  
        </CardContent>
        <CardFooter className="px-2">
            <div className="flex flex-col">
                {/* rating */}
                <div>
                    
                </div>
               
                {/* name */}
                <div>
                    <h3 className="font-bold">{name}</h3>
                </div>
                
                {/* description */}
                <div>

                </div>

                 {/* price */}
                <div className="flex">
                    {/* original price */}
                    <span>{`${currency} ${price}`}</span>
                    {/* discount price */}
                    <span></span>
                </div>
            </div>
        </CardFooter>
        {/* <div className="flex flex-col">
         
            <div className="px-4 py-2">
                <h3>{name}</h3>
            </div>
        </div> */}
      </Card>    
  )
}