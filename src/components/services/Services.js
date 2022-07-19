import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadProducts } from "../../store/action";

export default function Services() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, [dispatch]);

}
