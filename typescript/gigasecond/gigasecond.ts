class Gigasecond {
  private gigaDate: Date;

  constructor(date: Readonly<Date>) {
    this.gigaDate = new Date(date.getTime() + 10e11);
  }

  date(): Date {
    return this.gigaDate;
  }
}

export default Gigasecond
