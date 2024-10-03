"use client";
import type { Publication } from "@/model/publication";
import { BsCalendar, BsClock } from "react-icons/bs";
import { format } from "date-fns";
import { AnchorButton } from "@/components/fraqments/button";
import BigCard from "@/components/fraqments/card/bigCard";
import Image from "next/image";

export default function PublicationCard(props: Publication) {
  return (
    <BigCard>
      <div className="flex gap-3">
        <div className="w-40">
          <Image
            alt="IJASEIT"
            src={props.cover_url}
            width={100}
            height={300}
            className="w-full"
          />
        </div>
        <div className="w-3/5 flex flex-col gap-2">
          <h4 className="text-md text-justify font-bold">
            {props.title}{" "}
            <span className="text-sm font-normal">
              Vol. {props.volume} {props.year}
            </span>
          </h4>
          <p className="text-sm text-gray-600">{props.description}</p>
          <div className="flex w-full justify-between">
            <p className="flex gap-1 items-center">
              <BsCalendar /> {format(props.closing_date, "dd-MM-yyyy")}
            </p>
            <p className="flex gap-1 items-center">
              <BsClock /> {props.review_est} hari
            </p>
          </div>
          <p>IDR {props.sub_fee * 1000}</p>

          <AnchorButton href="" size="sm" variant="primary">
            Kirim karya
          </AnchorButton>
        </div>
      </div>
    </BigCard>
  );
}
