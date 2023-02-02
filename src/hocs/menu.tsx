import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { useUser } from "../context/user";

const Menu = () => {
  //   const { pathname } = useRouter();
  const { user } = useUser();
  return (
    <>
      <Link
        href="/dashboard"
        className="text-[13px] uppercase tracking-widest m-3"
      >
        About
      </Link>
      <Link
        href="/contact"
        className="text-[13px] uppercase tracking-widest m-3"
      >
        Contact
      </Link>
      {user && (
        <div className="flex flex-row justify-between">
          <Link
            href="/user-panel"
            className="text-[13px] uppercase tracking-widest m-3"
          >
            my account
          </Link>
        </div>
      )}
      {!user && (
        <>
          <Link
            href="/auth/register"
            className="text-[13px] uppercase tracking-widest m-3"
          >
            register
          </Link>
          <Link
            href="/auth/login"
            className="text-[13px] uppercase tracking-widest m-3"
          >
            login
          </Link>
        </>
      )}
    </>
  );
};

export default Menu;