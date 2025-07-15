// "use client";

// import { cn } from "@/lib/utils";
// import React from "react";
// import MaxMenu from "./maximized-menu";
// import MinMenu from "./minimized-menu";
// import { useSidebar } from "../ui/sidebar";
// import useChatSidebar from "@/context/use-chat-sidebar";

// type Props = {
//   domains:
//     | {
//         id: string;
//         name: string;
//         icon: string;
//       }[]
//     | null
//     | undefined;
// };

// const SideBar = ({ domains }: Props) => {
//   const {  page, onSignOut } = useChatSidebar();

//   return (
//     <div
//       className={cn(
//         "bg-cream h-full w-[60px] fill-mode-forwards fixed md:realtive",
//         expand == undefined && "",
//         expand == true
//           ? "animate-open-sidebar"
//           : expand == false && "animate-close-sidebar"
//       )}
//     >
//       {expand ? (
//         <MaxMenu
//           domains={domains}
//           current={page!}
//           onExpand={onExpand}
//           onSignOut={onSignOut}
//         />
//       ) : (
//         <MinMenu
//           domains={domains}
//           onShrink={onExpand}
//           current={page ?? ""}
//           onSignOut={onSignOut}
//         />
//       )}
//     </div>
//   );
// };

// export default SideBar;
