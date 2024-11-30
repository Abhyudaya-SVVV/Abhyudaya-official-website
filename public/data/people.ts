import kushagra from "../assets/technical/kushagra-rai.png"
import dhwanil from "../assets/technical/dhwanil.jpg";
import devang from "../assets/technical/devang.jpg"
import yashraj from "../assets/technical/Yashraj.svg"
import raghav from "../assets/technical/Raghav.jpg"
import samarth from "../assets/technical/samarth.jpg"
import adityaTiwari from "./../assets/faculty/aditya-tiwari.svg";
import anandRajavatHodSir from "./../assets/faculty/anand-rajavat-hod.svg";
import avdheshKumar from "./../assets/faculty/avdhesh-kumar.svg";
import gangeshwarisSharma from "./../assets/faculty/gangeshwari-sharma.svg";
import kamalBorana from "./../assets/faculty/kamal-borana.svg";
import sanskarChaubey from "./../assets/faculty/sanskar-choubey.svg";
import shivamSharma from "./../assets/faculty/shivam-sharma.svg";
import tanayNagde from "./../assets/faculty/tanay-nagde.svg";
import viceChancellor from "./../assets/faculty/vice-chancellor.svg";
import secretaryImg from "./../assets/technical/Yashraj.svg";
import diya from "./../assets/technical/Frame 645.svg";
import mayank from "./../assets/technical/Frame 640.png";
import nirv from "./../assets/technical/Frame 644.png";
import krip from "./../assets/technical/Frame 643.png";
import khush from "./../assets/technical/Frame 641.png";
import tan from "./../assets/technical/Frame 646.png";
import abhigya from "./../assets/technical/Frame 647.png"
import mandeep from "./../assets/technical/Frame 648.png"
import himanshi from "./../assets/technical/Frame 649.png"
import krishna from "./../assets/technical/Frame 650.png"
import devanshu from "./../assets/technical/Frame 651.png"
import ayush from "./../assets/technical/Frame 652.png"
import aditya from "./../assets/technical/Frame 653.png"
import himanshu from "./../assets/technical/Frame 654.png"
import parikshit from "./../assets/technical/Frame 655.png"
import nawadha from "./../assets/technical/Frame 656.png"
import akshara from "./../assets/technical/Frame 657.png"
import harshita from "./../assets/technical/Frame 658.png"
import nidhi from "./../assets/technical/Frame 660.png"
import pragya from "./../assets/technical/Frame 661.png"
import aakash from "./../assets/technical/Frame 662.png"
import sneha from "./../assets/technical/Frame 663.png"
import pranjal from "./../assets/technical/Frame 664.png"
import mentorImg from "./../assets/technical/mentor.png"
import { StaticImageData } from "next/image";

interface Person {
  id: number;
  img: string;
  name: string;
  post: string
}

export interface Team {
  id: number;
  img: string | StaticImageData;
  name: string;
  post: string;
  linkedin:string;
}

export const collegeManagement: Array<Person> = [
  {
    id: 1,
    img: viceChancellor,
    name: "Upendra Dhar",
    post: "Vice Chancellor",
  },
  {
    id: 2,
    img: anandRajavatHodSir,
    name: "Anand Rajawat",
    post: "Head of Department",
  },
];
export const coordinators: Array<Person> = [
  {
    id: 1,
    img: gangeshwarisSharma,
    name: "Prof. Gangeshwari Sharma",
    post: "Coordinator",
  },
  {
    id: 2,
    img: avdheshKumar,
    name: "Prof. Avdhesh Kumar Sharma",
    post: "Coordinator",
  },
  {
    id: 3,
    img: kamalBorana,
    name: "Prof. Kamal Borana",
    post: "Coordinator",
  },
  // {
  //   id: 4,
  //   img: mentorImg,
  //   name: "Naman Sisodiya",
  //   post: "mentor",
  // },
];

