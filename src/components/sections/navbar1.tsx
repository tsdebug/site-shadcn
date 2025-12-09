import { Book, Menu, Sunset, Trees, Zap } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "./ModeToggle";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
}

const Navbar1 = ({
  logo = {
    url: "https://www.bcrec.ac.in",
    src: "/logo.jpeg",
    alt: "BCREC logo",
    title: "Dr. B.C. Roy Engineering College, Durgapur",
  },
  menu = [
    {
      title: "Home",
      url: "#",
    },
    {
      title: "About",
      url: "#",
      items: [
        {
          title: "Overview",
          url: "#",
        },
        {
          title: "Mission & Vision",
          url: "#",
        },
        {
          title: "News",
          url: "#",
        },
        {
          title: "Events",
          url: "#",
        },
        {
          title: "Service Rule of BCREC",
          url: "#",
        },
      ],
    },
    {
      title: "Departments",
      url: "#",
      items: [
        {
          title: "Basic Science and Humanities",
          url: "#",
        },
        {
          title: "Civil Engineering",
          url: "#",
        },
        {
          title: "Computer Science and Design",
          url: "#",
        },
        {
          title: "Computer Science and Engineering",
          url: "#",
        },
        {
          title: "Computer Science and Engineering (Artifcial Intelligence & Machine Learning)",
          url: "#",
        },
        {
          title: "Computer Science and Engineering (Data Science)",
          url: "#",
        },
        {
          title: "Computer Science and Engineering (Cyber Security)",
          url: "#",
        },
        {
          title: "Information Technology",
          url: "#",
        },
      ],
    },
    {
      title: "Academics",
      url: "#",
      items: [
        {
          title: "Programmes",
          url: "#",
        },
        {
          title: "Under Graduate",
          url: "#",
        },
        {
          title: "Old Syllabus",
          url: "#",
        },
      ],
    },
    {
      title: "Placement",
      url: "#",
      items: [
        {
          title: "General Info",
          url: "#",
        },
        {
          title: "Placement Details",
          url: "#",
        },
        {
          title: "Training Details",
          url: "#",
        },
      ]
    },
    {
      title: "Contacts",
      url: "#",
    },
  ],
}: Navbar1Props) => {
  return (
    <section className="py-4 relative z-50">
      <div className="container">
        {/* Desktop Menu */}
        <nav className="hidden items-center justify-between lg:flex px-4">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-14 dark:invert"
                alt={logo.alt}
              />
              <span className="text-lg font-semibold tracking-tighter mt-2 ml-1">
                {logo.title}
              </span>
            </a>
            <div className="flex items-center mt-2 ml-10 mr-2">
              <NavigationMenu viewport={false}>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <ModeToggle />
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden px-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-12 dark:invert"
                alt={logo.alt}
              />
            </a>
            <div className="flex items-center gap-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto">
                  <SheetHeader>
                    <SheetTitle>
                      <a href={logo.url} className="flex items-center gap-2">
                        <img
                          src={logo.src}
                          className="max-h-8 dark:invert"
                          alt={logo.alt}
                        />
                      </a>
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col gap-6 p-4">
                    <Accordion
                      type="single"
                      collapsible
                      className="flex w-full flex-col gap-4"
                    >
                      {menu.map((item) => renderMobileMenuItem(item))}
                    </Accordion>
                  </div>
                </SheetContent>
              </Sheet>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          {item.items.map((subItem) => (
            <NavigationMenuLink asChild key={subItem.title} className="w-80">
              <SubMenuLink item={subItem} />
            </NavigationMenuLink>
          ))}
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors"
      >
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="text-md py-0 font-semibold hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <SubMenuLink key={subItem.title} item={subItem} />
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <a key={item.title} href={item.url} className="text-md font-semibold">
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="hover:bg-muted hover:text-accent-foreground flex min-w-80 select-none flex-row gap-4 rounded-md p-3 leading-none no-underline outline-none transition-colors"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-muted-foreground text-sm leading-snug">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar1 };
