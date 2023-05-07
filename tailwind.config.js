/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'login-div' : '95%',
        '126' : '500px',
        '125' : '6%'
      },
      backgroundImage: {
        'mini-logo' : "url('/mini_logo.png')",
        'message-icon' : "url('/message_icon.png')",
        'cloud-icon' : "url('/Cloud-icon.png')",
        'notification-icon' : "url('/notification_icon.png')"
      },
      width: {
        '126' : '500px',
        'login-div' : '550px'
      },
      inset: {
        'icon-login' : '60%',
        'password' : '326px',
        'button' : '352px'
      },
      fontSize: {
        'login-title' : '40px'
      }
    },
  },
  plugins: [],
}