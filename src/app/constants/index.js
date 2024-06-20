import {
  Plus,
  Route,
  Minus,
  Bell,
  ShieldAlert,
  UserCircle2,
  BookUser,
  HelpCircle,
  Bitcoin,
  Shapes,
  StickyNote,
} from "@tamagui/lucide-icons";
import * as Crypto from "expo-crypto";
import { black, white } from "./styles";

export const HomeRoute = "Home";
export const HelpRoute = "Help";
export const CoinsRoute = "Coins";
export const LearnRoute = "Learn";
export const MOMO = "Mobile Money";
export const CryptoRoute = "Crypto";
export const AccountRoute = "Account";
export const defaultRoute = "Profile";
export const SettingsRoute = "Settings";
export const DepositsRoute = "Deposits";
export const defaultUser = "Rakim Motey";
export const TransfersRoute = "Transfers";
export const TOSRoute = "Terms of Service";
export const PrivacyRoute = "Privacy Policy";
export const WithdrawalsRoute = "Withdrawals";
export const TransactionsRoute = "Transactions";
export const NotificationsRoute = "Notifications";
export const defaultImage = "https://picsum.photos/200/300";
export const CommunityGuidelinesRoute = "Community Guidelines";
export const defaultUserImage = "https://picsum.photos/200/300";
export const ReferralRoute = "Referral";
export const CryptoFavoritesRoute = "CryptoFavorites";
export const MyFunds = "My Funds";

export const currency = "$";
export const amount = "100";
export const failed = "failed";
export const success = "success";
export const pending = "pending";
export const deposit = "deposit";
export const transfer = "transfer";
export const withdrawal = "withdrawal";

const generateCode = Crypto.randomUUID();
export const referralLink = `https://google.com/${generateCode}`;

export const shareContent = {
  url: referralLink,
  message: "React Native | A framework for building native apps using React",
};

export const shareOptions = {
  dialogTitle: "Message",
  subject: "Hello",
  tintColor: "red",
};

export const mainRoutes = [
  { name: DepositsRoute },
  { name: WithdrawalsRoute },
  { name: TransfersRoute },
  { name: TransactionsRoute },
  { name: ReferralRoute },
  { name: CryptoFavoritesRoute },
];

export const menus = [
  {
    index: 1,
    name: DepositsRoute,
    icon: Plus,
    backgroundColor: black,
    color: white,
  },
  {
    index: 2,
    name: WithdrawalsRoute,
    icon: Minus,
    backgroundColor: white,
    color: black,
  },
  {
    index: 3,
    name: TransactionsRoute,
    icon: Route,
    backgroundColor: white,
    color: black,
  },
  {
    index: 4,
    name: CryptoRoute,
    icon: Bitcoin,
    backgroundColor: white,
    color: black,
  },
];

