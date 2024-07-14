interface DetailsAt {
  createAt: Date;
  updateAt: Date;
}

interface PageProfile {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: DetailsAt;
}

const page1: PageProfile = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2: PageProfile = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
