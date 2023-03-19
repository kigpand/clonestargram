import axios from "axios";

export const onAddFollow = async (data: any) => {
  try {
    const result = await axios.patch(
      `http://localhost:4000/user/${data}/follow`
    );
    return result;
  } catch {
    return false;
  }
};

export const onDeleteFollow = async (data: any) => {
  try {
    const result = await axios.delete(
      `http://localhost:4000/user/${data}/follow`
    );
    return result;
  } catch {
    return false;
  }
};
