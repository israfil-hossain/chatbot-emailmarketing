// import { handleServerError } from '@/utils/handle-error';
// import { QueryCache, QueryClient } from '@tanstack/react-query';
// import { AxiosError } from 'axios';
// import { redirect } from 'next/navigation';
// import toast from 'react-hot-toast';
// import { isProd } from '@/lib/app_env';

// export function makeQueryClient() {
//   return new QueryClient({
//     defaultOptions: {
//       queries: {
//         retry: (failureCount, error) => {
//           if (process.env.NODE_ENV === 'development') {
//             if (failureCount >= 0) return false;
//           }
//           if (failureCount > 3 && isProd()) return false;

//           if (
//             error instanceof AxiosError &&
//             [401, 403].includes(error.response?.status ?? 0)
//           ) {
//             return failureCount <= 3;
//           }

//           return true
//         },
//         retryDelay:()=>500,
//         refetchOnWindowFocus: isProd(),
//         staleTime: 10 * 1000,
//       },
//       mutations: {
//         onError: (error) => {
//           handleServerError(error);
//           if (error instanceof AxiosError) {
//             if (error.response?.status === 304) {
//               toast.error("Content not modified !");
//             }
//           }
//         },
//       },
//     },
//     queryCache: new QueryCache({
//       onError: (error) => {
//         if (error instanceof AxiosError || true) {
//           // @ts-ignore
//           const status = error?.response?.status;
//           switch (status) {
//             case 401:
//               toast.error("Session expired!")
//               redirect('/sign-in')
//               break;
//             case 403:
//               toast.error("Forbidden Error!");
//               redirect("/403");
//               break;

//             case 404:
//               toast.error("Not Found!");
//               redirect("/404");
//               break;

//             case 500:
//               toast.error("Internal Server Error!");
//               redirect("/500");
//               break;

//             case 503:
//               toast.error("Maintenance Error!");
//               redirect("/503");
//               break;

//           }
//         }
//       },
//     }),
//   });
// }

// let browserQueryClient: QueryClient | undefined = undefined;

// export function getQueryClient() {
//   if (typeof window === 'undefined') {
//     // Server: always make a new query client
//     return makeQueryClient();
//   } else {
//     // Browser: make a new query client if we don't already have one
//     if (!browserQueryClient) browserQueryClient = makeQueryClient();
//     return browserQueryClient;
//   }
// }