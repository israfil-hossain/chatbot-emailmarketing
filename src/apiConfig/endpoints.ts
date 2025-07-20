const PROD_ADMIN_BASE_URL = "";
const DEV_SERVER_URL = process.env.NEXT_PUBLIC_BACKEND_API_DEV
const user_prefix = "/user/api/v1";

const Auth = {
    Login: user_prefix + '/users/login',
    Registration: user_prefix + "/users/register",
    RegistrationVerification: user_prefix + "/users/register/verify",
    Logout: user_prefix + "/users/logout",
    OtpVerification: user_prefix + "/users/login/verify",
    ForgetPassword: user_prefix + "/users/forget-password",
    ResetPassword: user_prefix + "/users/forget-password/verify",
    RefreshToken: user_prefix + "/users/refresh-token",
    ChangePasswordOTP : user_prefix + "/users/change-password", 
    ChangePassword : user_prefix + "/users/change-password/verify",
    ResendOtp: user_prefix+"/users/resend-otp",
}

const Dashboard = {
    Dashboard: "",
    BillingGraphQL: "billing-report/graphql"
}


const UserAPI = {
    UserList: user_prefix + "/users",
}

const UserProjects = {
    ProjectAPI: user_prefix + "/projects",
    SA_ProjectAPI : user_prefix + "/projects/super-admin"
}

const BindApplication = {
    BindAPI: user_prefix + "/bind-applications"
}
const RoleList = {
    RoleAPI : user_prefix + "/role"
}
export {
    Auth, BindApplication, DEV_SERVER_URL, Dashboard, PROD_ADMIN_BASE_URL,UserAPI, UserProjects,RoleList
};

