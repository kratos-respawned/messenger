import GoogleProvider from "next-auth/providers/google"
import NextAuth from "next-auth"
// import FacebookProvider from "next-auth/providers/facebook"
// export const authOptions = {
//   // Configure one or more authentication providers
//   providers: [
//     FacebookProvider({
//       clientId: process.env.FACEBOOK_ID!,
//       clientSecret: process.env.FACEBOOK_SECRET!,
//     }),
    
      
//     ],
//     secret:process.env.NEXTAUTH_SECRET!,
//     pages: {
//         signIn: '/auth/signin',
//     }
// }
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    
      
    ],
    secret:process.env.NEXTAUTH_SECRET!,
    pages: {
        signIn: '/auth/signin',
    }
}

export default NextAuth(authOptions)
