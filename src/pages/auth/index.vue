<script setup>
//* PROVIDERS
import {
  forgetPasswordAccountInitial,
  getProfileAccountInitial,
  loginAccountInitial,
  logoutAccountInitial,
  registerAccountInitial,
  renewTokenAccountInitial,
  verificationOTPAccountInitial,
} from '@/providers/redux';

// COMMONS
import { useDispatch } from '@/commons';

const dispatch = useDispatch();

const handleLogin = async () => {
  // Login;
  dispatch(
    loginAccountInitial({
      email_or_username: 'nguyentientai552@gmail.com',
      password: 'Taiheo123@',
    })
  );

  // Register
  // dispatch(
  //   registerAccountInitial({
  //     username: 'nhanhnhauv4p',
  //     email: 'nguyentientai552@gmail.com',
  //     full_name: 'Nguyen Tai',
  //     password: 'Taiheo123@',
  //   })
  // );

  // reNew
  // dispatch(renewTokenAccountInitial());

  // dispatch(
  //   forgetPasswordAccountInitial({
  //     email: 'nguyentientai9@gmail.com',
  //   })
  // );
};

const handleLogout = async () => {
  // Login
  // dispatch(loginAccountInitial({
  //   email_or_username: 'fdhhhdjd',
  //   password: 'Taiheo123@'
  // }));
  // reNew
  // dispatch(renewTokenAccountInitial());
  dispatch(logoutAccountInitial());
  // dispatch(
  //   verificationOTPAccountInitial({
  //     otp_code: '265984',
  //   })
  // );
};

const handleGetProfile = async () => {
  // Profile
  dispatch(getProfileAccountInitial());
};
</script>

<template>
  <h1>Authentication</h1>
  <button @click="handleLogin">Login</button>
  <button @click="handleLogout">Logout</button>
  <button @click="handleGetProfile">Profile</button>
</template>
