interface Reservation {
  _id?: string;
  name: string;
  phone: string;
  numberOfPersons: number;
  smoking: boolean;
  dateTime: string;
  specialRequests: string;
}

export default Reservation;
