"use client"
import { useEffect, useRef } from "react"

export default function SignOutAction({ deleteTokens = () => {} }) {
  const deleteTokensRef = useRef(deleteTokens);

  useEffect(() => {
    deleteTokensRef.current = deleteTokens;
  });

  useEffect(() => {
    deleteTokensRef.current();
  }, []);

  return null;
}