import { Logo, LogoImage, LogoText } from "@/components/logo";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer2 = ({
  logo = {
    src: "/bcrec-logo.png",
    alt: "BCREC",
    title: "",
    url: "https://www.bcrec.ac.in",
  },
  tagline = "Empowering Innovation, Research and Excellence",
  menuItems = [
    {
      title: "About",
      links: [
        { text: "Admission", url: "#" },
        { text: "Alumni", url: "#" },
        { text: "IQAC", url: "#" },
        { text: "Examination", url: "#" },
        { text: "Career", url: "#" },
        { text: "Library", url: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "Approval/Accreditation", url: "#" },
        { text: "Collaboration", url: "#" },
        { text: "Feedbacks", url: "#" },
        { text: "Contact", url: "#" },
        { text: "Tenders", url: "#" },
        { text: "Infrastructure", url: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { text: "Notice", url: "#" },
        { text: "Gallery", url: "#" },
        { text: "Downloads", url: "#" },
        { text: "Disclosure", url: "#" },
        { text: "Employee Corner", url: "#" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Facebook", url: "#" },
        { text: "Twitter", url: "#" },
        { text: "Instagram", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
    },
  ],
  copyright = "© 2025 bcrec.ac.in. All rights reserved.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "#" },
    { text: "Privacy Policy", url: "#" },
  ],
}: Footer2Props) => {
  return (
    <section className="py-32 px-4">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <Logo url="https://bcrec.ac.in">
                  <LogoImage
                    src={logo.src}
                    alt={logo.alt}
                    title={logo.title}
                    className="h-10 dark:invert"
                  />
                  <LogoText className="text-xl">{logo.title}</LogoText>
                </Logo>
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="text-muted-foreground space-y-4">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="hover:text-primary font-medium"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-muted-foreground mt-24 flex flex-col justify-center gap-4 border-t pt-8 text-sm font-medium md:flex-row items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="hover:text-primary underline">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
