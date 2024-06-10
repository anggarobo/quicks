import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";
import useInitUser from "./utils/useInitUser";
import QuicksLayout from "./components/layout";
import { InboxProvider } from "./context/inbox";
import { TaskProvider } from "./context/task";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-[#333333]">
        <InboxProvider>
          <TaskProvider>
            <QuicksLayout>
              {children}
            </QuicksLayout>
          </TaskProvider>
        </InboxProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  useInitUser()

  return <Outlet />;
}
