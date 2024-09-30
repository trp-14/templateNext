"use client"; // Use client directive for client-side hooks

import { Provider } from "react-redux";
import store from "../redux/store";
import { usePathname } from "next/navigation"; // Import usePathname for dynamic routing
import Header from "./header/layout"; // Adjust path as necessary
import Sidebar from "./sidebar/layout"; // Adjust path as necessary

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get current pathname in a Next.js-compatible way
  const isLoginPage = pathname === "/auth/login";

  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          {!isLoginPage && (
            <div style={{ display: "flex", minHeight: "100vh" }}>
              <Sidebar />
              <div style={{ flex: 1 }}>
                <Header />
                <main style={{ padding: "20px" }}>{children}</main>
              </div>
            </div>
          )}
          {isLoginPage && <main style={{ padding: "20px" }}>{children}</main>}
        </Provider>
      </body>
    </html>
  );
}
