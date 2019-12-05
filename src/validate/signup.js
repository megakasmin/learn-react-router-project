import axios from "axios";

export const validationForm = async values => {
  const API = process.env.REACT_APP_API_LIVE;
  console.log(API);

  let errors = {};

  try {
    const { data: result } = await axios.post(`${API}/validate/signup`, values);

    return { ...errors, ...result };
  } catch (err) {
      console.log(err)
    throw err;
  }
};
