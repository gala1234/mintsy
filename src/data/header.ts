type Submenu = {
  text: string;
  link: string;
};

type Header = {
  text: string;
  link: string;
  submenu?: Submenu[];
  type?: "button";
};

export const header: Header[] = [
  {
    text: "Home",
    link: "/",
    submenu: [
      {
        text: "How It Works",
        link: "/how-it-works",
      },
      {
        text: "Benefits",
        link: "/#benefits",
      },
      {
        text: "Testimonials",
        link: "/#testimonials",
      },
    ],
  },
  {
    text: "Gallery",
    link: "/gallery",
  },
  {
    text: "Create",
    link: "/create-ai-art",
  },
  {
    text: "Pricing",
    link: "/ai-art-pricing",
  },
  {
    text: "Login",
    link: "/login",
    type: "button",
  },
];