export const transactions = [
  {
    index: 1,
    imageUrl: defaultImage,
    status: "pending",
    date: "26 Aug 2023",
    amount: "+100",
    type: deposit,
    bankName: MOMO,
  },
  {
    index: 2,
    imageUrl: defaultImage,
    status: "success",
    date: "27 July 2023",
    amount: "-100",
    type: withdrawal,
    bankName: MOMO,
  },
  {
    index: 3,
    imageUrl: defaultImage,
    status: "failed",
    date: "27 July 2023",
    amount: "-1.00",
    type: transfer,
    bankName: MOMO,
  },
  {
    index: 5,
    imageUrl: defaultImage,
    status: "success",
    date: "27 July 2023",
    amount: "-100",
    type: withdrawal,
    bankName: MOMO,
  },
  {
    index: 6,
    imageUrl: defaultImage,
    status: "failed",
    date: "27 July 2023",
    amount: "-1.00",
    type: transfer,
    bankName: MOMO,
  },

  {
    index: 8,
    imageUrl: defaultImage,
    status: "success",
    date: "27 July 2023",
    amount: "-100",
    type: withdrawal,
    bankName: MOMO,
  },
  {
    index: 9,
    imageUrl: defaultImage,
    status: "failed",
    date: "27 July 2023",
    amount: "-1.00",
    type: transfer,
    bankName: MOMO,
  },

  {
    index: 11,
    imageUrl: defaultImage,
    status: "success",
    date: "27 July 2023",
    amount: "-100",
    type: withdrawal,
    bankName: MOMO,
  },
  {
    index: 12,
    imageUrl: defaultImage,
    status: "failed",
    date: "27 July 2023",
    amount: "-1.00",
    type: transfer,
    bankName: MOMO,
  },
  {
    index: 13,
    imageUrl: defaultImage,
    status: "success",
    date: "27 July 2023",
    amount: "-100",
    type: withdrawal,
    bankName: MOMO,
  },
  {
    index: 14,
    imageUrl: defaultImage,
    status: "failed",
    date: "27 July 2023",
    amount: "-1.00",
    type: transfer,
    bankName: MOMO,
  },
  {
    index: 15,
    imageUrl: defaultImage,
    status: "success",
    date: "27 July 2023",
    amount: "-100",
    type: withdrawal,
    bankName: MOMO,
  },
  {
    index: 16,
    imageUrl: defaultImage,
    status: "failed",
    date: "27 July 2023",
    amount: "-1.00",
    type: transfer,
    bankName: MOMO,
  },
  {
    index: 17,
    imageUrl: defaultImage,
    status: "success",
    date: "27 July 2023",
    amount: "-100",
    type: withdrawal,
    bankName: MOMO,
  },
  {
    index: 18,
    imageUrl: defaultImage,
    status: "failed",
    date: "27 July 2023",
    amount: "-1.00",
    type: transfer,
    bankName: MOMO,
  },
  {
    index: 19,
    imageUrl: defaultImage,
    status: "success",
    date: "27 July 2023",
    amount: "-100",
    type: withdrawal,
    bankName: MOMO,
  },
  {
    index: 20,
    imageUrl: defaultImage,
    status: "failed",
    date: "27 July 2023",
    amount: "-1.00",
    type: transfer,
    bankName: MOMO,
  },
];

export const transactionsII = [
  {
    index: 1,
    date: new Date().toDateString(),
    transactions: [
      {
        index: 15,
        imageUrl: defaultImage,
        time: "11:50 am",
        amount: "+100.00",
        type: deposit,
        bankName: MOMO,
      },
      {
        index: 14,
        imageUrl: defaultImage,
        time: "10:53 am",
        amount: "-10.00",
        type: withdrawal,
        bankName: MOMO,
      },
      {
        index: 13,
        imageUrl: defaultImage,
        time: "9:50 am",
        amount: "+100.00",
        type: deposit,
        bankName: MOMO,
      },
      {
        index: 12,
        imageUrl: defaultImage,
        time: "8:50 am",
        amount: "-1.00",
        type: transfer,
        bankName: MOMO,
      },
    ],
  },
  {
    index: 2,
    date: "26 Aug 2023",
    transactions: [
      {
        index: 11,
        imageUrl: defaultImage,
        time: "9:50 am",
        amount: "-10.00",
        type: withdrawal,
        bankName: MOMO,
      },
      {
        index: 10,
        imageUrl: defaultImage,
        time: "8:50 am",
        amount: "-50.00",
        type: transfer,
        bankName: MOMO,
      },
    ],
  },
];

export const profileMenus = [
  {
    index: 1,
    name: AccountRoute,
    icon: UserCircle2,
  },
  {
    index: 2,
    name: NotificationsRoute,
    icon: Bell,
  },
  {
    index: 3,
    name: HelpRoute,
    icon: HelpCircle,
  },
];

export const profileMenusII = [
  {
    index: 0,
    name: LearnRoute,
    icon: BookUser,
  },
  {
    index: 1,
    name: TOSRoute,
    icon: Shapes,
  },
  {
    index: 2,
    name: PrivacyRoute,
    icon: ShieldAlert,
  },
  {
    index: 3,
    name: CommunityGuidelinesRoute,
    icon: StickyNote,
  },
];

export const filterList = [
  {
    index: 1,
    name: pending,
  },
  {
    index: 2,
    name: success,
  },
  {
    index: 3,
    name: failed,
  },
];

export const notifications = [
  {
    id: 1,
    message: "System outage",
    date: Date.now(),
    state: "critical",
  },
  {
    id: 1,
    message: "API outage",
    date: Date.now(),
    state: "mild",
  },
];

export const pieChartData = [
  { value: 1048, name: "Search Engine" },
  { value: 735, name: "Direct" },
  { value: 580, name: "Email" },
  { value: 484, name: "Union Ads" },
  { value: 300, name: "Video Ads" },
];

