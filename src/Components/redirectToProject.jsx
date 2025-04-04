'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";



export default function RedirectToProject(){
  const router = useRouter();
  const searchParams = useSearchParams();

  // Redirect to the project page
  useEffect(() => {
    const projectToOpen = searchParams.get('project');
    if (projectToOpen) router.replace(`projectDetails?id=${projectToOpen}`);
  }, []);

  return <div/>
}