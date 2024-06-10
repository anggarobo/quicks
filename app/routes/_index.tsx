import { type MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Quicks App" },
    { name: "description", content: "Quicks App" },
  ];
};

export default function Index() {

  return <Outlet />
}