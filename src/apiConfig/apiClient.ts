// import axios from 'axios';
// import { Dashboard, DEV_SERVER_URL } from '@/apiConfig/endpoints';
// import { getCookie, setCookie } from '@/lib/cookies';
// import { getSession } from 'next-auth/react';
// import { decodeJWT } from '@/lib/decodeUserRole';
// import { normalizeHeaders } from '@/hooks/normalize_headers';
// import { sxsrfTokenMaker } from '@/lib/sxsrfTokenMaker';
// import { getServerCookie, setServerCookie } from '@/lib/server-cookies';
// import { auth } from '../auth';

// const graphqlEndpoint = `${DEV_SERVER_URL}/${Dashboard.BillingGraphQL}`;

// const apiClient = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_BACKEND_API_DEV,
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });

// apiClient.interceptors.request.use(
//   async (config) => {
//     const sxsrfToken = config.isNextAuthReq
//       ? await getServerCookie('sxsrf')
//       : getCookie('sxsrf');
//     if (sxsrfToken && config.headers) {
//       config.headers.sxsrf = sxsrfToken;
//     }
//     if (config.isGraphQL) {
//       config.url = graphqlEndpoint;
//       config.data = {
//         query: config.query,
//         variables: config.variables
//       };
//     }

//     if (config.requireAuth && config.headers) {
//       if (config.isNextAuthReq) {
//         'use server'
//         const session = await auth();
//         config.headers.Authorization = `${session?.user.accessToken}`;
//         const { tokenExpiresAt } = decodeJWT(
//           session?.user?.accessToken as string
//         );
//         const accessTokenExpiresAt = (tokenExpiresAt as number) - 5 * 60 * 1000;
//         if (Date.now() > accessTokenExpiresAt) {
//           'use server'
//           const session = await auth();
//           config.headers.Authorization = `${session?.user.accessToken}`;
//         }
//         return config;
//       }

//       const session = await getSession();
//       config.headers.Authorization = `${session?.user.accessToken}`;
//       const { tokenExpiresAt } = decodeJWT(
//         session?.user?.accessToken as string
//       );

//       const accessTokenExpiresAt = (tokenExpiresAt as number) - 5 * 60 * 1000;
//       if (Date.now() > accessTokenExpiresAt) {
//         const session = await getSession();
//         config.headers.Authorization = `${session?.user.accessToken}`;
//       }
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// apiClient.interceptors.response.use(
//   async (response) => {
//     const normalizedHeaders = normalizeHeaders(
//       response.headers as Record<string, string | string[] | undefined>
//     );
//     const cfRayToken = normalizedHeaders['cf-ray-status-id-tn'] as string;
//     if (response.config.isGraphQL && response.data?.errors) {
//       const messages = response.data.errors.map(
//         (err: { message: any }) => err.message
//       );
//       return Promise.reject(
//         new Error(`GraphQL Error: ${messages.join(' | ')}`)
//       );
//     }
//     if (cfRayToken) {
//       const newSxsrfToken = sxsrfTokenMaker(cfRayToken);
//       setCookie('sxsrf', newSxsrfToken);
//     }
//     return response;
//   },
//   async (error) => {
//     const originalReq = error?.config;
//     const normalizedHeaders = normalizeHeaders(error?.response?.headers);
//     const cfRayToken = normalizedHeaders['cf-ray-status-id-tn'] as string;
//     const errorMsg = error?.response?.data?.error_msg;
//     const status = error?.response?.status;

//     if (
//       cfRayToken &&
//       errorMsg === 'invalid attempt to access' &&
//       status === 401 &&
//       !originalReq._retry
//     ) {
//       if (originalReq.isNextAuthReq) {
//         const newSxsrfToken = sxsrfTokenMaker(cfRayToken);
//         await setServerCookie('sxsrf', newSxsrfToken);
//       } else {
//         const newSxsrfToken = sxsrfTokenMaker(cfRayToken);
//         setCookie('sxsrf', newSxsrfToken);
//       }
//       originalReq._retry = true;
//       try {
//         await new Promise((resolve) => setTimeout(resolve, 500));
//         return apiClient(originalReq);
//       } catch (retryError) {}
//     }
//     if (
//       cfRayToken &&
//       status === 401 &&
//       errorMsg === 'unauthorized access attempt' &&
//       originalReq.requireAuth &&
//       !originalReq._retry
//     ) {
//       await new Promise((resolve) => setTimeout(resolve, 500));
//       let accessToken;
//       if (originalReq.isNextAuthReq) {
//         'use server';
//         const session = await auth();
//         accessToken = session?.user?.accessToken;
//       } else {
//         const session = await getSession();
//         accessToken = session?.user?.accessToken;
//       }
//       if (accessToken) {
//         originalReq.headers['Authorization'] = `${accessToken}`;
//         originalReq._retry = true;
//         return apiClient(originalReq);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default apiClient;
