import axios from "axios";

export const onAddFollow = async (data: any, id: any) => {
  try {
    const result = await axios.patch(
      `http://localhost:4000/user/${data}/follow`,
      {
        id: id,
      }
    );
    return result;
  } catch {
    return false;
  }
};

export const onDeleteFollow = async (data: any, id: any) => {
  try {
    const result = await axios.delete(
      `http://localhost:4000/user/${data}/${id}/follow`
    );
    return result;
  } catch {
    return false;
  }
};
