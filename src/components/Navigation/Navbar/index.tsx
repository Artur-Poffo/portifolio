import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/UI/shadcn/navigation-menu";
import { Navlink } from "../Navlink";

export function Navbar() {
  return (
    <NavigationMenu className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-[999] px-5 py-2 rounded-full items-center justify-center border-neutrals-600 bg-neutrals-900/90 shadow-[inset_0_1px_1px_0_rgb(255_254_249/0.3)] backdrop-blur-sm supports-[backdrop-filter]:bg-neutrals-900/60">
      <NavigationMenuList className="flex items-center gap-4">
        <NavigationMenuItem className="py-px px-2 transition-all hover:bg-neutrals-100/10 rounded-md">
          <Navlink path="/#home">Home</Navlink>
        </NavigationMenuItem>

        <NavigationMenuItem className="py-px px-2 transition-all hover:bg-neutrals-100/10 rounded-md">
          <Navlink path="/#about">Sobre</Navlink>
        </NavigationMenuItem>

        <NavigationMenuItem className="py-px px-2 transition-all hover:bg-neutrals-100/10 rounded-md">
          <Navlink path="/skills">Habilidades</Navlink>
        </NavigationMenuItem>

        <NavigationMenuItem className="py-px px-2 transition-all hover:bg-neutrals-100/10 rounded-md">
          <Navlink path="/projects">Projetos</Navlink>
        </NavigationMenuItem>

        <NavigationMenuItem className="py-px px-2 transition-all hover:bg-neutrals-100/10 rounded-md">
          <Navlink path="/#experience">Experiência</Navlink>
        </NavigationMenuItem>

        <NavigationMenuItem className="py-px px-2 transition-all hover:bg-neutrals-100/10 rounded-md">
          <Navlink path="#contact">Contato</Navlink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
