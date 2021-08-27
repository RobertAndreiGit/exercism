class Gigasecond {
  gigaDate: Date;

  constructor(date:Date) {
    date.setSeconds(date.getSeconds() + 1000000000);
    this.gigaDate = date;
  }

  date(): Date {
    return this.gigaDate;
  }
}

export default Gigasecond
