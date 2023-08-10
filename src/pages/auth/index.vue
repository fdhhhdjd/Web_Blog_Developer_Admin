<script setup>
//* PROVIDERS
import {
  changePasswordAccountInitial,
  forgetPasswordAccountInitial,
  getProfileAccountInitial,
  loginAccountInitial,
  logoutAccountInitial,
  registerAccountInitial,
  renewTokenAccountInitial,
  updateProfileAccountInitial,
  verificationOTPAccountInitial,
} from '@/providers/redux';

// COMMONS
import { useDispatch } from '@/commons';

const dispatch = useDispatch();

const handleLogin = async () => {
  // Login;
  // dispatch(
  //   loginAccountInitial({
  //     email_or_username: 'fdhhhdjd',
  //     password: 'Tahoe123@',
  //   })
  // );
};

const handleRenew = async () => {
  dispatch(renewTokenAccountInitial());
};

const handleRegister = async () => {
  // Register
  // dispatch(
  //   registerAccountInitial({
  //     username: 'nhanhnhauv4p',
  //     email: 'nguyentientai552@gmail.com',
  //     full_name: 'Nguyen Tai',
  //     password: 'Taiheo123@',
  //   })
  // );
};

const handleForget = async () => {
  // Forget
  dispatch(
    forgetPasswordAccountInitial({
      email: 'nguyentientai9@gmail.com',
    })
  );
};

const handleLogout = async () => {
  dispatch(logoutAccountInitial());
};

const verificationOTP = async () => {
  dispatch(
    verificationOTPAccountInitial({
      otp_code: '325719',
    })
  );
};

const handleGetProfile = async () => {
  // Profile
  dispatch(getProfileAccountInitial());
};

const handleChangePassword = async () => {
  // Profile
  dispatch(
    changePasswordAccountInitial({
      old_password: 'Taiheo123@',
      new_password: 'Taiheo123@',
    })
  );
};

const handleUpdateProfile = async () => {
  dispatch(
    updateProfileAccountInitial({
      full_name: 'Nguyễn Tiến Tài',
      avatar_uri: 'https://res.cloudinary.com/taithinhnam/image/upload/v1690459396/Tai_h5ue1j.jpg',
      public_id: 'v1690459396/Tai_h5ue1j',
    })
  );
};
</script>

<template>
  <h1>Authentication</h1>
  <button @click="handleLogin">
Login
</button>
  <button @click="handleLogout">
Logout
</button>
  <button @click="handleGetProfile">
Profile
</button>
  <button @click="handleUpdateProfile">
Update Profile
</button>
  <button @click="handleRegister">
Register
</button>
  <button @click="handleForget">
Forget
</button>
  <button @click="handleRenew">
New Token
</button>
  <button @click="verificationOTP">
Verification OTP
</button>
  <button @click="handleChangePassword">
Change Password
</button>
</template>
