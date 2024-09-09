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
import dhwanil from "./../assets/technical/Frame 659.png"
import nidhi from "./../assets/technical/Frame 660.png"
import pragya from "./../assets/technical/Frame 661.png"
import aakash from "./../assets/technical/Frame 662.png"
import sneha from "./../assets/technical/Frame 663.png"
import pranjal from "./../assets/technical/Frame 664.png"
import mentorImg from "./../assets/technical/mentor.png"





interface Person {
  id: number;
  img: string;
  name: string;
  post: string;
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

export const boardMembers: Array<Person> = [
  {
    id: 1,
    img: sanskarChaubey,
    name: "Tanay Nagde",
    post: "President",
  },
  {
    id: 2,
    img: pranjal,
    name: "Pranjal Birla",
    post: "Vice President",
  },
  {
    id: 3,
    img: ayush,
    name: "Ayush Maddhesiya",
    post: "Secretary",
  },
  {
    id: 4,
    img: aakash,
    name: "Akash Bais",
    post: "Tresurer",
  },
];

export const team: Array<Person> = [
  {
    id: 18,
    img: dhwanil,
    name: "Dhwanil Bhavsar",
    post: "Administrative Secretary",
  },
  {
    id: 22,
    img: sneha,
    name: "Sneha Yadav",
    post: "Media Team Head",
  },
  // {
  //   id: 7,
  //   img: diya,
  //   name: "Diya Verma",
  //   post: "Design Lead",
  // },
  // {
  //   id: 8,
  //   img: tan,
  //   name: "Kanishka Bhadavya",
  //   post: "Community Lead",
  // },
  {
    id: 15,
    img: nawadha,
    name: "Nawadha Jadiya",
    post: "Development Head",
  },
  {
    id: 10,
    img: mandeep,
    name: "Mandeep Yadav ",
    post: "Backend Lead",
  },
  {
    id: 14,
    img: aditya,
    name: "Aditya Patel",
    post: "Frontend Lead",
  },
  {
    id: 11,
    img: himanshi,
    name: "Himanshi Laddha",
    post: "Member",
  },
  {
    id: 19,
    img: nidhi,
    name: "Nidhi Agrawal",
    post: "Member",
  },
  {
    id: 12,
    img: krishna,
    name: "Kishna solanki",
    post: "Member",
  },
  {
    id: 13,
    img: devanshu,
    name: "Devanshu kothari ",
    post: "Member",
  },
  {
    id: 16,
    img: akshara,
    name: "Akshara gupta",
    post: "Member",
  },
  // {
    //   id: 17,
    //   img: harshita,
    //   name: "Harshita Thakur",
    //   post: "Member",
    // },
    {
      id: 20,
      img: pragya,
      name: "Pragya Patidar",
      post: "Member",
    },
    {
      id: 9,
      img: abhigya,
      name: "Abhigya Sharma",
      post: "Member",
    },
    {
    id: 1,
    img: mayank,
    name: "Mayank Matkar",
    post: "Mentor",
  },
  {
    id: 2,
    img: secretaryImg,
    name: "Yashraj Sisodiya",
    post: "Mentor",
  },
  // {
    //   id: 3,
    //   img: khush,
    //   name: "Khushbu Gehlot",
    //   post: "P.R. Head",
    // },
    // {
      //   id: 3,
      //   img: ayush,
      //   name: "Ayush Maddhesiya",
      //   post: "Secretary of Technical Affairs",
  // },
  {
    id: 4,
    img: himanshu,
    name: "Himanshu Agnihotri",
    post: "Mentor",
  },
  
  {
    id: 5,
    img: krip,
    name: "Kripansh Kumravat",
    post: "Mentor",
  },
  {
    id: 6,
    img: nirv,
    name: "Nirvighna Chavan",
    post: "Mentor",
  },
  {
    id: 6,
    img: shivamSharma,
    name: "Shivam Sharma",
    post: "Mentor",
  },
  {
    id: 6,
    img: tanayNagde,
    name: "Sanskar Choubey",
    post: "Mentor",
  },
];
