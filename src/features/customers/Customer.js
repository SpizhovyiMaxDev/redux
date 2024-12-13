import { useSelector } from "react-redux";

function Customer() {
  const fullName = useSelector(store => store.accounts.fullName);

  return <h2>👋 Welcome, {fullName}</h2>;
}

export default Customer;