export const pieChartDataII = [
  { value: 335, name: "Direct" },
  { value: 310, name: "Email" },
  { value: 274, name: "Union Ads" },
  { value: 235, name: "Video Ads" },
  { value: 400, name: "Search Engine" },
];

export const areaChartData = [820, 932, 901, 934, 1290, 1330, 1320];

export const dummyData = [
  {
    name: "Raphael",
    subject: "amet lorem semper auctor. Mauris vel turpis.",
    date: "Sun, 17th, 2019",
    text: "mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed",
    id: 1,
  },
  {
    name: "Aquila",
    subject: "quis, pede. Praesent",
    date: "Thu, 11th, 2019",
    text: "Nunc quis arcu vel quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac",
    id: 11,
  },
  {
    name: "Geraldine",
    subject: "purus sapien, gravida non,",
    date: "Tue, 24th, 2019",
    text: "pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum",
    id: 21,
  },
  {
    name: "Geraldine",
    subject: "nec enim. Nunc ut erat. Sed nunc",
    date: "Thu, 5th, 2020",
    text: "Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam.",
    id: 31,
  },
  {
    name: "Mariko",
    subject: "lobortis mauris. Suspendisse",
    date: "Sat, 25th, 2019",
    text: "mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed",
    id: 41,
  },
  {
    name: "Nicole",
    subject: "egestas.",
    date: "Tue, 8th, 2020",
    text: "vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod",
    id: 51,
  },
  {
    name: "Solomon",
    subject: "ac mattis ornare, lectus",
    date: "Fri, 10th, 2019",
    text: "nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci",
    id: 61,
  },
  {
    name: "Diana",
    subject: "Suspendisse",
    date: "Sun, 16th, 2018",
    text: "dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper,",
    id: 71,
  },
  {
    name: "Hammett",
    subject: "eu enim. Etiam imperdiet dictum",
    date: "Mon, 11th, 2019",
    text: "molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio.",
    id: 81,
  },
  {
    name: "Brenna",
    subject: "neque. Sed eget lacus. Mauris non",
    date: "Wed, 22nd, 2019",
    text: "sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede, ultrices a, auctor non, feugiat nec, diam.",
    id: 91,
  },
  {
    name: "Zelda",
    subject: "enim non nisi.",
    date: "Sat, 27th, 2020",
    text: "dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et",
    id: 101,
  },
  {
    name: "Irene",
    subject: "aptent taciti sociosqu ad litora torquent per",
    date: "Wed, 8th, 2020",
    text: "eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam.",
    id: 111,
  },
  {
    name: "Dennis",
    subject: "neque venenatis lacus.",
    date: "Mon, 26th, 2018",
    text: "Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante",
    id: 121,
  },
  {
    name: "Slade",
    subject: "dolor dolor, tempus non, lacinia at,",
    date: "Mon, 29th, 2020",
    text: "aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus",
    id: 131,
  },
  {
    name: "Yvonne",
    subject: "enim. Suspendisse aliquet, sem ut",
    date: "Wed, 23rd, 2019",
    text: "lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor.",
    id: 141,
  },
  {
    name: "Ayanna",
    subject: "Suspendisse dui. Fusce diam",
    date: "Fri, 15th, 2019",
    text: "nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet",
    id: 151,
  },
  {
    name: "Jasmine",
    subject: "Donec fringilla. Donec feugiat metus sit amet",
    date: "Fri, 8th, 2019",
    text: "odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    id: 161,
  },
  {
    name: "Halee",
    subject: "id risus quis diam luctus lobortis. Class",
    date: "Thu, 13th, 2020",
    text: "feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam",
    id: 171,
  },
  {
    name: "Rooney",
    subject: "egestas nunc sed libero. Proin sed turpis",
    date: "Sat, 24th, 2019",
    text: "lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum",
    id: 181,
  },
  {
    name: "Ora",
    subject: "nisi",
    date: "Wed, 25th, 2019",
    text: "vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non leo. Vivamus nibh dolor, nonummy ac, feugiat non,",
    id: 191,
  },
  {
    name: "Jada",
    subject: "ridiculus mus. Proin vel nisl. Quisque fringilla",
    date: "Sun, 16th, 2019",
    text: "faucibus orci luctus et ultrices posuere cubilia Curae; Donec tincidunt. Donec vitae erat vel pede blandit congue. In scelerisque scelerisque dui. Suspendisse ac metus vitae",
    id: 201,
  },
  {
    name: "Belle",
    subject: "nunc est, mollis non, cursus non, egestas",
    date: "Tue, 10th, 2020",
    text: "laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc",
    id: 211,
  },
  {
    name: "Kylynn",
    subject: "neque sed dictum",
    date: "Thu, 5th, 2019",
    text: "molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce",
    id: 221,
  },
  {
    name: "Dane",
    subject: "tempor, est ac",
    date: "Fri, 16th, 2020",
    text: "Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam",
    id: 231,
  },
  {
    name: "Fuller",
    subject: "a, facilisis",
    date: "Tue, 10th, 2020",
    text: "consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum",
    id: 241,
  },
  {
    name: "Brenden",
    subject: "vehicula et, rutrum eu, ultrices",
    date: "Thu, 22nd, 2018",
    text: "vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec",
    id: 251,
  },
  {
    name: "Martin",
    subject: "ut nisi a odio semper",
    date: "Sat, 8th, 2020",
    text: "felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim.",
    id: 261,
  },
  {
    name: "Michael",
    subject: "eget magna. Suspendisse tristique neque venenatis",
    date: "Thu, 5th, 2020",
    text: "urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis",
    id: 271,
  },
  {
    name: "Phelan",
    subject: "auctor, nunc nulla vulputate dui, nec tempus",
    date: "Sat, 19th, 2019",
    text: "pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus",
    id: 281,
  },
  {
    name: "Suki",
    subject: "convallis est, vitae",
    date: "Tue, 19th, 2019",
    text: "Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam",
    id: 291,
  },
  {
    name: "Jaquelyn",
    subject: "ante, iaculis nec,",
    date: "Sun, 20th, 2020",
    text: "dolor, tempus non, lacinia at, iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit",
    id: 301,
  },
  {
    name: "Regan",
    subject: "mauris, aliquam eu,",
    date: "Sun, 13th, 2019",
    text: "vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam",
    id: 311,
  },
  {
    name: "Isaac",
    subject: "non",
    date: "Tue, 7th, 2020",
    text: "nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et,",
    id: 321,
  },
  {
    name: "Keegan",
    subject: "magna. Duis dignissim tempor arcu. Vestibulum ut",
    date: "Sun, 29th, 2020",
    text: "diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas",
    id: 331,
  },
  {
    name: "Desirae",
    subject: "Phasellus dolor",
    date: "Tue, 17th, 2019",
    text: "a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor",
    id: 341,
  },
  {
    name: "Upton",
    subject: "at,",
    date: "Fri, 18th, 2019",
    text: "arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi",
    id: 351,
  },
  {
    name: "Jorden",
    subject: "est mauris, rhoncus id, mollis nec, cursus",
    date: "Thu, 19th, 2019",
    text: "egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est.",
    id: 361,
  },
  {
    name: "Yuli",
    subject: "Duis risus odio, auctor",
    date: "Sun, 23rd, 2019",
    text: "tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque, tellus sem mollis dui, in sodales elit erat vitae risus. Duis a mi fringilla",
    id: 371,
  },
  {
    name: "Kyle",
    subject: "Integer",
    date: "Sun, 30th, 2019",
    text: "fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam enim. Sed nulla ante, iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis.",
    id: 381,
  },
  {
    name: "Alan",
    subject: "felis",
    date: "Sat, 16th, 2019",
    text: "quam dignissim pharetra. Nam ac nulla. In tincidunt congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus",
    id: 391,
  },
  {
    name: "Micah",
    subject: "a mi",
    date: "Wed, 10th, 2020",
    text: "nulla at sem molestie sodales. Mauris blandit enim consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu,",
    id: 401,
  },
  {
    name: "Quyn",
    subject: "Phasellus at augue id ante dictum",
    date: "Thu, 14th, 2020",
    text: "elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum",
    id: 411,
  },
  {
    name: "Plato",
    subject: "enim",
    date: "Tue, 23rd, 2020",
    text: "congue turpis. In condimentum. Donec at arcu. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    id: 421,
  },
  {
    name: "Oleg",
    subject: "lorem fringilla ornare",
    date: "Tue, 8th, 2019",
    text: "tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus",
    id: 431,
  },
  {
    name: "Chiquita",
    subject: "ut, pellentesque eget, dictum",
    date: "Thu, 20th, 2020",
    text: "tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo eu arcu. Morbi sit amet",
    id: 441,
  },
  {
    name: "Calista",
    subject: "ligula consectetuer rhoncus. Nullam",
    date: "Sat, 2nd, 2019",
    text: "metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est",
    id: 451,
  },
  {
    name: "Christopher",
    subject: "elit. Aliquam",
    date: "Sat, 17th, 2020",
    text: "massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla",
    id: 461,
  },
  {
    name: "Phyllis",
    subject: "lacus. Cras interdum. Nunc sollicitudin commodo ipsum.",
    date: "Wed, 27th, 2019",
    text: "dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus",
    id: 471,
  },
  {
    name: "Galvin",
    subject: "accumsan neque et nunc. Quisque ornare tortor",
    date: "Sun, 10th, 2019",
    text: "porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis accumsan convallis, ante lectus convallis est, vitae sodales",
    id: 481,
  },
  {
    name: "Indira",
    subject: "aliquet. Proin velit.",
    date: "Sun, 15th, 2020",
    text: "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur",
    id: 491,
  },
  {
    name: "Farrah",
    subject: "malesuada fames",
    date: "Tue, 13th, 2018",
    text: "Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie",
    id: 501,
  },
  {
    name: "Yvette",
    subject: "consectetuer rhoncus. Nullam velit",
    date: "Mon, 15th, 2019",
    text: "dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris, rhoncus",
    id: 511,
  },
  {
    name: "Lareina",
    subject: "aliquet",
    date: "Mon, 1st, 2019",
    text: "nec, diam. Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc",
    id: 521,
  },
  {
    name: "Jaden",
    subject: "consectetuer, cursus",
    date: "Tue, 28th, 2019",
    text: "magna. Duis dignissim tempor arcu. Vestibulum ut eros non enim commodo hendrerit. Donec porttitor tellus non magna. Nam ligula elit, pretium et, rutrum non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et,",
    id: 531,
  },
  {
    name: "Iola",
    subject: "iaculis",
    date: "Sat, 18th, 2020",
    text: "sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam fringilla cursus purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel,",
    id: 541,
  },
  {
    name: "Violet",
    subject: "sed dolor. Fusce mi",
    date: "Fri, 2nd, 2020",
    text: "Phasellus nulla. Integer vulputate, risus a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in",
    id: 551,
  },
  {
    name: "Carissa",
    subject: "sagittis placerat. Cras dictum ultricies ligula.",
    date: "Mon, 27th, 2020",
    text: "urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non, sollicitudin a, malesuada",
    id: 561,
  },
  {
    name: "Orlando",
    subject: "amet, faucibus ut, nulla. Cras eu tellus",
    date: "Tue, 11th, 2018",
    text: "dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id",
    id: 571,
  },
  {
    name: "Hu",
    subject: "posuere vulputate, lacus. Cras interdum. Nunc",
    date: "Sun, 23rd, 2019",
    text: "vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus. In mi pede, nonummy ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante",
    id: 581,
  },
  {
    name: "Calista",
    subject: "luctus",
    date: "Sun, 6th, 2019",
    text: "In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet,",
    id: 591,
  },
  {
    name: "Claudia",
    subject: "vulputate mauris sagittis placerat. Cras dictum",
    date: "Mon, 6th, 2019",
    text: "in molestie tortor nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In",
    id: 601,
  },
  {
    name: "Lewis",
    subject: "vitae aliquam eros turpis",
    date: "Wed, 27th, 2019",
    text: "libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio.",
    id: 611,
  },
  {
    name: "Tad",
    subject: "Suspendisse tristique neque venenatis",
    date: "Wed, 25th, 2019",
    text: "Curabitur massa. Vestibulum accumsan neque et nunc. Quisque ornare tortor at risus. Nunc ac sem ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc",
    id: 621,
  },
  {
    name: "Brandon",
    subject: "vestibulum,",
    date: "Sat, 16th, 2019",
    text: "Suspendisse ac metus vitae velit egestas lacinia. Sed congue, elit sed consequat auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula.",
    id: 631,
  },
  {
    name: "Ruth",
    subject: "Ut",
    date: "Thu, 26th, 2020",
    text: "pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at,",
    id: 641,
  },
  {
    name: "Valentine",
    subject: "sagittis lobortis mauris. Suspendisse aliquet",
    date: "Sun, 8th, 2020",
    text: "consequat purus. Maecenas libero est, congue a, aliquet vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae",
    id: 651,
  },
  {
    name: "Cecilia",
    subject: "dolor dolor, tempus non, lacinia at,",
    date: "Tue, 20th, 2018",
    text: "mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at fringilla purus mauris a nunc. In at pede. Cras vulputate velit eu sem. Pellentesque ut ipsum ac",
    id: 661,
  },
  {
    name: "Keegan",
    subject: "lacus. Ut nec urna",
    date: "Fri, 18th, 2019",
    text: "sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac",
    id: 671,
  },
  {
    name: "Ila",
    subject: "scelerisque dui. Suspendisse",
    date: "Fri, 17th, 2020",
    text: "magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper,",
    id: 681,
  },
  {
    name: "Nero",
    subject: "facilisis",
    date: "Wed, 28th, 2018",
    text: "egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas.",
    id: 691,
  },
  {
    name: "Kimberley",
    subject: "Quisque ac libero nec ligula consectetuer rhoncus.",
    date: "Sun, 2nd, 2020",
    text: "enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis",
    id: 701,
  },
  {
    name: "Lilah",
    subject: "risus.",
    date: "Sat, 6th, 2020",
    text: "penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper",
    id: 711,
  },
  {
    name: "Duncan",
    subject: "nibh. Donec est mauris, rhoncus",
    date: "Wed, 15th, 2020",
    text: "Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec fringilla. Donec feugiat metus sit amet ante. Vivamus",
    id: 721,
  },
  {
    name: "Genevieve",
    subject: "nunc id enim. Curabitur massa. Vestibulum accumsan",
    date: "Wed, 11th, 2020",
    text: "urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce dolor quam, elementum at, egestas a, scelerisque sed, sapien. Nunc pulvinar arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan",
    id: 731,
  },
  {
    name: "Cassidy",
    subject: "Phasellus dapibus quam quis diam.",
    date: "Fri, 23rd, 2019",
    text: "nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et",
    id: 741,
  },
  {
    name: "Porter",
    subject: "aliquet odio. Etiam ligula tortor,",
    date: "Wed, 3rd, 2019",
    text: "Sed neque. Sed eget lacus. Mauris non dui nec urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum primis in faucibus orci luctus et",
    id: 751,
  },
  {
    name: "Hu",
    subject: "posuere cubilia",
    date: "Wed, 15th, 2020",
    text: "mauris. Suspendisse aliquet molestie tellus. Aenean egestas hendrerit neque. In ornare sagittis felis. Donec tempor, est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed",
    id: 761,
  },
  {
    name: "Lucian",
    subject: "eget lacus. Mauris non dui",
    date: "Thu, 9th, 2019",
    text: "eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin sed turpis nec mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut",
    id: 771,
  },
  {
    name: "Shoshana",
    subject: "enim, condimentum eget,",
    date: "Thu, 13th, 2018",
    text: "leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend, nunc risus varius orci, in consequat enim diam",
    id: 781,
  },
  {
    name: "Cade",
    subject: "dolor. Fusce feugiat.",
    date: "Sat, 26th, 2019",
    text: "est, vitae sodales nisi magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie tortor nibh sit amet orci. Ut",
    id: 791,
  },
  {
    name: "Madeline",
    subject: "auctor, nunc nulla vulputate",
    date: "Thu, 28th, 2019",
    text: "orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque penatibus et magnis",
    id: 801,
  },
  {
    name: "Xerxes",
    subject: "Integer eu lacus.",
    date: "Wed, 30th, 2019",
    text: "in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam imperdiet dictum magna. Ut tincidunt orci quis lectus. Nullam suscipit, est ac facilisis facilisis, magna tellus faucibus leo, in lobortis tellus justo sit amet nulla. Donec non justo. Proin non massa non ante bibendum ullamcorper.",
    id: 811,
  },
  {
    name: "Alexis",
    subject: "cursus purus. Nullam scelerisque neque",
    date: "Fri, 15th, 2019",
    text: "arcu et pede. Nunc sed orci lobortis augue scelerisque mollis. Phasellus libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper",
    id: 821,
  },
  {
    name: "Courtney",
    subject: "Nunc sed orci lobortis augue scelerisque",
    date: "Thu, 23rd, 2020",
    text: "est mauris, rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent eu nulla at sem molestie sodales. Mauris blandit enim consequat",
    id: 831,
  },
  {
    name: "Isabella",
    subject: "a odio",
    date: "Fri, 21st, 2020",
    text: "est ac mattis semper, dui lectus rutrum urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum eu, ultrices sit amet, risus. Donec nibh enim, gravida sit amet, dapibus id, blandit at, nisi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur",
    id: 841,
  },
  {
    name: "Ina",
    subject: "Curabitur egestas nunc sed libero. Proin sed",
    date: "Tue, 26th, 2019",
    text: "semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus",
    id: 851,
  },
  {
    name: "Jenette",
    subject: "non leo. Vivamus nibh dolor, nonummy",
    date: "Wed, 16th, 2019",
    text: "Fusce diam nunc, ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et libero. Proin mi. Aliquam gravida mauris ut mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo.",
    id: 861,
  },
  {
    name: "Lev",
    subject: "purus. Nullam scelerisque neque sed sem egestas",
    date: "Fri, 22nd, 2020",
    text: "pede. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales",
    id: 871,
  },
  {
    name: "Sharon",
    subject: "ante ipsum primis in faucibus orci",
    date: "Fri, 11th, 2019",
    text: "Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut",
    id: 881,
  },
  {
    name: "Rowan",
    subject: "Donec luctus aliquet",
    date: "Thu, 6th, 2019",
    text: "fames ac turpis egestas. Fusce aliquet magna a neque. Nullam ut nisi a odio semper cursus. Integer mollis. Integer tincidunt aliquam arcu. Aliquam ultrices",
    id: 891,
  },
  {
    name: "Ann",
    subject: "ullamcorper. Duis at lacus.",
    date: "Sun, 10th, 2019",
    text: "cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla",
    id: 901,
  },
  {
    name: "Brenda",
    subject: "vulputate velit",
    date: "Sun, 30th, 2019",
    text: "velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non,",
    id: 911,
  },
  {
    name: "Brandon",
    subject: "tempor, est ac mattis semper,",
    date: "Wed, 13th, 2019",
    text: "dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc",
    id: 921,
  },
  {
    name: "Joelle",
    subject: "velit dui,",
    date: "Thu, 14th, 2019",
    text: "a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci, consectetuer euismod est arcu ac orci. Ut semper pretium neque. Morbi",
    id: 931,
  },
  {
    name: "Tasha",
    subject: "consequat purus.",
    date: "Fri, 5th, 2019",
    text: "vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Etiam laoreet, libero et tristique pellentesque,",
    id: 941,
  },
  {
    name: "Hyacinth",
    subject: "vitae purus gravida sagittis.",
    date: "Sat, 21st, 2019",
    text: "purus. Nullam scelerisque neque sed sem egestas blandit. Nam nulla magna, malesuada vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo",
    id: 951,
  },
  {
    name: "Winter",
    subject: "sodales nisi magna sed dui. Fusce",
    date: "Sun, 9th, 2020",
    text: "et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum metus.",
    id: 961,
  },
  {
    name: "Chelsea",
    subject: "in faucibus orci",
    date: "Thu, 21st, 2019",
    text: "Donec felis orci, adipiscing non, luctus sit amet, faucibus ut, nulla. Cras eu tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui quis",
    id: 971,
  },
  {
    name: "Moses",
    subject: "Fusce",
    date: "Wed, 9th, 2019",
    text: "nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam",
    id: 981,
  },
  {
    name: "Melvin",
    subject: "ipsum",
    date: "Wed, 26th, 2019",
    text: "velit. Quisque varius. Nam porttitor scelerisque neque. Nullam nisl. Maecenas malesuada fringilla est. Mauris eu turpis. Nulla aliquet. Proin velit. Sed malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas, urna justo faucibus lectus, a",
    id: 991,
  },
];
