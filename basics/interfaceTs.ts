interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrial: () => string  //not recommended but will work
  startTrial(): string;
//   getCoupon: (couponname: string, value: number) => number // will not work here
  getCoupon(couponname: string, value: number): number;
}
const tarun: User = {
  dbId: 22,
  email: "t@t.com",
  userId: 120,
  startTrial: () => {
    return "trial started";
  },
  getCoupon: (name: "off20", off: 20) => {
    return 20;
  },
};
