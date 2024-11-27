import { StaticImageData } from "next/image"
import img from "@/../public/dsa.jpg"
import img1 from "@/../public/mentorship.jpg"

export const events: Array<{
  id: number
  heading: string
  desc: string
  img: StaticImageData
}> = [
  {
    id: 1,
    heading: "Want to elevate your coding career? Our expert mentors will guide you through the intricacies of DSA. Master problem-solving, optimize your code, and land your dream tech job. Join our DSA mentorship program today and unlock your full potential.",
    desc: "",
    img: img,
  },
  {
    id: 2,
    heading: "Abhyudaya Coding Club in collaboration with Coding Ninjas brought a 21-Day consistency-based coding challenge for university students with assured merchandise and a prize pool of 700k where top 10 participants get a chance to meet Ankush Sir from Coding Ninjas.",
    desc: "",
    img: img1,
  },
]

