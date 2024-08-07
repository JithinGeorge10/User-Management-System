export const HOST=import.meta.env.VITE_SERVER_URL

export const AUTH_ROUTES='/api/auth'

export const SIGNUP_ROUTE=`${AUTH_ROUTES}/signup`

export const VERIFY_JWT=`${AUTH_ROUTES}/verifyjwt`

export const VERIFY_ADMIN_JWT=`${AUTH_ROUTES}/verifyadminjwt`

export const LOGIN_ROUTE=`${AUTH_ROUTES}/login`

export const UPLOAD_URL=`${AUTH_ROUTES}/uploadurl`

export const ADMIN_LOGIN=`${AUTH_ROUTES}/adminlogin`

export const USERDETAIL_ROUTE=`${AUTH_ROUTES}/userdetails`
