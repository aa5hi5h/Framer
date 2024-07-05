import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { Image, Menu } from "lucide-react";
import Searchbar from "../../../components/props/Searchbar";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SaasNavbar  = () => {
    return (
        <div className="flex gap-4 border-b border-gray-300 p-3 items-center justify-between">
          <div className="hidden md:flex items-center gap-4 mr-8">
          <h1 className="text-2xl hidden md:flex font-bold tracking-tight cursor-pointer pr-4">Logo</h1>
            <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu 1</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                     Logo
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                     List your featured Product here
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
             
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu 2</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <div>
              <li className=" mt-4 text-lg font-medium">Item 1</li>
              <p className="text-sm leading-tight text-muted-foreground">
                     List your featured Product here
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Item 1</li>
              <p className="text-sm leading-tight text-muted-foreground">
                     List your featured Product here
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Item 1</li>
              <p className="text-sm leading-tight text-muted-foreground">
                     List your featured Product here
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Item 1</li>
              <p className="text-sm leading-tight text-muted-foreground">
                     List your featured Product here
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Item 1</li>
              <p className="text-sm leading-tight text-muted-foreground">
                     List your featured Product here
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Item 1</li>
              <p className="text-sm leading-tight text-muted-foreground">
                     List your featured Product here
                    </p>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu 3</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <div>
              <li className=" mt-4 text-lg font-medium">Page 1</li>
              <p className="text-sm leading-tight text-muted-foreground">
                     Lorem ipsum dolor sit amet porro quisquam est qui dolorem
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Page 2</li>
              <p className="text-sm leading-tight text-muted-foreground">
              Lorem ipsum dolor sit amet porro quisquam est qui dolorem
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Page 3</li>
              <p className="text-sm leading-tight text-muted-foreground">
              Lorem ipsum dolor sit amet porro quisquam est qui dolorem
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Page 4</li>
              <p className="text-sm leading-tight text-muted-foreground">
              Lorem ipsum dolor sit amet porro quisquam est qui dolorem
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Page 5</li>
              <p className="text-sm leading-tight text-muted-foreground">
              Lorem ipsum dolor sit amet porro quisquam est qui dolorem
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Page 6</li>
              <p className="text-sm leading-tight text-muted-foreground">
              Lorem ipsum dolor sit amet porro quisquam est qui dolorem
                    </p>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu 4</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <div>
              <li className=" mt-4 text-lg font-medium">Product 1</li>
              <p className="text-sm leading-tight text-muted-foreground">
              Lorem ipsum dolor sit amet porro quisquam est qui dolorem
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Product 2</li>
              <p className="text-sm leading-tight text-muted-foreground">
                     List your featured Product here and it will help boost the sale
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Product 3</li>
              <p className="text-sm leading-tight text-muted-foreground">
                     List your featured Product here 
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Product 4</li>
              <p className="text-sm leading-tight text-muted-foreground">
                     List your featured Product here
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Product 5</li>
              <p className="text-sm leading-tight text-muted-foreground">
                     List your featured Product here
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Product 6</li>
              <p className="text-sm leading-tight text-muted-foreground">
                     List your featured Product here
                    </p>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Menu 5</NavigationMenuTrigger>
          <NavigationMenuContent>
          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <div>
              <li className=" mt-4 text-lg font-medium">Item 1</li>
              <p className="text-sm leading-tight text-muted-foreground">
              Lorem ipsum dolor sit amet porro quisquam est qui dolorem
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Item 2</li>
              <p className="text-sm leading-tight text-muted-foreground">
              Lorem ipsum dolor sit amet porro quisquam est qui dolorem
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Item 3</li>
              <p className="text-sm leading-tight text-muted-foreground">
              Lorem ipsum dolor sit amet porro quisquam est qui dolorem
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Item 4</li>
              <p className="text-sm leading-tight text-muted-foreground">
              Lorem ipsum dolor sit amet porro quisquam est qui dolorem
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Item 5</li>
              <p className="text-sm leading-tight text-muted-foreground">
              Lorem ipsum dolor sit amet porro quisquam est qui dolorem
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Item 6</li>
              <p className="text-sm leading-tight text-muted-foreground">
              Lorem ipsum dolor sit amet porro quisquam est qui dolorem
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Item 7</li>
              <p className="text-sm leading-tight text-muted-foreground">
              Lorem ipsum dolor sit amet porro quisquam est qui dolorem
                    </p>
              </div>
              <div>
              <li className=" mt-4 text-lg font-medium">Item 8</li>
              <p className="text-sm leading-tight text-muted-foreground">
              Lorem ipsum dolor sit amet porro quisquam est qui dolorem
                    </p>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
      </NavigationMenuList>
    </NavigationMenu>
        </div>
        <div className="flex md:hidden mr-8">
        <Sheet>
                       <SheetTrigger asChild><Menu /></SheetTrigger>
                            <SheetContent className="space-y-4" side={"left"}>
                                <SheetTitle className="text-3xl font-bold tracking-tight cursor-pointer">Logo</SheetTitle>
                                <SheetTitle>Link one</SheetTitle>
                                <SheetTitle>Link two</SheetTitle>
                                <SheetTitle>Link three</SheetTitle>
                            </SheetContent>
                        </Sheet>
        </div>
        <div className="flex w-full gap-2 ">
             <div className="flex w-full md:hidden lg:flex">
                <Searchbar />
            </div>
          <Button>SignIn</Button>
        </div>
        </div>
    )
}

export default SaasNavbar