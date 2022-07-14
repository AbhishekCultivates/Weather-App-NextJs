import React from "react";
import Image from "next/image";
import Link from "next/link";

// import images
import BengaluruImage from "../public/images/bengaluru.jpg";
import BhopalImage from "../public/images/bhopal.jpg";
import DelhiImage from "../public/images/delhi.jpg";
import MumbaiImage from "../public/images/mumbai.jpg";

const places = [
  {
    name: "Bengaluru",
    image: BengaluruImage,
    url: "/location/bengaluru-1277333",
  },
  {
    name: "Bhopal",
    image: BhopalImage,
    url: "/location/bhopal-1275841",
  },
  {
    name: "Delhi",
    image: DelhiImage,
    url: "/location/delhi-1273294",
  },
  {
    name: "Mumbai",
    image: MumbaiImage,
    url: "/location/mumbai-1275339",
  },
];

export default function FamousPlaces() {
  return (
    <div className="places">
      <div className="places__row">
        {places.length > 0 &&
          places.map((place, index) => (
            <div className="places__box" key={index}>
              <Link href={place.url}>
                <a>
                  <div className="places__image-wrapper">
                    <Image
                      src={place.image}
                      alt={`${place.name} Image`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  <span>{place.name}</span>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
}