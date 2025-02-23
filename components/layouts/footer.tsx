import { FacebookIcon, Twitter } from 'lucide-react'

export default function Footer() {
   return (
      <footer className="text-dim bg-background/highlight pb-16 pt-13.5 text-sm sm:text-base lg:pb-28.25">
         <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-8 text-center lg:flex-row lg:items-start lg:text-left xl:px-0">
            <ul className="flex flex-col gap-4 text-text/main md:flex-row lg:flex-col">
               <li>About Valve</li>
               <li>Jobs</li>
               <li>Steamworks</li>
               <li>Steam distribution</li>
               <li>Support</li>
            </ul>
            <ul className="flex flex-col gap-4 text-text/main md:flex-row lg:flex-col">
               <li>Privacy Policy</li>
               <li>Legal</li>
               <li>Steam Subscriber Agreement</li>
               <li>Refunds</li>
               <li>Cookies</li>
            </ul>
            <ul className="flex items-start gap-2">
               <li className="bg-text/dim/5 p-2 text-text/dim">
                  <FacebookIcon size={24} />
               </li>
               <li className="bg-text/dim/5 p-2 text-text/dim">
                  <Twitter size={24} />
               </li>
            </ul>
         </div>
      </footer>
   )
}
