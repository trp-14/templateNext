// src/app/layout.tsx
"use client"; // Make the layout a Client Component if using Redux

import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
