"use client";

import React from 'react';
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';

export default function About() {
  const {data: session} = useSession();
  
  //console.log(session,"data")

  if (!session) {
    redirect("/login")
  };

  return (
    <div>About</div>
  )
}
