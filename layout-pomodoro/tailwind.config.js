module.exports = {
  content: ["./public/**/*{html,js}"],
  theme: {
    extend: {
      colors:{
        white: "#fff",
        redPom: "#d95550",
        bluePom: "#474787",
        light_bluePom: "#626299",
        dark_bluePom: "#5a59aa",
        light_taskPom: "#6766b1",
        pomodoro: "var(--pomodoro)",
        shortBreak: "var(--shortBreak)",
        LongBreak: "var(--LongBreak)",
      },
      fontFamily: {
        concert: "Concert One, sans-serif",
        nunito: "Nunito, sans-serif",
        kanit: "Kanit, sans-serif",
      },
      boxShadow: {
        start_inset: " 0px 9px 0px 1px #f59e0b"
      },
      height: {
        350: "350px",
      }
      
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