export const founders : Array<Team> = [
  {
    id: 1,
    img: sanskarChaubey,
    name: "Tanay Nagde",
    post: "President",
    linkedin: "https://www.linkedin.com/in/tanay-nagde-17985b1a6/",
  },
  {
    id: 2,
    img: shivamSharma,
    name: "Shivam Sharma",
    post: "Founder",
    linkedin: "https://www.linkedin.com/in/shivam-sharma/",
  },
];

export const coreMembers : Array<Team> = [
  {
    id: 3,
    img: sanskarChaubey,
    name: "Tanay Nagde",
    post: "President",
    linkedin: "https://www.linkedin.com/in/tanay-nagde-17985b1a6/",
  },
  {
    id: 4,
    img: pranjal,
    name: "Pranjal Birla",
    post: "Vice President",
    linkedin: "https://www.linkedin.com/in/pranjal-birla/",
  },
  {
    id: 5,
    img: kushagra, //add kushagra pic
    name: "Kushagra Rai",
    post: "General Secretary",
    linkedin: "https://www.linkedin.com/in/kushagra-raii/",
  },
  {
    id: 6,
    img: aakash,
    name: "Akash Bais",
    post: "Treasurer",
    linkedin: "https://www.linkedin.com/in/bais-akash/",
  },
  {
    id: 7,
    img: ayush,
    name: "Ayush Madhesiya",
    post: "Technical Secretary",
    linkedin: "https://www.linkedin.com/in/ayush-maddhesiya/",
  },
  {
    id: 8,
    img: dhwanil,
    name: "Dhwanil Bhawsar",
    post: "Administrative Secretary",
    linkedin: "https://www.linkedin.com/in/dhwanilll/",
  },
  {
    id: 9,
    img: nawadha,
    name: "Nawadha Jadiya",
    post: "Development Head",
    linkedin: "https://www.linkedin.com/in/nawadha-jadiya-aab426253/",
  },
  {
    id: 10,
    img: sneha,
    name: "Sneha Yadav",
    post: "Media Head",
    linkedin: "https://www.linkedin.com/in/sneha-yadav-02909021b/",
  },
  {
    id: 11,
    img: devang,
    name: "Devang Sharma",
    post: "Managing Head",
    linkedin: "https://www.linkedin.com/in/devang-sharma-88aa84288/",
  },
];

export const Mentors: Array<Team> = [
  {
    id: 1,
    img: shivamSharma, 
    name: "Shivam Sharma",
    post: "Mentor",
    linkedin: "https://www.linkedin.com/in/shivam-sharma-ab489721b/",
  },
  {
    id: 2,
    img: tanayNagde, 
    name: "Sanskar Choubey",
    post: "Mentor",
    linkedin: "https://www.linkedin.com/in/sanskarchoubey14/",
  },
  {
    id: 3,
    img: adityaTiwari, 
    name: "Aditya Tiwari",
    post: "Mentor",
    linkedin: "https://www.linkedin.com/in/aditya-tiwari-goltu/",
  },
  {
    id: 4,
    img: mayank, 
    name: "Mayank Matkar",
    post: "Mentor",
    linkedin: "https://www.linkedin.com/in/mayank-matkar-042003k/",
  },
  {
    id: 5,
    img: yashraj, 
    name: "Yashraj Sisodiya",
    post: "Mentor",
    linkedin: "https://www.linkedin.com/in/theyashsisodiya/",
  },
  {
    id: 6,
    img: himanshu, // add Himanshu Agnihotri's image
    name: "Himanshu Agnihotri",
    post: "Mentor",
    linkedin: "https://www.linkedin.com/in/himanshu-agnihotri-776b7b222/",
  },
  {
    id: 7,
    img: krip, // add Kripansh Kumravat's image
    name: "Kripansh Kumravat",
    post: "Mentor",
    linkedin: "https://www.linkedin.com/in/kripansh29/",
  },
  {
    id: 8,
    img: nirv, // add Nirvighna Chavan's image
    name: "Nirvighna Chavan",
    post: "Mentor",
    linkedin: "https://www.linkedin.com/in/nirvighna-chavan-650586226/",
  },
];
