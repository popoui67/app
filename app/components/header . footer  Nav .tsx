import Link from "next/link"
import Image from "next/image"
import { SignOutButton } from "@clerk/nextjs"
export const Footer =()=>{
    return(
   <footer className="  rounded-md  bg-slate-500">
<div  className=" flex flex-row flex-wrap p-4 m-5 justify-between items-center text-center">
<Link href="/">
    <Image
    src="/assets/images/logo.svg"
    alt=""
    width={250}
    height={250}
    />
    </Link>
    <p className=" text-[40px]"> Be The grates Be The best version Of your Self  </p>

</div>
   </footer>
    )
}
export const Header =()=>{
    return (
        <></>
    )
}
export const Nav =()=>{
   
    return (
        <nav className="flex flex-row flex-wrap gap-2 justify-between  mt-2 bg-slate-700  bg-contain object-contain">
<Image src="/assets/images/logo.svg"
alt=""
width={250}
height={250}
className=" bg-slate-50 rounded-lg ml-4"
/>
<div className=" flex flex-row flex-wrap gap-2  mr-2 p-5 m-3">
<Link href="/">  
  <Image
    src="/assets/icons/menu.svg"
 alt=""
 width={30}
 height={40}
 className=" bg-slate-50 rounded-xl"
        />
        </Link>
<Link href="/create">
    <Image
    src="/assets/icons/upload.svg"
 alt=""
 width={30}
 height={40}   
    />
</Link>
<Link href="/">
<Image
    src="/assets/icons/edit.svg"
 alt=""
 width={30}
 height={40}   
    />
</Link>
<div className=" flex ml-9 gap-2">
<Image
    src="/assets/icons/arrow.svg"
 alt=""
 width={30}
 height={40}   
 className=" bg-slate-400 rounded-xl"
    />
    <SignOutButton >
        Out
    </SignOutButton>

</div>
</div>


        </nav>
    )
}