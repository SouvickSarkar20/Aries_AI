import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./rootLayout.css";
import {ClerkProvider,SignedIn,SignedOut,UserButton,SignInButton} from "@clerk/clerk-react";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  console.log("key not found");

}

const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className="rootLayout">
        <header>
          <Link to="/" className="logo">
            <img
              height="40px"
              width="40px"
              src="data:image/png;base64,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"
              alt=""
            />
            <span>LAMA AI</span>
          </Link>
          <div className="user">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <div>
          <Outlet />
        </div>
      </div>
    </ClerkProvider>
  );
};

export default RootLayout;
