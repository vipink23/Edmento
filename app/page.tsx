// import Image from "next/image";

// export default function Home() {
//   return (
//     <>
    
//     </>
//   );
// }

// app/page.tsx
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/Dashboard');
}

