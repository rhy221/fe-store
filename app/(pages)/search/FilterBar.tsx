import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";


export function FilterBar() {
  return (
    <div className="flex justify-between gap-2">
        <Toggle variant={"outline"} className="flex-1 bg-white">On Sale</Toggle>
        <Toggle variant={"outline"} className="flex-1 bg-white">Free</Toggle>
        <Toggle variant={"outline"} className="flex-1 bg-white">Auction</Toggle>
        <Popover>
          <PopoverTrigger asChild className="w-80">
            <Button variant={"outline"} className="bg-white">Price</Button>
          </PopoverTrigger>
          <PopoverContent className="">
            <PricePopoverContent priceRanges={priceRanges} currency="$" />
          </PopoverContent>
        </Popover>
        <Toggle variant={"outline"} className="flex-1 bg-white">Sale</Toggle>
        <Select>
          <SelectTrigger className="w-60 bg-white">
            <SelectValue defaultValue="bestmatch"/>
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
        <Button variant={"outline"} className="bg-white">Reset</Button>

      </div>
  );
}

type PriceRange = {
    lowest: number;
    highest: number;
}

const priceRanges: PriceRange[] =
[
    {lowest: 2, highest: 10},
    {lowest: 10, highest: 20},
    {lowest: 20, highest: 50},
    {lowest: 50, highest: 100},
]

function PricePopoverContent({priceRanges, currency}: {priceRanges: PriceRange[], currency:string}) {
    return (
        <div>
            <div className="mb-4">
                <p>Custom price range</p>
                <div className="flex items-center justify-between">
                    <Input className="w-20"/>
                    <span className="text-5xl">-</span>
                    <Input className="w-20"/>    
                </div>                
            </div>
            <div>
                <p>Quick selections</p>
                <div className="flex flex-col">
                    <div className="flex flex-col gap-2">
                        {priceRanges.map((pr, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <Checkbox />
                                <p>{`${currency}${pr.lowest} - ${currency}${pr.highest}`}</p>
                            </div>
                        )
                        )}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}